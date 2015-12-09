Template.editProfile.onCreated(function() {
  Session.set('editProfileErrors', {});
});

Template.editProfile.helpers({
  errorMessage: function(field){
    return Session.get('editProfileErrors')[field];
  },
  errorClass: function(field){
    return !!Session.get('editProfileErrors')[field] ? 'has-error' : '';
  }
});

Template.editProfile.events({
  'submit form': function(e, template) {
    e.preventDefault();
  }
})
