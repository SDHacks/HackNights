Meteor.publish('mentors', function () {
  return Mentors.find();
});
