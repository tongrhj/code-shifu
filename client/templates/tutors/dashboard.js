Template.dashboard.helpers ({
  tutorprofiles: function () {
    return Tutors.find()
  },
  currentUser: function() {
    return Meteor.user()._id;
  },

  checkTutorProfileExists: function () {
    var message = ''
    if(Tutors.findOne({tutorProfileId: Meteor.user()._id}))
    {
    message = 'tutorprofile exists for this user!'
    return message
    }
    else {
    message = 'Tutorprofile does not exists!'
    return message
    }
  }
})


Template.home.helpers ({
  tutorprofiles: function () {
    return Tutors.find()
  }
})
