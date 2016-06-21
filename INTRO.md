## React Native Workshop

![rangle.io](/img/intro.png)

## Who is this material for?
<<<<<<< 45f57f7da2c113c6e1a525bbaa768e1de67584e8
This material is for those who are familiar with ReactJS and are willing to dive into developing mobile apps with [React Native](https://facebook.github.io/react-native). For this course we assume that our audience has solid knowledge of JavaScript, ES6 syntax, [Redux](https://github.com/reactjs/redux), CSS, and Flexbox for layouts.
=======
This material is for those who are familiar with ReactJS and are willing to dive into developing mobile apps with [React Native](https://facebook.github.io/react-native). For this course we assume that our audience has solid knowledge of JavaScript, ES6 syntax, [Redux](https://github.com/reactjs/redux) and CSS (and Flexbox for layouts).

>>>>>>> minor changes/edits made to sections 1-5 (#47)

## What is React Native?
React Native is a framework for building mobile applications with
JavaScript and ReactJS by leveraging native UI components.

In ReactJS we have a virtual DOM which reflects the real DOM.
<<<<<<< 45f57f7da2c113c6e1a525bbaa768e1de67584e8
<<<<<<< 559da462d9e8fc7c02446aead99f5f3aba63ec1a
Each element corresponds to a node in the Virtual DOM and when an element changes, that change is reflected onto the real DOM. In React Native we are not using the DOM but Native Components which are provided by specific platforms. Instead of dealing with WebViews, we use actual platform specific native components. 

For example, instead of using HTML elements such as `<div>` & `<span>` we use the native components such as `<View>` & `<Text>`. This course we will introduce other, more complex, native components and some platform specific components which look and behave differently on each platform.

React Native embraces the _Learn Once And Apply Everywhere_ paradigm, which is quite different from _Write Once Use Everywhere_. With React Native we can use the concepts learned from React to build separate apps for Android and iOS reusing most of the business logic code for both platforms.
=======
=======
>>>>>>> minor changes/edits made to sections 1-5 (#47)
Each element corresponds to a node in the Virtual DOM and when an element changes, that change is being reflected onto the real DOM. In React Native we are not using the DOM but Native Components which are provided by specific platforms. Instead of dealing with WebViews we use actual platform specific native components. 

For example, instead of using HTML elements such as `<div>` & `<span>` we use the native components such as `<View>` & `<Text>`. This course we will introduce other, more complex, native components and some platform specific components which look and behave differently on each platform.

React Native embraces the _Learn Once And Apply Everywhere_ paradigm, which is quite different from _Write Once Use Everywhere_. There are differences between every mobile platform, and it is impossible to cover all of those differences with the same codebase. With React Native we can use the concepts learned from React to build separate apps for Android and iOS reusing most of the business logic code for both platforms.
<<<<<<< 45f57f7da2c113c6e1a525bbaa768e1de67584e8
>>>>>>> minor changes/edits made to sections 1-5 (#47)
=======
>>>>>>> minor changes/edits made to sections 1-5 (#47)


## How does it work?
React Native has an embedded instance of [JavaScriptCore](https://facebook.github.io/react-native/docs/javascript-environment.html). When your app starts, the JavaScript code is loaded and executed in this engine.

Using the `RCTBridgeModule` it bridges native code to JavaScript. This allows the JSX components to have bindings to native UI components.
