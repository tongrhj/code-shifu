Tutors = new Mongo.Collection('tutors')

// Meteor.methods({
//   addGithubProfile: function(){
//     check(this.userId, String);
//     check()
//   }
// })

validateProfile = function(profile) {
  var errors = {}
  if(!profile.first_name)
    errors.first_name = "Please fill in your first name";

  if(!profile.last_name)
    errors.last_name = "Please fill in your last name";

  return errors;
}

Meteor.methods({
  profileSave: function(profile) {
    check(this.userId, String);
    check(profile, {
      first_name: String,
      last_name: String
    });

    var errors = validateProfile(profile);
    if (errors.first_name || errors.last_name)
      throw new Meteor.error('invalid-profile', "You must set a first and last name"); // use invalid-profile?
    // TO WRITE THIS [incomplete]
    // var profileWithSameEmail = Tutors.findOne({email: profile.email});
    // if (profileWithSameEmail) {
    //   return {
    //     profileExists: true,
    //     _id: profileWithSameEmail._id
    //   }
    // }
  }
})
