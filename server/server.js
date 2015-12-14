SearchSource.defineSource('tutors', (searchText) => {
  if(searchText) {
    const regExp = buildRegExp(searchText)
    const selector = {$or: [
      {'name': regExp},
      {'expertise.skillname': regExp}
    ]}
    return Tutors.find(selector).fetch()
  } else {
    return Tutors.find({}).fetch()
  }
})

function buildRegExp(searchText) {
  const words = searchText.trim().split(/[ \-\:]+/)
  const exps = _.map(words, (word) => {
    return "(?=.*" + word + ")"
  })
  const fullExp = exps.join('') + ".+"
  return new RegExp(fullExp, "i")
}
