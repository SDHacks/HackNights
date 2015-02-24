Meteor.publish('mentors', function () {
  return ;
});

Meteor.publishComposite('mentors', {
  find: function() {
    return Mentors.find();
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
