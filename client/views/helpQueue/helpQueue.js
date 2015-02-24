Meteor.subscribe('help_requests');
Meteor.subscribe('mentors');

Template['helpQueue'].helpers({
  helpRequests: function() {
    return HelpRequests.find();
  },
  requester: function() {
    var user = Meteor.users.findOne(this.reqBy);
    return user.profile.firstName + ' ' + user.profile.lastName;
  },
  mentors: function() {
    return Mentors.find();
  }
});

Template['helpQueue'].events({
  'submit #addHackerForm': function(e) {
    e.preventDefault(); // Prevent form submission from reloading page

    var fields = {
      subject: e.target.subject.value,
      location: e.target.location.value
    };

    // Insert hacker into queue
    HelpRequests.insert(fields, function(err, id) {
      if (err) Flash.warning(err);
      Flash.success('<strong>Your request for help has been received!</strong>');
    });
  }
});
