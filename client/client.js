// Instant Search
const options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
}

const fields = ['name', 'expertise.skillname']

TutorSearch = new SearchSource('tutors', fields, options)
