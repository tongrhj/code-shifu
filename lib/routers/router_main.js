Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
})

TutorListController = RouteController.extend({
  template: 'home',
  increment: 6,
  tutorLimit () {
    return parseInt(this.params.tutorLimit) || this.increment
  },
  findOptions () {
    return {sort: this.sort, limit: this.tutorLimit()}
  },
  skillname () {
    return this.params.skillname || 'Javascript'
  },
  findSelector () {
    return this.selector()
  },
  subscriptions () {
    this.tutorsSub = Meteor.subscribe('tutors', this.findSelector(), this.findOptions())
  },
  tutors () {
    return Tutors.find(this.findSelector(), this.findOptions())
  },

  data () {
    const hasMore = this.tutors().count() === this.tutorLimit()
    return {
      tutors: this.tutors(),
      ready: this.tutorsSub.ready,
      nextPath: hasMore ? this.nextPath() : null
    }
  }
})

HomeController = TutorListController.extend({
  sort: {name: 1, _id: 1},
  selector () { return {expertise: { $exists: true }} },
  nextPath () {
    return Router.routes.home.path({tutorLimit: this.tutorLimit() + this.increment})
  }
})

TutorsBySkillController = TutorListController.extend({
  sort: {name: 1, _id: 1},
  selector () {
    return { 'expertise.skillname': this.skillname() }
  },
  nextPath () {
    return Router.current().path(this, {tutorLimit: this.tutorLimit() + this.increment})
  }
})

Router.route('/', {
  name: 'homeRoot',
  controller: 'HomeController',
})

Router.route('/limit/:tutorLimit?', {
  name: 'home',
  controller: 'HomeController'
})

Router.route('/expertise/:skillname/:tutorLimit?', {
  name: 'tutorsBySkill',
  controller: 'TutorsBySkillController'
})
