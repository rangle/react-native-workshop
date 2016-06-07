# APIs

Certain native functionalities are exposed as APIs. For example, datepicker is a component on iOS: [`DatePickerIOS`](https://facebook.github.io/react-native/docs/datepickerios.html). However, it's an API on Android: [`DatePickerAndroid`](https://facebook.github.io/react-native/docs/datepickerandroid.html).

## Commonly Used APIs

**Dimensions** provides you the screen size.

**AsyncStorage** provides a `LocalStorage` style API for storage on the device.

**InteractionManager** allows you to register long-running work to be scheduled after any interactions/animations have completed.

**PixelRatio** class gives access to the device pixel density.


## Polyfills

React Native provides native polyfills for the following APIs:

- Flexbox layout module
- `ShadowPropTypesIOS` so that you can define shadows in CSS
- Geolocation which follows the web spec: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation
- Network fetch, XHR & WebSockets
- Timers: `setTimeout`, `requestAnimationFrame`, `setInterval`, etc.
- Named colors in CSS
