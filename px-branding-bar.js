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
/**
### Usage
To use the default icon (the GE Monogram):

    <px-branding-bar application-title="Predix UI"></px-branding-bar>

For a more custom version, use the `logo` and `title` content slots:

    <px-branding-bar>
      <px-icon slot="logo" icon="px-utl:alert"></px-icon>
      <span slot="title">Hello Predix</span>
    </px-branding-bar>

### Styling
The following custom properties are available for styling:

Custom property | Description
----------------|-------------
`--px-branding-bar-height` | Height of the branding bar
`--px-branding-bar-background-color` | Background color for the branding bar
`--px-branding-bar-font-size` | Font size for text displayed in the branding bar
`--px-branding-bar-logo-and-title-text-color` | Text color of the logo and title area of the branding bar

@element px-branding-bar
@blurb A component providing a header area to contain title, logo and branding content.
@homepage index.html
@demo index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './px-ge-svg-logo.js';
import './predix-logo.js';
import './css/px-branding-bar-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-branding-bar-styles"></style>

    <div class="u-ml flex flex--middle">
      <div class="u-ml-- flex flex--middle">
        <slot name="logo">
          <px-ge-svg-logo class="flex flex--middle"></px-ge-svg-logo>
        </slot>
      </div>
      <div class="u-ml-- flex flex--middle">
        <slot name="title">
          <label>{{applicationTitle}}</label>
        </slot>
      </div>
    </div>

    <div class="flex flex--middle">
      <slot name="attribution">
        <span class="u-mr-- px-branding-bar__powered-by-text">Powered by</span>
        <predix-logo class="u-mr"></predix-logo>
      </slot>
    </div>
`,

  is:'px-branding-bar',

  properties:{/**
         * The application title to display in the lefthand corner of the branding bar.
         * Defaults to the `document.title` attribute if not specified.
         * @type {String}
         */applicationTitle:{type:String,value:function value(){return document.title}}}
})
