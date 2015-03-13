Meteor.subscribe('help_requests');

Template['mentorPanel'].helpers({
  helpRequests: function() {
    return HelpRequests.find({helped: false});
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
  },
  'click .cancel-btn': function(e) {
    var reqId = $(e.target).data('id');
    Meteor.call('cancelRequest', reqId, function(err) {
      if(err) console.log(err);
    })
  },
  'click .complete-btn': function(e) {
    var reqId = $(e.target).data('id');
    Meteor.call('completeRequest', reqId, function(err) {
      if(err) console.log(err);
    })
  }
});
