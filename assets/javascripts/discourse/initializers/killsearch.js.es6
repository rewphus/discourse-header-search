import ApplicationView from 'discourse/views/application';
import SearchView from 'discourse/views/search';

export default {
  name: 'search-destroyer',
  initialize(){
    ApplicationView.reopen({
      hideDropdownOnClick: function(e) {
        if (!$("#search-term").is(e.target)) {
            $(".search-context").fadeOut('fast');
            $(".results").fadeOut('fast');
        }
      }.on('mouseDown')
    });
    SearchView.reopen({
      setupDropdown: function() {
        $(".search-context").hide();
        $(".results").hide();
      }.on('didInsertElement')
    });
  }
};
