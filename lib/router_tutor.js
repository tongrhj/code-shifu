// Router.route('/tutors', {
//   name: 'tutorPage', // naming the route
//   // template: 'profilePage',
//   subscriptions: function () {
//     this.tutorsSub = Meteor.subscribe('tutors')
//   },
//   tutors: function () {
//     return Tutors.find({})
//   },
//   data: function() {
//     var self = this
//     return {
//       tutors () { return Tutors.find() }, //posts.self.posts()
//       ready: self.tutorsSub.ready
//     }
//   }
// })

Router.route('/tutorProfileCreate', {
  name: 'tutorProfileCreate',
  template: 'tutorProfileCreate'
})

DashboardController = RouteController.extend({
  template: 'dashboard',
  // subscriptions: function () {
  //   return Meteor.subscribe('tutors')
  // },
  // tutors: function () {
  //   return Tutors.find()
  // }
  data: function () {
    return Meteor.subscribe('dash-tutors')
  }
})

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController',
})

// Router.route('/tutor/:create', {
//   name: 'tutorProfileCreate',
//   waitOn() { return Meteor.subscribe('singleTutor', this.params._id) },
//   data() { return Tutors.findOne({ _id: this.params._id }) }
// })

Router.route('/tutor/:name/:_id', {
  name: 'tutorProfile',
  waitOn() { return Meteor.subscribe('singleTutor', this.params._id) },
  data() { return Tutors.findOne({ _id: this.params._id }) }
})

Router.route('/tutor/:name/:_id/edit', {
  name: 'tutorProfileEdit',
  waitOn() { return Meteor.subscribe('singleTutor', this.params._id) },
  data() { return Tutors.findOne({ _id: this.params._id }) }
})

// Routes to be defined:
// - Tutor Profile Create Skill
// - Tutor Profile Edit Skill
