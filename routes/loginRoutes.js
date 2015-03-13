Router.route('/login', function () {
  this.render('login');
  SEO.set({ title: 'Login | ' + Meteor.App.NAME });
});
