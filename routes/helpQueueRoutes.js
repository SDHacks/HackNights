Router.route('/help', function () {
  this.render('helpQueue');
});

Router.route('/help/mentor/apply', function() {
  this.render('mentorApplication');
});
