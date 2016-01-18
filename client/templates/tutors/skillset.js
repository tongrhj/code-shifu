Template.skillSet.helpers({
  userSkills: function() {
    if(Tutors.findOne({tutorProfileId: Meteor.user()._id}))
    {return Tutors.findOne({tutorProfileId: Meteor.user()._id}).expertise}
    else {console.log('No Expertise yet, check if skill has been created!')}
  },

  data: function () {
    return Meteor.subscribe('all-tutors')
  }
});
