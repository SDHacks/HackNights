HelpRequests = new Mongo.Collection('help_requests');

HelpRequests.attachSchema(
  new SimpleSchema({
    reqBy: {
      type: String,
      autoValue: function() { if (this.isInsert) return Meteor.userId(); },
      denyUpdate: true
    },
    subject: {
      type: String
    },
    location: {
      type: String
    },
    assignedTo: {
      type: String,
      optional: true
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
  HelpRequests.allow({
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
