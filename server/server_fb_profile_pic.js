var getFbPicture = function(accessToken) { // make async call to grab the picture from facebook
    var result;
    result = Meteor.http.get("https://graph.facebook.com/me", {
      params: {
        access_token: accessToken,
        fields: 'picture'
      }
    });
    if(result.error) {
      throw result.error;
    }
    return result.data.picture.data.url; // return the picture's url
  };

// during new account creation get user picture from Facebook and save it on user object
Accounts.onCreateUser(function(options, user) {
  if(options.profile) {
    options.profile.picture = getFbPicture(user.services.facebook.accessToken);
    user.profile = options.profile; // We still want the default 'profile' behavior.
  }
  return user;
});
