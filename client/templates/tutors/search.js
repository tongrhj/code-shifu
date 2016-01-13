Template.searchResult.helpers({
  getTutors() {
    return TutorSearch.getData({
      transform (matchText, regExp) {
        console.log(matchText)
        return matchText.replace(regExp, '<span class="pink-text text-darken-2"><b>$&</b></span>')
      },
      sort: {name: -1}
    })
  },
  isLoading() {
    return TutorSearch.getStatus().loading
  }
})

Template.searchResult.rendered = () => {
  TutorSearch.search('');
}

Template.searchBox.events({
  "keyup #search-box": _.throttle(function(e) {
    const text = $(e.target).val().trim()
    TutorSearch.search(text)
  }, 200),

  "click #search-box"(e) {
    $('.search-bg').toggleClass("z-depth-5")
  }
})

// Hack: autopopulate search box and trigger keyup to simulate user search to filter results
Template.javascriptFilterBtn.events({
  "click #js-filter-btn"(e) {
    e.preventDefault()
    $('#search-box').val('Javascript')
    $('#search-box').trigger('keyup', {ctrlKey: false, which: 40})
  },
  "click #html-filter-btn"(e) {
    e.preventDefault()
    $('#search-box').val('HTML')
    $('#search-box').trigger('keyup', {ctrlKey: false, which: 40})
  },
  "click #mongodb-filter-btn"(e) {
    e.preventDefault()
    $('#search-box').val('MongoDB')
    $('#search-box').trigger('keyup', {ctrlKey: false, which: 40})
  }
})
