/* eslint-disable capitalized-comments */
// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// chore: Updating grunt tasks etc; no production code change
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// revert: Revert to a previous commit
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests

const maxLength = 100,
  warning = 1,
  error = 2;

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [warning, 'always'],
    'body-max-line-length': [error, 'always', maxLength],
    'footer-leading-blank': [warning, 'always'],
    'footer-max-line-length': [error, 'always', maxLength],
    'header-max-length': [error, 'always', maxLength],
    'scope-case': [error, 'always', 'lower-case'],
    'subject-case': [error, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [error, 'never'],
    'subject-full-stop': [error, 'never', '.'],
    'type-case': [error, 'always', 'lower-case'],
    'type-empty': [error, 'never'],
    'type-enum': [
      error,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset',
      ],
    ],
  },
};
