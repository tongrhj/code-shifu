Template.dashboard.helpers ({
  tutors: function () {
    return Tutors.find()
  },
  currentUser: function() {
    return Meteor.user()._id;
  },

  checkTutorProfileExists: function () {
    var message = ''
    if(Tutors.findOne({tutorProfileId: Meteor.user()._id}))
    {
    message = 'Here is your profile. Remember to save any changes made.'
    return message
    }
    else {
    message = 'You do not have a tutor profile with us. Would you like to create one?'
    return message
    }
  },
  currentUsername: function () {
    return Meteor.user().emails[0].address
  }
})


Template.home.helpers ({
  tutors: function () {
    return Tutors.find()
  },
  instantiate: function () {
    const options = {
      keepHistory: 1000 * 60 * 5,
      localSearch: true
    }
    console.log('hellooooooo')
    const fields = ['name', 'expertise.skillname']

    TutorSearch = new SearchSource('tutors', fields, options)
    console.log(TutorSearch)
    // return TutorSearch
  }
})
