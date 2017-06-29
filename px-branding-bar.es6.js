(function() {
  'use strict';
  
  Polymer({
    is: 'px-branding-bar',
    properties:{

      /**
       * The application title to display in the lefthand corner of the branding bar.
       * Defaults to document.title unless specified.
       * @type {String}
       */
      applicationTitle:{
        type: String,
        value: function() {
          return document.title;
        }
      }
    }
  });
})();
