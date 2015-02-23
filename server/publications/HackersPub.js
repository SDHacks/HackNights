Meteor.publish('hackers', function () {
  return Hackers.find();
});
