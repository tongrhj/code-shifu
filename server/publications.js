Meteor.publish('tutors', function (selector, options) {
  check(options, {
    sort: Object,
    limit: Number
  })
  check (selector, Object)
  return Tutors.find(selector, options)
})

Meteor.publish('singleTutor', (id) => {
  check(id, String)
  return Tutors.find(id)
})

Meteor.publish('dash-tutors', function () {
  return Tutors.find()
})

Meteor.publish('all-tutors', function () {
  return Tutors.find()
})

Meteor.publish('languages', function () {
  return Languages.find()
})

Meteor.publish("servicesData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'services': 1, 'createdAt': 1}});
  } else {
    this.ready();
  }
});
