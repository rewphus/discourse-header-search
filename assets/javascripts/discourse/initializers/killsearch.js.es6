import ApplicationView from 'discourse/views/application';
import SearchView from 'discourse/views/full-page-search';
import LoadingView from 'discourse/views/loading';

import { default as computed, on, observes } from 'ember-addons/ember-computed-decorators';
import { headerHeight } from 'discourse/views/header';


// export default Ember.Controller.extend({
//   searchVisible: true,
//
//   actions: {
//     toggleSearch() {
//       // there may be a cleaner way, but this is so trivial code wise
//
//         this.toggleProperty('searchVisible');
//     }
// });

export default Ember.Component.extend({
  @computed('force')
  viewMode() {
    const force = this.get('force');
    if (force) { return force; }

    const headerWidth = $('#main-outlet .container').width() || 6100;
    const screenWidth = $(window).width();
    const remaining = parseInt((screenWidth - headerWidth) / 2);
    console.log("slide-in");
    return (remaining < 50) ? 'slide-in' : 'drop-down';
  }
});

export default {
  name: 'search-destroyer',
  initialize(){
    // ApplicationView.reopen({
    //   hideDropdownOnClick: function(e) {
    //     if (!$("#search-term").is(e.target)) {
    //       console.log("hideDropDown plugin enabled!");
    //         $(".search-context").fadeOut('fast');
    //         // $(".results").fadeOut('fast');
    //     }
    //   }.on('mouseDown')
    // });
    // SearchView.reopen({
    //   setupDropdown: function() {
    //     console.log("Full page plugin enabled!");
    //     $(".search-context").hide();
    //     $(".results").hide();
    //   }.on('didInsertElement')
    // });
    // LoadingView.reopen({
    //   toggleSearch2: function() {
    //     console.log("header plugin enabled!");
    //     $('#search-term').focus().select();
    //     // there may be a cleaner way, but this is so trivial code wise
    //     const $fullpageSearch = $('input.full-page-search');
    //     if ($fullpageSearch.length === 1) {
    //       $fullpageSearch.focus().select();
    //     } else {
    //       this.toggleProperty('searchVisible');
    //     }
    //   }
    // });
  }
};
