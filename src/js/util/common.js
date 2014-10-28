'use strict';

var NAMESPACE = 'bb',
    VERSION = '{{ version }}';

function namespace() {
  return NAMESPACE;
}

function version() {
  return VERSION;
}

function s3Version() {
  return parseFloat(version()).toString();
}

function render(template, context) {
  context || (context = {});
  context.namespace = namespace();
  context.version = version();
  context.s3Version = s3Version();

  return template.replace(/\{\{ ?([\w\d_]+) ?\}\}/gi, function (tag, match) {
    return context[match] || '';
  });
}

module.exports = {
  namespace: namespace,
  version: version,
  s3Version: s3Version,
  render: render
};
