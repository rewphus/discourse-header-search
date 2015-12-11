export default Ember.Controller.extend({
  searchVisible: true,

  actions: {
    toggleSearch() {
      console.log("searchVisible = true");
      // there may be a cleaner way, but this is so trivial code wise
      // const $fullpageSearch = $('input.full-page-search');
      // if ($fullpageSearch.length === 1) {
      //   $fullpageSearch.focus().select();
      // } else {
        this.toggleProperty('searchVisible');
      // }
    }
    }
  });
