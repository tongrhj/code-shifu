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
  name: 'tutorPage',
  data() { return Posts.findOne(this.params._id) }
})
