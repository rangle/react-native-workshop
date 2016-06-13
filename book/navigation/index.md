# Navigation

You have a few options for building out the navigation of your app with
React Native. For example there is a `NavigatorIOS` component which you can use
to build out a simple navigation for your iOS specific apps. There is also the
generic `Navigator` component which can be used for either iOS or Android Applications.

See the [navigator comparison documentation for more information.](https://facebook.github.io/react-native/docs/navigator-comparison.html)

In this workshop we will be working with a third option: `NavigationExperimental`.
`NavigationExperimental` differs from the `Navigator` component in that it attempts
to be more like Redux using a single-direction flow of data and reducers to manage its state. 

_At the time of this writing, `NavigationExperimental` is replacing the `Navigator`. 
The documentation will be updated to reflect [this](https://github.com/ericvicenti/navigation-rfc/blob/master/Docs/NavigationOverview.md)._

## Some Setup

We're going to need to add a few things to our project that will be used by our Navigator.
Firstly, we will need to create some navigation specific actions, as well as the reducers
our redux store will need to use to properly manage our state.

Let's get started by adding a few new constants to our `src/constants/index.js` file:

```javascript
// src/constants/index.js

export const GOTO_ROUTE = '@@navigator/GOTO_ROUTE';
export const ROUTE_IDS = {
  MAIN_NAVIGATOR: 'MAIN_NAVIGATOR',
  POKEDEX: 'POKEDEX',
  POKEMON_DETAIL: 'POKEMON_DETAIL',
};

export const ROUTES = {
  POKEDEX: {
    key: ROUTE_IDS.MAIN_NAVIGATOR,
    index: 0,
    children: [{key: ROUTE_IDS.POKEDEX, title: 'Pokedex' }],
  },
  POKEMON_DETAIL: (title, url) => ({
    key: ROUTE_IDS.POKEMON_DETAIL,
    index: 1,
    title,
    url
  }),
};
```

Now that we've setup these constants, we'll add our navigation specific actions:

```javascript
// src/actions/index.js

import {GOTO_ROUTE, ROUTES} from '../constants';

// ...

export function goToPokemonDetail({ title, url }) {
  return {
    type: GOTO_ROUTE,
    payload: ROUTES.POKEMON_DETAIL(title, url),
  };
}

export function gotoPokedex() {
  return {
    type: GOTO_ROUTE,
    payload: ROUTES.POKEDEX,
  };
}

export function onNavigate(payload) {
  return {
    type: GOTO_ROUTE,
    ...payload,
  };
}

// ...
```

The only other thing left to do now is setup our navigation's reducer!

```javascript
// src/reducers/navigator.js

import {ROUTES, GOTO_ROUTE} from '../constants';
import {NavigationExperimental} from 'react-native';

const { Reducer: NavigationReducer } = NavigationExperimental;

const navigatorReducer = NavigationReducer.StackReducer({
  getPushedReducerForAction: action => {
    if (action.type === GOTO_ROUTE) {
      /* The below line is confusing as other NavigationReducer's 
      may consist of a state, however for StackReducer, it is always null
      so the action.payload is taken as the next route */
      return state => state || action.payload;
    }
    return null;
  },
  getReducerForState: initialState => state => state || initialState,
  initialState: ROUTES.POKEDEX,
});

export default navigatorReducer;
```
