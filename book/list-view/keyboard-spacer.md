#Keyboard Spacer

The virtual keyboards used on iOS devices pose unique layout challenges as they require you to push content around and reshape your layouts as the keyboard is activated or deactivated.

For this, we'll use Andrew Hurst's excellent [react-native-keyboard-spacer](https://github.com/Andr3wHur5t/react-native-keyboard-spacer). We'll need to start by importing the `Platform` utility from React Native.

```javascript
// ... src/containers/pokedex.js

import {
  StyleSheet,
  View,
  ListView,
  Platform,
} from 'react-native';

const Spacer = Platform.OS === 'ios' ? <KeyBoardSpacer /> : null;

/* Add our new Spacer just below our SearchBar Component */
<SearchBar onChange={ filter } value={ query } />
{Spacer}
```
