// Router.configure({
//   layoutTemplate: 'layout',
//   loadingTemplate: 'loading'
// })

// Router.route('/', {name: 'home', controller: 'MainController'})
//
// MainController = RouteController.extend({
//   action() {
//   	this.render('home')
//   }
// })


// Router.route('/tutors/:_id', {
//   name: 'tutorPage',
//   data() { return Tutors.findOne(this.params._id) }
// })

Router.route('/submit', {name: 'profileCreate'});

Router.route('/profiles', {
  name: 'profilePage', // naming the route
  // template: 'profilePage',
  subscriptions: function () {
    this.profilesSub = Meteor.subscribe('profiles')
  },
  profiles: function () {
    return Profiles.find({})
  },
  data: function() {
  var self = this;
  return {
  profiles: function () {return Profiles.find()}, //posts.self.posts()
  ready: self.profilesSub.ready}
}
})

var requireLogin = function () {
  if(! Meteor.user()) {
    if(Meteor.loggingIn()){
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}
