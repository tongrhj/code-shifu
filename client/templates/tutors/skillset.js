Template.skillSet.helpers({
  userSkills: function() {
    return Tutors.findOne({tutorProfileId: Meteor.user()._id}).expertise
  },

  data: function () {
    return Meteor.subscribe('all-tutors')
  }
});
