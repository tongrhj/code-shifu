Template.accountInfo.helpers({
  avatarInitials: function () {
    return (Tutors.findOne({tutorProfileId: Meteor.user()._id})).first_name.charAt(0)
  },
  aboutMeText: function() {
    return Tutors.findOne({tutorProfileId: Meteor.user()._id}).about_me
  }
})
