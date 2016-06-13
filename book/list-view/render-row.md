#ListView: Render Row

## Finally, let's define how our rows get rendered in our ListView.

We've already passed `renderRow` into our ListView component above, and now we need to define it in Pokedex. We'll pass all the information we need to a MediaObject subcomponent that we'll create in a moment.

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

Now that we have the information we need, we'll render it out in our MediaObject component, which we can place at `/src/components/MediaObject.js`. We'll use a couple of new pieces:

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

Again, don't forget to do housekeeping like defining your styles and properly exporting your component as a module here. We've also used a bgColor function above that you can define:

```javascript
function bgColor(idx) {
  return {
    backgroundColor: idx % 2 !== 0 ? clrs.white : clrs.lighterGray,
  };
}
```


That's it! Everything's in place. Just one more thing left to do.