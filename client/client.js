// Instant Search
const options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: false
}

const fields = ['name', 'expertise.skillname' ,'profileEmail']

ProfileSearch = new SearchSource('tutors', fields, options)
