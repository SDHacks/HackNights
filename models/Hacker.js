Hacker = new Mongo.Collection('Hacker');

Hacker.attachSchema(
  new SimpleSchema({
    name: {
      type: String
    },
    subject: {
      type: String
    },
    location: {
      type: String
    },
    helped: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      denyUpdate: true
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Hacker.allow({
    insert: function() {
      return true;
    },
    update: function() {
      return true;
    },
    remove: function() {
      return true;
    }
  });
}
