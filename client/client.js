// Instant Search
const options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
}

const fields = ['name', 'expertise.skillname' ,'profileEmail']

TutorSearch = new SearchSource('tutors', fields, options)
ProfileSearch = new SearchSource('tutors', fields, options)
