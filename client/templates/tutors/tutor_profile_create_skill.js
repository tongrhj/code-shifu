Template.tutorProfileCreateSkill.onCreated(function() {
  Session.set('tutorProfileCreateSkillErrors', {});
});

Template.tutorProfileCreateSkill.helpers({
  errorMessage: function(field) {
    return Session.get('tutorProfileCreateSkillErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('tutorProfileCreateSkillErrors')[field] ? 'has-error' : '';
  }
});

Template.tutorProfileCreateSkill.events({
  'submit form': function(e) {
    e.preventDefault();

    const currentUserId = Meteor.userId();
    console.log(currentUserId)

    var skillProperties = { // takes in skillname, proficiency and price from UI
      skillname: $(e.target).find('[name=skillname]').val(),
      proficiency: $(e.target).find('[name=proficiency]').val(),
      price: $(e.target).find('[name=price]').val(),
      tools: $(e.target).find('[name=tools]').val(),
      projects: $(e.target).find('[name=projects]').val(),
      philosophy: $(e.target).find('[name=philosophy]').val()
    }
    console.log(skillProperties)
    var currentUser = Tutors.findOne({tutorProfileId: currentUserId});
    console.log(currentUser)
    Tutors.update({_id: currentUser._id },{ $addToSet: {expertise: skillProperties } })
    console.log(currentUser.expertise)

    var skillExists = currentUser.expertise.forEach((obj) => {
      return obj.skillname == skillProperties.skillname
    })

    if (skillExists) { return "Skill already exists" }
    else {
    // currentUser.expertise.push('skillProperties');
    window.alert('You added a new skill!')
    }
  }
});
