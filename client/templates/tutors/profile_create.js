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

    var profile = {
      first_name: $(e.target).find('[name=first_name]').val(),
      last_name: $(e.target).find('[name=last_name]').val()
    };

    var errors = validateProfile(profile);
    if (errors.first_name || errors.last_name)
      return Session.set('profileCreateErrors', errors);

    Meteor.call('profileSave', profile, function(error, result){
      if (error)
        return throwError(error.reason);
      //  yet to write section [incomplete]
      // if (error.profileExists)
      //   throwError('This profile already exists');
      //
      // Router.go('profilePage', {_id: result._id});
    })
  }
})
