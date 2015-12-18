Template.tutorSkillEdit.onCreated(function() {
  Session.set('tutorSkillEditErrors', {});
});

Template.tutorSkillEdit.helpers({
  errorMessage: function(field) {
    return Session.get('tutorSkillEditErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('tutorSkillEditErrors')[field] ? 'has-error' : '';
  }
});

Template.tutorSkillEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentUserId = Meteor.userId();
    const currentUser = Tutors.Collection.find({tutorProfileId: currentUserId});

    var skillProperties = {
      skillname: $(e.target).find('[name=skillname]').val(),
      proficiency: $(e.target).find('[name=proficiency]').val(),
      price: $(e.target).find('[name=price]').val()
    };

    this.skillname = skillProperties.skillname
    this.proficiency = skillProperties.proficiency
    this.price = skillProperties.price

  },

  'click .delete': function (e) {
    e.preventDefault()
    const currentUser = Meteor.user()
    const skillNameToDelete = { skillname: $(e.target).find('[name=skillname]').val() }

    if (confirm("Delete this skill?")) {
      var indexToDelete = currentUser.expertise.findIndex((skill) => { return skill.skillname == skillNameToDelete.skillname})
      currentUser.expertise.splice(indexToDelete,1)
      window.alert("Skill Deleted! Shifu has lost some powers.")
    }
  }
});
