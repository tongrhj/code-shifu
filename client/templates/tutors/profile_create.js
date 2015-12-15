Template.profileCreate.onCreated(function(){
  Session.set('profileCreateErrors', {});
});

Template.profileCreate.helpers({
  errorMessage: function(field) {
    return Session.get('profileCreateErrors')[field];
  },
  errorClass: function(field) {
    return !!Session.get('profileCreateErrors')[field] ? 'has-error' : '';
  }
})

Template.profileCreate.events({
  'submit form': function(e) {
    e.preventDefault();

    var profileFields = {
      first_name: $(e.target).find('[name=first_name]').val(),
      last_name: $(e.target).find('[name=last_name]').val(),
      profileId: Meteor.user()._id // watch here
    };

    console.log("profileFields ID: " + profileFields.profileId)

    var errors = validateProfile(profileFields);
    if (errors.first_name || errors.last_name)
      return Session.set('profileCreateErrors', errors);

    Meteor.call('profileInsert', profileFields, function(error, result){
      if (error)
        return throwError(error.reason);
      console.log(profileFields);
      console.log("result :" + result);
      // //
      if (result.profileExists)
         throwError('This profile already exists');

      // Router.go('profilePage', {_id: result._id});
    })
  }
})
