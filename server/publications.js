Meteor.publish('tutors', (options) => {
  check(options, {
    sort: Object,
    limit: Number
  })
  return Tutors.find({}, options)
})

Meteor.publish('singleTutor', (id) => {
  check(id, String)
  return Tutors.find(id)
})
