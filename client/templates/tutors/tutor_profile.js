Template.tutorProfile.onRendered(() => {
  this.$('.parallax').parallax()
  this.$('.tabs-wrapper .row').pushpin({ top: $('.tabs-wrapper').offset().top })
})
