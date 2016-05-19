# Our Navigator component

Our application is going to use the navigator and its state to decide which one our of container views to display. We'll use our navigator in the root view of our application and let it handle the logic for switching our views as needed.

Let's start by creating a file `index.js` in `src/containers/Navigator/` and setup our imports:

```javascript
import {Map} from 'immutable';
import {NavigationExperimental, View, StatusBar} from 'react-native';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Pokedex from '../Pokedex';
import PokemonDetails from '../PokemonDetails';
import {ROUTE_IDS} from '../../constants';
import * as helpers from './navigator-helpers';

const {
  AnimatedView: NavigationAnimatedView,
  Card: NavigationCard,
  Header: NavigationHeader,
} = NavigationExperimental;
```

## The Navigator Container Class

```javascript
class Navigator extends Component {

  componentWillMount() {
    this.props.catchEmAll();
  }

  _getActiveScene = (navigationState) => {
    switch(navigationState.key) {
      case ROUTE_IDS.POKEMON_DETAIL:
        return <PokemonDetails url={navigationState.url} />;
      default:
        return <Pokedex />;
    }
  }

  _renderCard = (props) => (
    <NavigationCard
      {...props}
      key={props.scene.navigationState.key}
      renderScene={this._renderScene} />
  )

  _renderScene = ({ scene: { navigationState } }) => {
    const activeScene = this._getActiveScene(navigationState);

    return (
      <View style={{ flex: 1, marginTop: NavigationHeader.HEIGHT }}>
        <StatusBar barStyle="default" />
        { activeScene }
      </View>
    );
  }

  render() {
    const { navigationState, onNavigate } = this.props;

    return (
      <NavigationAnimatedView
        navigationState={navigationState}
        style={{ flex: 1 }}
        onNavigate={onNavigate}
        renderOverlay={helpers.renderHeader}
        applyAnimation={helpers.applyAnimation}
        renderScene={this._renderCard}
      />
    );
  }
}
```
There is a lot going on here, so let's take a minute to go through this one step at a time.

We start by calling the `catchEmAll` action in our `componentWillMount` method. This is just to get our app setup to display our lists of pokemon in the views we'll be creating later.
`_getActiveScene` is a method we'll pass to the `NavigationAnimatedView` in order to determine which container component to render based off the current state of our navigation.

After that, we're returning a `NavigationCard` component in our `_renderCard` method. This is used by the `NavigationAnimatedView` for rendering a single card in our navigation state's card stack.
The `_renderScene` method is in charge of setting up the view around our active scene. In this case we're just creating a simple view that accommodates for the height of our navigation header, and sets the status bar style to the default look and feel (black text with light background).

Finally, we are rendering out our `NavigationAnimatedView` passing it our navigations state, a simple style declaration to cause the navigation to fill whatever space it can, and then we are passing it our appropriate helper functions for rendering our view.

Now let's tell react about our components props and export the connected component!

```javascript
Navigator.propTypes = {
  navigationState: PropTypes.object,
  gotoPokedex: PropTypes.func,
  onNavigate: PropTypes.func,
  catchEmAll: PropTypes.func,
  iChooseYou: PropTypes.func,
  clearChoice: PropTypes.func,
  activePokemon: PropTypes.instanceOf(Map),
};

export default connect(
  helpers.mapStateToProps,
  helpers.mapDispatchToProps,
)(Navigator);
```

## Hook Our Navigator Up

Our final step is to import our newly created Navigator component and plug it into our root container.
Edit the `src/containers/Root.js` file to reflect the following:

```javascript
import React from 'react';
import {Provider} from 'react-redux';
import createStore from '../store/configureStore';
import Navigator from './Navigator';

const store = createStore();

const Root = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default Root;
```
