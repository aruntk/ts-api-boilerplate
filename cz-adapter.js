"format cjs";

var engine = require('./engine-cz-config');
var defaultOptions = require('./commit-config.json');

module.exports = engine({
  types: defaultOptions.types,
  scopes: defaultOptions.scopes,
  defaultType: process.env.CZ_TYPE,
  defaultScope: process.env.CZ_SCOPE,
  defaultSubject: process.env.CZ_SUBJECT,
  defaultBody: process.env.CZ_BODY,
  defaultIssues: process.env.CZ_ISSUES
});
