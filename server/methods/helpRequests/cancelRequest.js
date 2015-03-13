Meteor.methods({
  'cancelRequest': function(id) {
    check(id, String);

    HelpRequests.update({_id: id}, {$unset: {assignedTo: ''}}, function(err) {
      if(err) console.log(err);
    });
  }
});