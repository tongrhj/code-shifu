Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
})

Router.route('/', {name: 'home', controller: 'MainController'})

MainController = RouteController.extend({
  action() {
  	this.render('home')
  }
})

Router.route('/tutor/:_id', {
  name: 'tutorProfile',
  data() { return Tutors.findOne(this.params._id) }
})
