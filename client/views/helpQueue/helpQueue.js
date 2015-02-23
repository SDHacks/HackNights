Meteor.subscribe('hackers');
Meteor.subscribe('mentors');

Template['helpQueue'].helpers({
  hackers: function() {
    return Hackers.find();
  },
  mentors: function() {
    return Mentors.find();
  }
});

Template['helpQueue'].events({
  'submit #addHackerForm': function(e) {
    e.preventDefault(); // Prevent form submission from reloading page

    var fields = {
      name: e.target.name.value,
      subject: e.target.subject.value,
      location: e.target.location.value
    };

    // Insert hacker into queue
    Hackers.insert(fields, function() {
      Flash.success('<strong>Your request for help has been received!</strong>');
    });
  }
});
