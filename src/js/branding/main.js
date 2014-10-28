'use strict';

require('es5-shim');

var event = require('../util/event'),
    dom = require('../util/dom'),
    ajax = require('../util/ajax'),
    common = require('../util/common');

var panelTemplate = require('./template/panel'),
    barTemplate = require('./template/bar');

var join = require('./join');

renderBar();
attachEvents();

function renderBar() {
  var bar = document.querySelector('[data-' + namespace() + '-brandingbar]');
  var panel = document.querySelector('#' + namespace() + '_panel');

  // Set up bar
  if(!bar.innerHTML) {
    bar.innerHTML = render(barTemplate);
  }

  // Set up panel
  if (!panel) {
    panel = document.createElement('div');
    // ...
    bar.parentElement.insertBefore(panel, bar);
  }

  if (!panel.innerHTML) {
    panel.innerHTML = render(panelTemplate);
  }
}

function attachEvents() {
  var brandingPane = document.querySelector('.' + namespace() + '_wrapper');
  var brandingBarTriggers = document.querySelectorAll('[data-' + namespace() + '-toggle="' + '.' + namespace() + '_wrapper"]');
  var panelTriggers = panel.querySelectorAll('.' + namespace() + '_tools-heading');
  var panels = panel.querySelectorAll('.' + namespace() + '_tools-details');

  // Bind events to show/hide the top panel
  event.on(brandingBarTriggers, 'click', function(ev){
    ev.preventDefault();
    toggle(brandingPane, {toggle: 'is-active'});
  });

  // Bind events to show/hide the tools panels
  event.on(panelTriggers, 'click', function(ev){
    // ...
  });

  // Ajax the signup form if cors support was detected
  if (ajax.supportsCORS()) {
    var form = document.querySelector('.' + namespace() + '_email-form');
    event.addEventListener(form, 'submit', function(ev) {
      // ...
      join('https://sunlightfoundation.com/subscribe/', email, zipcode);
    });
  }
}
