# Debugging

React Native provides several tools to make debugging easier. To access the in-app developer menu:

- Press `⌘ + d` in the iOS simulator
- `⌘ + m` or `F2` in the Android emulator
- Alternatively use the shake gesture:
  + `control + ⌘ + z` in the iOS simulator
  + Clicking on the menu button in the Genymotion Android simulator

You can use this menu to enable/disable live reloading, hot reloading, component inspector, etc.

<img style="width: 50%" src="/img/debug-menu.gif" alt="debug menu" />


## Debug in Chrome

This option allows you to debug your JavaScript code in Google Chrome. The code is executed in a Chrome tab you have access to all the usual devtools such as: `debugger` statements, break-points, console logging, etc.


### YellowBox

> Using console.warn will display an on-screen log on a yellow background. Click on this warning to show more information about it full screen and/or dismiss the warning. Place `console.disableYellowBox = true;` in the root component to temporarily disable warnings

![yellow box warning](/img/yellowbox.gif)


### RedBox

> You can use console.error to display a full screen error on a red background.

![red box warning](/img/redbox.gif)

📚 More info on Yellow/Red Box available here: [rn-docs/debugging.html#yellowbox-redbox](https://facebook.github.io/react-native/docs/debugging.html#yellowbox-redbox)
