// Instant Search
var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
}

var fields = ['name', 'expertise.skillname']

TutorSearch = new SearchSource('tutors', fields, options)
