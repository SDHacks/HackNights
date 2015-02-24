Meteor.publishComposite('help_requests', {
  find: function() {
    return HelpRequests.find();
  },
  children: [
    {
      find: function(requester) {
        return Meteor.users.find(
          {_id: requester.reqBy},
          {limit: 1, fields: {profile: 1}}
        );
      }
    }
  ]
});
