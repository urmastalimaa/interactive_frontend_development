# Webpack example

## Running the application

```
npm install
npm run lint
```

#### Expected behaviour

* One error is shown: `Strings must use singlequote quotes`

## Explanation

`npm run lint` points to a script in package.json that runs `eslint src/`.
_eslint_ will check the JavaScript according to a ruleset for common errors or confusing code.
It also enforces formatting to an extent.

_eslint_ is configured in _.eslintrc_.

* _import_ plugin is used to validate that import statements resolve
* _eslint:recommended_ and _google_ rulesets are used as a baseline.
* some rules are overridden by specifying them in "rules".
