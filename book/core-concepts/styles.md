# Styles

React Native allows you to style components using limited CSS properties as inline styles. For layout only the flexbox module and absolute positioning is available. The [style properties](https://facebook.github.io/react-native/releases/next/docs/style.html#supported-properties) are split into five categories:

1. View Properties
2. Image Properties
3. Text Properties
4. Flex Properties
5. Transform Properties

## Usage for Static Styles

Use `StyleSheet.create` to construct styles and define them at the end of the file. This ensures that the values are immutable and they are only created once for the application and not on every render.

```js
var RedBox = ({ children }) => {
  return (
    <View style={ styles.base }>
      { children }
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#222222',
    color: '#fff',
  },
  active: {
    backgroundColor: '#85144b',
    color: '#B10DC9'
  },
});
```

You can also compose styles

```js
// As an array
<View style={[styles.base, styles.background]} />
// or conditionally
<View style={[styles.base, this.state.active && styles.active]} />
```


## Usage for Dynamic Styles
Dynamic styles can be created as objects in the render. However, the official documentation recommends that you avoid this:

> Finally, if you really have to, you can also create style objects in render, but they are highly discouraged. Put them last in the array definition.

```js
var RedBox = ({ children, width }) => {
  return (
    <View style={[styles.base, {
      width: this.state.width,
    }]}>
      { children }
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#222222',
    color: '#fff',
  },
  active: {
    backgroundColor: '#85144b',
    color: '#B10DC9'
  },
});
```
