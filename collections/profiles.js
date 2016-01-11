Profiles = new Mongo.Collection('profiles');

// Profiles.allow({
//   update: function(userId, profile) { return ownsProfile(userId, profile);},
//   remove: function(userId, profile) { return ownsProfile(userId, profile);},
// });
//
// Profiles.deny({
//   update: function(userId, profile, fieldNames) {
//     return (_.without(fieldNames, 'first_name', 'last_name').length > 0);
//   }
// });
//
// Profiles.deny({
//   update: function(userId, profile, fieldNames, modifier) {
//     var errors = validateProfile(modifier.$set);
//     return errors.first_name || errors.last_name;
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
  profileInsert: function(profileFields) {
    console.log("Proposed Profile(AKA original _id): " + profileFields.profileId); // watch here
    // check(this.userId, String);
    check(profileFields, {
      first_name: String,
      last_name: String,
      profileId: String
    });

    var errors = validateProfile(profileFields);
    if (errors.first_name || errors.last_name)
    {  throw new Meteor.error('invalid-profile', "You must set a first and last name"); } // use invalid-profile?
    else { console.log("First name and last name passed")};

    console.log("Just before check: " + profileFields.profileId);
    var profileWithSameId = Profiles.findOne({profileId: profileFields.profileId}); // ifdoesnotexist, should be undefined
    if(profileWithSameId) { // if it is undefined, evaluates to falsey (means profile doesnt exists)
      return {
        profileExists: true,
        // _id: profileWithSameId._id --> this id is used to go to the created profile with Router.go
      }
    } else { profileExists: false }
    // continues because profileExists: false
    var user = Meteor.user();
    var profile = _.extend(profileFields, {
      profileId: user._id,
      author: user.username,
      submitted: new Date(),
      commentsCount: 0,
      upvoters: [],
      votes:0
    });

    console.log("this is the profile" + profile)
    var profileId = Profiles.insert(profile);
    console.log("This is the profileId: " + profileId)
    return {
      _id: profileId
    };
  }

})
