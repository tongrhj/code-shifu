Template.dashboard.helpers ({
  signupMessage: function () {
    return "Create an account to begin!"
  },
  tutors: function () {
    return Tutors.find()
  },
  currentUser: function() {
    return Meteor.user()._id;
  },
  checkTutorProfileExists: function () {
    if(Tutors.findOne({tutorProfileId: Meteor.user()._id}))
    {
    console.log('profile exists')
    return true
    }
    else {
    console.log('profile does not exist')
    return false
    }
  },

  profileExistsMessage: function () {
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
    // if(Meteor.user().emails[0].address){
    // return Meteor.user().emails[0].address
    // }
    // else {
      // return (Tutors.findOne({tutorProfileId: Meteor.user()._id})).first_name
      return Meteor.user().profile.name // best code as profile will always have name
    // }
  },
  pic: function () {
    var userProfile
    userProfile = Meteor.user().profile

    if(userProfile){
      return userProfile.picture
    }
  },

  settings: function() {
    return {
      position: "top",
      limit: 10,
      rules: [
        {
          token: '',
          collection: Languages,
          field: "skillname",
          template: Template.language
        },
        {
          token: '!',
          collection: Languages,
          field: "skillname",
          options: '',
          matchAll: true,
          filter: { type: "autocomplete" },
          template: Template.language
        }
      ]
    };
  }
})

Template.dashboard.events({
  'click .initials': function () {
    Meteor.subscribe('servicesData')
    if(Meteor.user().services.github) {console.log('GITHUB!')}
    console.log(Meteor.user().createdAt)
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
