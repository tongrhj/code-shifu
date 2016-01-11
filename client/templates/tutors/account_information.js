Template.accountInfo.helpers({
  avatarInitials: function () {
    return Meteor.user().username.charAt(0)
  },
  aboutMeText: function() {
    return Tutors.findOne({tutorProfileId: Meteor.user()._id}).about_me
  },
  userSkills: function() {
    return Meteor.user().username
  }
})
