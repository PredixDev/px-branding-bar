/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style>
      svg{
        margin: 0 auto;
        display: block;
        max-width:60px;
        vertical-align: middle;
      }
      .cls-1 { fill: #2886af; }
      .cls-2 { fill: #3ab4d4; }
    </style>
    <svg xmlns="http://www.w3.org/2000/svg" height="13" viewBox="0 0 82.13 13.24">
      <polygon class="cls-1" points="31.08 0 31.08 13.24 42.44 13.24 42.44 10.88 33.92 10.88 33.92 7.79 41.02 7.79 41.02 5.43 33.92 5.43 33.92 2.37 42.44 2.37 42.44 0 31.08 0"></polygon>
      <path class="cls-1" d="M49.3,10.84h2.17a4.93,4.93,0,0,0,3.64-1.32,4.12,4.12,0,0,0,1.11-3c-0.06-2-1.34-4.12-4.75-4.12H49.3v8.48Zm-2.84,2.4V0h5a8,8,0,0,1,5.72,2,6.4,6.4,0,0,1,1.87,4.48,6.35,6.35,0,0,1-1.78,4.62,7.91,7.91,0,0,1-5.81,2.11h-5Z"></path>
      <polygon class="cls-1" points="62.57 13.24 65.41 13.24 65.41 0 62.57 0 62.57 6.57 62.57 13.24"></polygon>
      <path class="cls-1" d="M6.2,0H0V13.24H2.86V9.09H6.2c3.83,0,5.57-2.41,5.57-4.67S10,0,6.2,0Zm0,6.72H2.86V2.37H6.2c1.88,0,2.74.92,2.74,2.05S8.08,6.72,6.2,6.72Z"></path>
      <path class="cls-1" d="M27.09,13.24L23.56,8.81a4.57,4.57,0,0,0,3.5-4.39C27.06,2.16,25.32,0,21.49,0h-6.2V13.24h2.86V9.09H20.6l3.16,4.16h3.33ZM18.15,2.37h3.34c1.88,0,2.74.92,2.74,2.05s-0.86,2.3-2.74,2.3H18.15V2.37Z"></path>
      <polygon class="cls-1" points="77.38 6.14 82.13 0 78.79 0 75.34 4.56 71.9 0 68.57 0 73.31 6.14 77.38 6.14"></polygon>
      <polygon class="cls-2" points="73.31 7.08 68.55 13.24 71.88 13.24 75.34 8.67 78.8 13.24 82.13 13.24 77.37 7.08 73.31 7.08"></polygon>
    </svg>
`,

  is: 'predix-logo'
});
