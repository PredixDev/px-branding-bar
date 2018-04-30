/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
  'use strict';

  Polymer({
    is: 'px-branding-bar',
    properties:{

      /**
       * The application title to display in the lefthand corner of the branding bar.
       * Defaults to the `document.title` attribute if not specified.
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
