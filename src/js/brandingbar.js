'use strict';

/**
 * Fetches the property id for the website and loads the appropriate bar.
 *
 * @author Olivia Cheng
 */

var BRANDING_BAR_PROPERTY_URL = 'https://sunlightfoundation.com/brandingbar',
    BRANDING_BAR_CDN_URL = 'https://s3.amazonaws.com/sunlight-cdn/brandingbar';

var common = require('./util/common'),
    ajax = require('./util/ajax'),
    dom = require('./util/dom');

var id = propertyId();

// Load the bar for the given property or load the default one.
if (id) {
  ajax.getJSONP(BRANDING_BAR_PROPERTY_URL + '?pid=' + id, function (response) {
    loadBar(response.type);
  });
} else {
  loadBar('BRANDING');
}

/**
 * Retrieves the property id of the website that this script is embedded in.
 *
 * @returns {string | undefined}
 */
function propertyId() {
  var bar = document.querySelector('[data-' + common.namespace() + '-brandingbar]'),
      id;

  if (bar) {
    id = bar.getAttribute('data-' + common.namespace() + '-property-id');
  }

  return id;
}

/**
 * Appends the given type of bar.
 *
 * @param type {string}
 */
function loadBar(type) {
  var barUrl = BRANDING_BAR_CDN_URL + '/' + common.s3Version() + '/js/';

  switch (type) {
    case 'BRANDING':
      barUrl += 'branding/';
      break;
    case 'DONATION':
      barUrl += 'donation/';
      break;
    default:
      // By default,
      barUrl += 'branding/';
      break;
  }

  // This URL ends up looking like:
  // https://s3.amazonaws.com/sunlight-cdn/brandingbar/0.3.4/js/donation/main.min.js.gz
  dom.appendScript(barUrl + 'main.min.js.gz');
}
