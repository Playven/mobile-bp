# Playven Mobile BoilerPlate

A little known feature of the `react-native init` CLI is the ability to pass a `--template` flag to it as well. This repo can serve as a boilerplate that can be continually updated/changed and used as a default boilerplate for future apps.

Read more here: https://medium.com/dailyjs/the-1-2-3s-of-react-native-templates-1f5dda037e11

# Run

```
react-native init <AppName> --template playvenbp
```

This grabs the template from npm, which I've published here: https://www.npmjs.com/package/react-native-template-playvenbp (let's transfer this over to the playven owner at some point)

# IMPORTANT:

The cli script is pretty alpha, so there are few post install commands we need to run:

1.  Dev dependencies don't get copied over so run:

```js
yarn add prettier lint-staged husky eslint eslint-config-prettier eslint-config-universe eslint-plugin-react --dev
```

2.  Adjust the `package.json` to use the necessary scripts/etc:

```js
"scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "lint": "eslint src",
    "precommit": "lint-staged"
  },
```

3.  Add the precommit hook for prettier:

```js
"lint-staged": {
    "*.{js,json,css,md}": [
      "prettier --write",
      "git add"
    ]
  }
```

# Finish

You should be all good to go. Everything should be linked and installed, and you can run the project on either platform.
