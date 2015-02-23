Hackers = new Mongo.Collection('hackers');

Hackers.attachSchema(
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
      autoValue: function() { return false; }
    },
    createdAt: {
      type: Date,
      denyUpdate: true,
      autoValue: function() { return new Date(); }
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Hackers.allow({
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
