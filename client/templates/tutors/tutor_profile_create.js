Template.tutorProfileCreate.onCreated(function(){
  Session.set('tutorProfileCreateErrors', {});
});

Template.tutorProfileCreate.helpers({
  errorMessage: function(field) {
    return Session.get('tutorProfileCreateErrors')[field];
  },
  errorClass: function(field) {
    return !!Session.get('tutorProfileCreateErrors')[field] ? 'has-error' : '';
  }
})

Template.tutorProfileCreate.events({
  'submit form': function(e) {
    e.preventDefault();

    var tutorProfileFields = {
      first_name: $(e.target).find('[name=first_name]').val(),
      last_name: $(e.target).find('[name=last_name]').val(),
      githubUrl: $(e.target).find('[name=githubUrl]').val(),
      profileEmail: $(e.target).find('[name=profileEmail]').val(),
      name: $(e.target).find('[name=first_name]').val() + ' ' + $(e.target).find('[name=last_name]').val(),
      expertise: [], // remember to clean data
      about_me: $(e.target).find('[name=about_me]').val() || "Hello! Drop me a message to learn more!",
      reviews: {},
      tutorProfileId: Meteor.user()._id
    };

    var errors = validateTutorProfile(tutorProfileFields);
    if (errors.first_name || errors.last_name)
      return Session.set('tutorProfileCreateErrors', errors);

    Meteor.call('tutorProfileInsert', tutorProfileFields, function(error, result){
      if (error)
        return throwError(error.reason);
      if (result.tutorProfileExists)
         throwError('This profile already exists');

      // if(Tutors.findOne({tutorProfileId: Meteor.user()._id})) {window.alert("Profile already exists!")}
      window.alert("You have created your Shifu cred!")
      Router.go('home')
    })
  }
})
