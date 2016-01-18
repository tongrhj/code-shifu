Template.tutorProfileCreateSkill.onCreated(function() {
  Session.set('tutorProfileCreateSkillErrors', {});
});

Template.tutorProfileCreateSkill.helpers({
  errorMessage: function(field) {
    return Session.get('tutorProfileCreateSkillErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('tutorProfileCreateSkillErrors')[field] ? 'has-error' : '';
  },
  settings: function() {
    return {
      position: "bottom",
      limit: 15,
      rules: [
        {
          token: '',
          collection: Languages,
          field: "skillname",
          template: Template.language,
          options: 'i',
          matchAll: false,
        },
        // other options
        //   filter: { type: "autocomplete" },
        //   noMatchTemplate: ''
        // }
      ]
    };
  }
});

Template.tutorProfileCreateSkill.events({
  'submit form': function(e) {
    e.preventDefault();

    const currentUserId = Meteor.userId();
    console.log(currentUserId)

    var skillProperties = { // takes in skillname, proficiency and price from UI
      skillname: $(e.target).find('[name=skillname]').val(), // check against a set list (loose set)
      proficiency: $(e.target).find('[name=proficiency]').val(), // years
      price: $(e.target).find('[name=price]').val(), // price per hour
      tools: $(e.target).find('[name=tools]').val(), // loose set
      projects: $(e.target).find('[name=projects]').val(), //github urls
      philosophy: $(e.target).find('[name=philosophy]').val() // textarea
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
