Router.route('/help', function () {
  this.render('helpQueue');
  SEO.set({ title: 'Hack Help | ' + Meteor.App.NAME });
});

Router.route('/help/mentor', function() {
  this.render('mentorPanel');
  SEO.set({ title: 'Mentor Panel | ' + Meteor.App.NAME });
});

Router.route('/help/mentor/apply', function() {
  this.render('mentorApplication');
  SEO.set({ title: 'Mentor Application | ' + Meteor.App.NAME });
});
