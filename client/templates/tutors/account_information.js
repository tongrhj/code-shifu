Template.accountInfo.helpers({
  avatarInitials: function () {
    return Meteor.user().username.charAt(0)
  }
})
