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
