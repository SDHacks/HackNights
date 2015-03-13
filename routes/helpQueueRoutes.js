Router.route('/help', function () {
  this.render('helpQueue');
});

Router.route('/help/mentor', function() {
  this.render('mentorPanel');
});

Router.route('/help/mentor/apply', function() {
  this.render('mentorApplication');
});
