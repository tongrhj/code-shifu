Template.tutorSkillCreate.onCreated(function() {
  Session.set('tutorSkillCreateErrors', {});
});

Template.tutorSkillCreate.helpers({
  errorMessage: function(field) {
    return Session.get('tutorSkillCreateErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('tutorSkillCreateErrors')[field] ? 'has-error' : '';
  }
});

Template.tutorSkillCreate.events({
  'submit form': function(e) {
    e.preventDefault();

    const currentUserId = Meteor.userId();

    var skillProperties = { // takes in skillname, proficiency and price from UI
      skillname: $(e.target).find('[name=skillname]').val(),
      proficiency: $(e.target).find('[name=proficiency]').val(),
      price: $(e.target).find('[name=price]').val()
    }
    var currentUser = Tutors.Collection.find({tutorProfileId: currentUserId});

    var skillExists = currentUser.expertise.forEach((obj) => {
      return obj.skillname == skillProperties.skillname
    })

    if (skillExists) { return "Skill already exists" }
    else {Tutors.find({tutorProfileId: currentUserId}).expertise.push(skillProperties);}
  }
});
