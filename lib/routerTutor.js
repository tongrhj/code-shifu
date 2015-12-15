Router.route('/createtutorprofile', {name: 'tutorProfileCreate'})

Router.route('/tutors', {
  name: 'tutorPage', // naming the route
  // template: 'profilePage',
  subscriptions: function () {
    this.tutorsSub = Meteor.subscribe('tutors')
  },
  tutors: function () {
    return Tutors.find({})
  },
  data: function() {
  var self = this;
  return {
  tutors: function () {return Tutors.find()}, //posts.self.posts()
  ready: self.tutorsSub.ready}
}
})

Router.route('/tutorprofileedit', {
  name: 'tutorProfileEdit',
  template: 'tutorProfileEdit'})

// Routes to be defined:
// - Tutor Profile Create Skill
// - Tutor Profile Edit Skill
