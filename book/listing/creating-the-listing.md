## Building the Main Listing

Now that we have our navigator in place, we can start building out our components. First on the menu will be the Pokedex component which we defined as the default in our Navigator, and which we'll define as a container component at `/src/containers/Pokedex.js`.

We'll chiefly be using a [**ListView**](https://facebook.github.io/react-native/docs/listview.html), a React Native core component that extends a more primitive [**ScrollView**](https://facebook.github.io/react-native/docs/scrollview.html), and primarily allows us to efficiently display long lists of data.

Some implementation-specific details of **ListView**: A minimal implementation requires you to create a [ListView.DataSource](https://facebook.github.io/react-native/docs/listviewdatasource.html), populate it with a simple array of data blobs, and instantiate your ListView component with said DataSource. It also requires you to define a `renderRow` callback, which will take individual blobs from your DataSource array, and return them as renderable components.

```javascript
class Pokedex extends Component {
  constructor(props) {
    super(props);

    //Define a ListView.DataSource. DataSource requires you to define a rowHasChanged, comparator, and we'll use Immutable.is here for that.
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => !Immutable.is(r1, r2),
    });

    //Don't forget to add your dataSource to the state.
    this.state = { pokemon: dataSource };
  }
  componentWillReceiveProps({ pokemon }) {
    this.setState({
      pokemon: this.state.pokemon.cloneWithRows(pokemon.toArray()),
    });
  }
  render() {
    const { pokemon } = this.state;
    const { goToPokemonDetail, ready } = this.props;

    return (
        <View style={ styles.container }>

          <ListView dataSource={ pokemon }
            style={ styles.listView }
            renderRow={ (...args) => renderRow(goToPokemonDetail, ...args) }
            enableEmptySections />

          <SearchBar onChange={ filter } value={ query } />

          <KeyboardSpacer />

        </View>
    );
  }
}
```

We'll also do some housekeeping. Don't forget to:

* Define your styles
* Connect to the Redux store
* Map your state/dispatchers to props

### Finally, let's define how our rows get rendered in our ListView.

We've already passed `renderRow` into our ListView component above, and now we need to define it. We'll pass all the information we need to a MediaObject subcomponent that we'll create in a moment.

Note: You'll also need to define your `goToPokemonDetail` action if you haven't already.


```javascript
function renderRow(goTo, pokemon, sId, id) {
  const POKEMON_STATE = {
    title: pokemon.get('name'),
    url: pokemon.get('url'),
  };

  // Some quick parsing to get a bit of extra information for ourselves
  const re = /^.*pokemon\/(.+)\/$/;
  const matches = re.exec(pokemon.get('url'));
  const pokemonID = matches ? matches[1] : null;
  const imageUrl = (
    pokemonID ? `http://pokeapi.co/media/sprites/pokemon/${ pokemonID }.png` :
                null
  );
  return (
    <MediaObject index={ id }
      text={ pokemon.get('name') }
      imageUrl={ imageUrl }
      action={ () => goTo(POKEMON_STATE) } />
  );
}
```

Now that we have the information we need, we'll render it out in our MediaObject component, which we can place at `/src/components/MediaObject.js`. We'll use a couple of new pieces there that we should touch on:

* **TouchableOpacity** is a wrapper used for making views respond properly to touches. You can think of it as onClick, but with a visual feedback mechanism added in. Here, we'll use the onPress mechanism to react to touches and redirect the user to the desired pokemon details page.

* **Image** is a core React Native component for loading local or remote images with one neat trick: It's non-blocking. That means we can feed our image into our layout without too much concern for UI stutters or hiccups.

```javascript
//Define a placeholder image to be used in the case of a non-existent external resource
const placeholder = require('../assets/who.jpg');

const MediaObject = ({ index, action, text, imageUrl }) => {
  const image = (
    imageUrl ? { uri: imageUrl } : placeholder
  );
  return (
    <TouchableOpacity
      underlayColor={ clrs.gray }
      onPress={ action }>

      <View style={[ styles.mediaObject, bgColor(Number(index) + 1) ]}>
        <Image source={ image } style={ styles.image } />
        <Text style={ styles.text }>
          { text.charAt(0).toUpperCase() + text.slice(1) }
        </Text>
      </View>

    </TouchableOpacity>
  );
};

```

Again, don't forget to do housekeeping like defining your styles and properly exporting your component as a module here. We've also used a bgColor function above that you can define thusly:

```javascript
function bgColor(idx) {
  return {
    backgroundColor: idx % 2 !== 0 ? clrs.white : clrs.lighterGray,
  };
}
```


That's it! Everything's in place. Just one more thing left to do.


### Adding a search filter.



This one's easy.

Add a new custom SearchBar component to your Pokedex component. To complete it, you'll need to use a native [**TextInput**](https://facebook.github.io/react-native/docs/textinput.html), which works similarly to the web input you should be familiar with, tracking a value and responding to `onChangeText` events:

```javascript
<TextInput style={ styles.input }
        value={ query }
        onChangeText={ text => onChange(text) } />
```

The virtual keyboards used on iOS devices pose unique layout challenges as they require you to push content around and reshape your layouts as the keyboard is activated or deactivated.

For this, we'll use Andrew Hurst's excellent [react-native-keyboard-spacer](https://github.com/Andr3wHur5t/react-native-keyboard-spacer). We'll need to start by importing the `Platform` utility from React Native.

```javascript
// ...

import {
  StyleSheet,
  View,
  ListView,
  Platform,
} from 'react-native';

const Spacer = Platform.OS === 'ios' ? <KeyBoardSpacer /> : null;

/* Add our new Spacer just below our SearchBar component */
<SearchBar onChange={ filter } value={ query } />
{Spacer}
```
