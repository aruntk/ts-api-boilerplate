var commitConfig = require('./commit-config.json');

var commitTypes = Object.keys(commitConfig.types);
var commitScopes = Object.keys(commitConfig.scopes);

module.exports = {
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 280],
    'scope-enum': [2,'always', commitScopes],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [2, 'never'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      commitTypes,
    ]
  }
};

