Meteor.methods({
  'assignRequest': function(id) {
    check(id, String);

    HelpRequests.update({_id: id}, {$set: {assignedTo: Meteor.userId()}}, function(err) {
      if(err) console.log(err);
    });
  }
});