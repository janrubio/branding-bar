'use strict';

/**
 * Handles submitting the join information and other stuff.
 *
 * @author Olivia Cheng
 */

var ajax = require('../util/ajax');

function join(url, email, zipcode) {
  var data = {
    response: 'json',
    email: email,
    zipcode: zipcode
  };
  ajax.post('https://sunlightfoundation.com/join/', data, function(err, resp) {
    // ...
  });
}

module.exports = {
  join: join
};
