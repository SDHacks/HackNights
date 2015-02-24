Template['nav'].helpers({
  currentUser: function() {
    return Meteor.user();
  }
});

Template['nav'].events({
  'click #logoutLink': function() {
    Meteor.logout();
  }
});
