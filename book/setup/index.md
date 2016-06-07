# Setup

You can find the most up to date information about how to get started
[here](https://facebook.github.io/react-native/docs/getting-started.html#content).

## Install Dependencies

#### Update Brew for OS X
Since `brew` will be used to install all the needed tools, you should update it
to ensure that you will get the most recent versions of all the required
programs:

```sh
$ brew update && brew upgrade
```

#### Install Node and NPM

```sh
$ brew install node
```
Alternatively you can download an installer from: [nodejs.org/en/download](https://nodejs.org/en/download).


#### Install Watchman
This tool will be used by React Native to detect changes of your code and auto
reload your application. **Install watchman via brew, and not npm.**

```sh
$ brew install watchman
```

#### Install the React Native CLI

```sh
$ npm install -g react-native-cli
```

## Setup Native SDKs

- For iOS install [Xcode](https://developer.apple.com/xcode/) from the OS X App Store.
- For Android follow these instructions [here](https://facebook.github.io/react-native/docs/getting-started.html).
