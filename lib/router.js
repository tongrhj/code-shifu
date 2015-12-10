Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
})

Router.route('/tutor/:name/:_id', {
  name: 'tutorProfile',
  waitOn() { return Meteor.subscribe('singleTutor', this.params._id) },
  data() { return Tutors.findOne({ _id: this.params._id })}
})

Router.route('/:tutorLimit?', {
  name: 'home',
  controller: 'HomeController',
  // waitOn() {
  //   let limit = parseInt(this.params.tutorLimit, 10) || 6
  //   return Meteor.subscribe('tutors', {name: -1}, limit)
  // },
  // data() {
  //   let limit = parseInt(this.params.postsLimit, 10) || 6
  //   return {
  //     tutors: Tutors.find({}, {name: -1}, limit)
  //   }
  // }
})

HomeController = RouteController.extend({
  action() { this.render('home') },
  increment: 6,
  tutorLimit() {
    return parseInt(this.params.tutorLimit) || this.increment
  },
  findOptions() {
    return {sort: {name: -1}, limit: this.tutorLimit()}
  },
  subscriptions() {
    this.tutorSub = Meteor.subscribe('tutors', this.findOptions())
  },
  tutors() {
    return Tutors.find({}, this.findOptions())
  },
  data() {
    const hasMoreToLoad = this.tutors().count() === this.tutorLimit()
    const nextPath = this.route.path({tutorLimit: this.tutorLimit() + this.increment})
    return {
      tutors: this.tutors(),
      ready: this.tutorSub.ready,
      nextPath: hasMoreToLoad ? nextPath : null
    }
  }
})
