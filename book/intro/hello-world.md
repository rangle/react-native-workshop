# Hello World

To initiate a new React Native project you need to run: `react-native init <ProjectName>`. For this workshop, we have already done that for you and setup a skeleton project. To get started:

```sh
$ git clone https://github.com/winkerVSbecks/react-native-workshop.git
$ cd react-native-workshop
$ npm install
```

`react-native init` generates the following:
- `index.ios.js`
- `index.android.js`
- iOS (Xcode) project
- Android projects

Let's open the project in a text editor to go through the generated code.


## Bootstrapping

In order to bootstrap a React Native app we use `AppRegistry` instead of `ReactDOM`, for example:

```js
import { AppRegistry, View, Text } from 'react-native';
import React, { Component } from 'react';

class Root extends Component {
  ...
}

AppRegistry.registerComponent('ApplicationName', () => Root);
```


## Run the App

- iOS

  ```sh
  $ react-native run-ios
  ```
  or Open ``/Users/<userName>/reactNativeWorkshop/ios/reactNativeWorkshop.xcodeproj` in Xcode


- Android

  ```sh
  $ react-native run-android
  ```

You should see something like this:

<img style="width: 50%" src="/img/hello-world.png" alt="hello world" />
