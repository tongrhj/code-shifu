Router.route('/tutorProfileCreate', {
  name: 'tutorProfileCreate',
  template: 'tutorProfileCreate'
})

DashboardController = RouteController.extend({
  template: 'dashboard',
  data: function () {
    return [Meteor.subscribe('dash-tutors'), Meteor.subscribe('languages')] // data context passes down to tutorprofilecreateskill
  }
})

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController',
})

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
// - Tutor Profile Edit Skill
