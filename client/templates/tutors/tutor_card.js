Template.tutorCard.helpers({
  domain() {
    const a = document.createElement('a')
    a.href = this.url
    return a.hostname
  },

  // data: function () {
  //   return Meteor.subscribe('all-tutors')
  // }
})
