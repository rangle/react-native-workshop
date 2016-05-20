## React Native Workshop

![rangle.io](/img/intro.png)

## Who is this material for?
This material is for those who are familiar with ReactJS and are willing to dive into developing mobile apps with [React Native](https://facebook.github.io/react-native). For this course we assume that our audience also has solid knowledge of JavaScript, ES6 syntax, [Redux](https://github.com/reactjs/redux) and CSS.


## What is React Native?
React Native is a framework for building mobile applications with
JavaScript and ReactJS by leveraging native UI components.

In ReactJS we have a virtual DOM which reflects the real DOM.
Each element corresponds to a node in the Virtual DOM and when an element changes, that change is being reflected onto the real DOM. In React Native we don't deal with the DOM but with the Native Components which are provided by specific platforms. Instead of dealing with WebViews we use actual platform specific native components. For example, instead of using HTML elements such as `<div>` & `<span>` we use the native components such as `<View>` & `<Text>`.

Later in this course we will introduce other, more complex, native components and some platform specific components which look and behave differently on each platform.

React Native embraces the _Learn Once And Apply Everywhere_ paradigm, which is quite different from _Write Once Use Everywhere_. This is because there are some major differences between every mobile platform, and it is impossible to cover all of those differences with the same codebase. With React Native we can use the same knowledge and tools to build separate apps for Android and iOS, and if we are pedantic enough we can reuse most of the code which deals with
the business logic the apps.


## How does it work?
React Native has an embedded instance of JavaScriptCore. When your app starts, the JavaScript code is loaded and executed in this engine.

Using the `RCTBridgeModule` it bridges native code to JavaScript. This allows the JSX components to have bindings to native UI components.
