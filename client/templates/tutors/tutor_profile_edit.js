Template.tutorProfileEdit.onCreated(function() {
  Session.set('tutorProfileEditErrors', {});
});

Template.tutorProfileEdit.helpers({
  errorMessage: function(field){
    return Session.get('tutorProfileEditErrors')[field];
  },
  errorClass: function(field){
    return !!Session.get('tutorProfileEditErrors')[field] ? 'has-error' : '';
  }
});

Template.tutorProfileEdit.events({
  'submit form': function(e) {
    e.preventDefault();

  var currentUserId = Meteor.userId();

  var tutorProfileEdits = {
    first_name: $(e.target).find('[name=first_name]').val(),
    last_name: $(e.target).find('[name=last_name]').val(),
    githubUrl: $(e.target).find('[name=githubUrl]').val(),
    profileEmail: $(e.target).find('[name=profileEmail]').val(),
    name: $(e.target).find('[name=first_name]').val() + ' ' + $(e.target).find('[name=last_name]').val(),
    // expertise: $(e.target).find('[name=expertise]').val(),
    about_me: $(e.target).find('[name=about_me]').val(),
    tutorProfileId: Meteor.user()._id // alternative to Meteor.userId()
  }
  // Ignore error checking
  // var errors = validateTutorProfile(tutorProfileEdits);
  // if (errors.title || errors.url)
  //   return Session.set('tutorProfileEditErrors', errors);

  Tutors.update(currentUserId, {$set: tutorProfileEdits}, function(error){
    if (error) {
      throwError(error.reason)
    } else {
      Router.go('profiles')
    }
  })

},
'click .delete': function(e) {
  e.preventDefault();

  if (confirm("Delete this profile?")) {
    var currentUserId = this._id;
    Tutors.remove(currentUserId);
    Router.go('home');
  }
}

})
