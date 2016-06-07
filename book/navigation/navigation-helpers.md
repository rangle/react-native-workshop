# Setting up Our Navigation

Our app is going to use `NavigationExperimental` and setup the navigation state to be handled by Redux. To start, we'll configure some helpers to make the navigation component easier to reason about. Then we'll set up the navigator itself and hook it up with our Redux store. Let's get started.

Create a file called `navigator-helpers.js` in `src/containers/Navigator/` and import the following modules:

```javascript
import {
  Animated,
  NavigationExperimental,
  Easing,
} from 'react-native';
import clrs from '../../utils/clrs';
import React, { PropTypes } from 'react';
import * as actions from '../../actions';

const { Header: NavigationHeader } = NavigationExperimental;
```

## State and Dispatch

Let's export some functions for our navigator component to make use of. To start, we'll configure the functions we'll use to setup our components props and actions with `connect`


`src/containers/Navigator/navigator-helpers.js`
```javascript
export function mapStateToProps(state) {
  return {
    navigationState: state.navigator,
    pokemon: state.pokemon.get('all'),
    activePokemon: state.pokemon.get('active'),
  };
}

export function mapDispatchToProps(state) {
  return {
    goToPokemonDetail: artist => {
      dispatch(actions.goToPokemonDetail(artist));
    },
    gotoPokedex: () => dispatch(actions.gotoPokedex()),
    onNavigate: payload => dispatch(actions.onNavigate(payload)),
    catchEmAll: () => dispatch(actions.catchEmAll()),
    iChooseYou: url => dispatch(actions.iChooseYou(url)),
    clearChoice: () => dispatch(actions.clearChoice()),
  };
}
```

## Animations

We'll also create a helper function for handling animation in our navigator.

```javascript
export function applyAnimation(pos, navState) {
  Animated.timing(pos, {
    toValue: navState.index,
    duration: 500,
    easing: Easing.bezier(0.36, 0.66, 0.04, 1),
  }).start();
}
```

## Title and Header

Finally, we'll create some helper functions to render out our navigations header, and the title for the current state.

```javascript
export function renderHeader(props) {
  return (
    <NavigationHeader
      style={{backgroundColor: clrs.aqua }}
      {...props}
      renderTitleComponent={renderTitle} />
  );
}
```

```javascript
export function renderTitle({ scene }) {
  return (
    <NavigationHeader.Title
      textStyle={{ color: clrs.blue, fontWeight: '700', letterSpacing: 1 }}>
      {scene.navigationState.title.toUpperCase()}
    </NavigationHeader.Title>
  );
}

renderTitle.propTypes = {
  scene: PropTypes.object,
};
```

That does it for the helpers file! Next we'll setup the actual navigator component.
