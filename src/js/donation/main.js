'use strict';

/**
 * Renders the donation bar and handles modal and form events.
 *
 * @author Olivia Cheng
 */

require('es5-shim');

var event = require('../util/event'),
    dom = require('../util/dom'),
    ajax = require('../util/ajax'),
    common = require('../util/common');

var panelTemplate = require('./template/panel'),
    barTemplate = require('./template/bar');

var donate = require('./donate');

renderBar();
attachEvents();

function renderBar() {
  var bar = document.querySelector('...');

  // Set up bar
  if(!bar.innerHTML) {
    bar.innerHTML = common.render(barTemplate);
  }
}

function attachEvents() {
  var submitButton = '...';

  // Bind events to show/hide the top panel
  event.on(submitButton, 'click', donate);
}
