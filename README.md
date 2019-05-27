# installing optional-chaining into your create-react-app project

`$ create-react-app cool-project`

`$ cd cool-project`

`$ yarn add react-app-rewired customize-cra @babel/plugin-proposal-optional-chaining`


where we had

<sub>./package.json</sub>
```js
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

now

```js
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
```

`$ touch .babelrc`

`$ touch config-overrides.js`

<sub>./.babelrc</sub>
```js
{
  "presets": ["babel-preset-react-app"],
  "plugins": ["@babel/plugin-proposal-optional-chaining"]
}
```

<sub>./config-overrides.js</sub>
```js
const { override, useBabelRc } = require('customize-cra');

module.exports = override(
  useBabelRc()
);
```

then you're all ready!

`$ yarn start`


# running this project on your machine

this repo contains a demo app using `?.` optional chaining in routine use cases

if you are required to build a card-matching-guessing game for your homework, I recommend doing it yourself and not copying this repo:

if you're doing a guessing game for homework, it might be a bit suspicious if you hand in a project that uses SCSS and a TC 39 stage 1 proposal babel plugin.

`$ git clone https://github.com/nikfrank/optional-chaining`

`$ cd optional-chaining`

`$ yarn`

`$ yarn start`



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

