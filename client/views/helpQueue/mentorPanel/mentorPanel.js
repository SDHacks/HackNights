Meteor.subscribe('help_requests');

Template['mentorPanel'].helpers({
  helpRequests: function() {
    return HelpRequests.find();
  },
  name: function() {
    var user = Meteor.users.findOne(this.reqBy);
    return user.profile.firstName + ' ' + user.profile.lastName;
  }
});

Template['mentorPanel'].events({
  'click .help-btn': function(e) {
    var reqId = $(e.target).data('id');
    Meteor.call('assignRequest', reqId, function(err) {
      if(err) console.log(err);
    });
  }
});
