# Text Input

This one's easy.

Add a new custom `SearchBar` component to your Pokedex container. To complete it, you'll need to use a native [**TextInput**](https://facebook.github.io/react-native/docs/textinput.html), which works similarly to the web input you should be familiar with, tracking a value and responding to `onChangeText` events:

```javascript
<TextInput style={ styles.input }
        value={ query }
        onChangeText={ text => onChange(text) } />
```

Also note the use of `onChangeText` which provides the text value as opposed to `onChange` which provides an event.