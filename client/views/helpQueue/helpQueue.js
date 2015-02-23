Meteor.subscribe('hackers');
Meteor.subscribe('mentors');

Template['helpQueue'].helpers({
  'hackers' : function() {
    return Hackers.find();
  },
  'mentors' : function() {
    return Mentors.find();
  }
});

Template['helpQueue'].events({
});
