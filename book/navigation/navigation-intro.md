# Navigation

You have a few options for building out the navigation of your app with
React Native. For example there is a `NavigatorIOS` component which you can use
to build out a simple navigation for your iOS specific apps. There is also the
generic `Navigator` component which can be used for either iOS or Android Applications.

See the [navigator comparison documentation for more information.](https://facebook.github.io/react-native/docs/navigator-comparison.html)

In this workshop we will be working with a third option: `NavigationExperimental`.
`NavigationExperimental` differs from the `Navigator` component in that it attempts
to be more like Redux using a single-direction flow of data and reducers to manage
it's state.

