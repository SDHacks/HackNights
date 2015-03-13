Meteor.methods({
  'completeRequest': function(id) {
    check(id, String);

    HelpRequests.update({_id: id}, {$set: {helped: true}}, function(err) {
      if(err) console.log(err);
    });
  }
});