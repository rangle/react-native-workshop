## NavigationRootContainer

The `NavigationRootContainer` is the component that handles your application's navigation state.
Normally you would pass a reducer to this component and it will handle returning a new navigation
state when it's onNavigate method has been called.

There is also the `NavigationContainer.create` method, which acts similar to react-redux's `connect` method.
It does not pull in any state however, it passes an `onNavigate` function to the component it wraps.

When using Redux, this component isn't necessary, because we are already using Redux to handle our state!

## NavigationExperimental.AnimatedView

This component wraps the rest of your navigation, and provides simple sliding animations for your navigation
"stacks". It requires a few different props:

- `navigationState` -> This is where you can pass in your application's current navigation state. When using redux,
you can get this via the `mapStateToProps` and `connect` functions.

- `onNavigate` -> This is a function that is used as a reducer, and it is responsible for "dispatching" actions to update your navigation's state.

- `renderOverlay` -> This prop requires a function that returns an `NavigationExperimental.Header`. It will pass `props` into the function to be used when creating the JSX for the navigation header.

- `renderScene` -> Just like `renderOverlay`, this prop takes a function that will render a `NavigationExperimental.Card`. The `props` are also passed into this function.


## NavigationExperimental.Header

This component will handle displaying information about the current state, as well as providing a simple "back" button to return to previous states in a header at the top of your app.

![top-nav-state](/img/top-nav-state.png)

![second-nav-state](/img/second-nav-state.png)

This component takes a prop called `renderTitleComponent`. This prop takes a function to setup an individual states title. It should return a `NavigationExperimental.Header.Title` component with the text you wish to display.

## NavigationExperimental.Card

This component is where your app will render it's content. Under the hood, this is rendering an `Animated.View` component with our content.

This component takes a `renderScene` prop. This prop takes a function that's purpose is to decide which container component should be rendered based on the navigation's state.

## NavigationExperimental.StateUtils

The navigations`StateUtils` object is a collection of helper functions for managing your navigations state. This is useful
if you are using the `NavigationRootContainer` and your state is being managed there. For Redux apps, it's not necessary however.

## NavigationExperimental.CardStack

This is another object of helper functions for managing the "stack" of cards in your navigation history. It comes with methods like
`pop` and `push` for adding or removing cards from your navigation state's stack. Again, this is useful if you make use of the
`NavigationRootContainer` component to manage your navigation state.
