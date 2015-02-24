Mentors = new Mongo.Collection('mentors');

Mentors.attachSchema(
  new SimpleSchema({
    userId: {
      type: String
    },
    subjects: {
      type: [String],
      label: "Subjects"
    },
    approved: {
      type: Boolean
    },
    status: {
      type: String,
      allowedValues: ['Offline', 'Available', 'Occupied'],
      autoValue: function() {
        if (this.isInsert) return 'Offline';
      }
    },
    createdAt: {
      type: Date,
      denyUpdate: true,
      autoValue: function() {
        if (this.isInsert) return new Date();
      }
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Mentors.allow({
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
