Tutors = new Mongo.Collection('tutors')

Tutors.allow({
  update (tutorProfileId, profile) { return ownsProfile(tutorProfileId, profile) },
  remove (tutorProfileId, profile) { return ownsProfile(tutorProfileId, profile) }
})

validateTutorProfile = function (tutorProfile) {
  var errors = {}
  if(!tutorProfile.first_name)
    errors.first_name = 'Please fill in your first name'

  if(!tutorProfile.last_name)
    errors.last_name = 'Please fill in your last name'

  return errors
}

validateSkill = function (skillProperties) {
  var errors = {}
  if (!skillProperties.skillname) errors.title = 'Please fill in a name'
  if (!skillProperties.price) errors.url = 'Please fill in a price'
  return errors
}

Meteor.methods({
  tutorProfileInsert (tutorProfileFields) {
    console.log('Proposed Profile(AKA original _id): ' + tutorProfileFields.tutorProfileId) // watch here
    // check(this.userId, String)
    check(tutorProfileFields, {
      first_name: String,
      last_name: String,
      tutorProfileId: String,
      githubUrl: String,
      profileEmail: String,
      name: String,
      about_me: String,
      expertise: Array,
      reviews: Object
    })

    var errors = validateTutorProfile(tutorProfileFields)
    if (errors.first_name || errors.last_name)
    {  throw new Meteor.error('invalid-profile', 'You must set a first and last name') } // use invalid-profile?
    else { console.log('First name and last name passed')}

    console.log('Just before check: ' + tutorProfileFields.tutorProfileId)
    var tutorProfileWithSameId = Tutors.findOne({tutorProfileId: tutorProfileFields.tutorProfileId}) // ifdoesnotexist, should be undefined
    if(tutorProfileWithSameId) { // if it is undefined, evaluates to falsey (means profile doesnt exist)
      return {
        tutorProfileExists: true
        // _id: profileWithSameId._id --> this id is used to go to the created profile with Router.go
      }
    } else { tutorProfileExists: false }
    // continues because profileExists: false
    var user = Meteor.user()
    var tutorProfile = _.extend(tutorProfileFields, {
      tutorProfileId: user._id,
      submitted: new Date()
    })

    console.log('this is the profile ' + tutorProfile)
    var tutorProfileId = Tutors.insert(tutorProfile) // insert returns ._id
    console.log('This is the profileId: ' + tutorProfileId)
    return {
      _id: tutorProfileId
    }
  }

})
