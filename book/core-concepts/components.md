# Components

React Native provides JSX wrappers for several native UI components, like `View`, `ScrollView`, `Text`, `TextInput`, etc. Most components work on both iOS and Android. If a component is limited to one platform then it is indicated in the name, for example: `ActivityIndicatorIOS` or `ProgressBarAndroid`.

The 3 basic building blocks for layouts are:

### 1. View
The most fundamental component for building UI in React Native. Equivalent to `<div>` in HTML. It maps to `UIView` and `android.view`.


### 2. ScrollView
A scrolling container that allows you to place content larger than the container within it. Similar to `overflow: scroll` on the web. It requires a bounded height in order to work – either set directly on the component or by setting it on a parent view.


### 3. ListView
Allows you to efficient display vertically scrolling lists of changing data. It has several performance optimizations and works well for creating infinite scrolls. Additionally, it supports sticky headers and grouping of data. The data needs to be passed in as an instance of `ListView.DataSource`.


## Platform Specific Behaviour

```js
// MyComponent.ios.js
// MyComponent.android.js

import MyComponent from './components/MyComponent';
```
