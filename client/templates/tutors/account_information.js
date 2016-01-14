Template.accountInfo.helpers({
  avatarInitials: function () {
    return Meteor.user().emails[0].address.charAt(0)
  },
  aboutMeText: function() {
    return Tutors.findOne({tutorProfileId: Meteor.user()._id}).about_me
  }
})
