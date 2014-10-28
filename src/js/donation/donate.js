'use strict';

/**
 * Handles submitting the donation information and other stuff.
 *
 * @author Olivia Cheng
 */

var ajax = require('../util/ajax');

function donate() {
  var data = {
    response: 'json'
  };

  ajax.post('https://sunlightfoundation.com/donate/', data, function(err, resp) {
    // ...
  });
}

module.exports = {
  donate: donate
};
