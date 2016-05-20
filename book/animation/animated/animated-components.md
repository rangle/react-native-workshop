# Animated View

The Animated library ships with 3 views that support `Animated.Values`. These animated components allow us to bind `Animated.Values` to the style properties.
- `Animated.View`
- `Animated.Text`
- `Animated.Image`.

You can also make a custom animated component by using `Animated.createAnimatedComponent`.

## Example

![](/img/animated.gif)

Run the example: [rnplay.org/apps/moq61w](https://rnplay.org/apps/moq61w)

```js
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedVal: new Animated.Value(100),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.animatedVal, {
      toValue: 200,
      duration: 3000,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }

  render() {
    return (
      <View style={ styles.container }>
        <Animated.View style={[styles.box, {
          width: this.state.animatedVal,
          height: this.state.animatedVal,
        }]} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'red',
  },
});
```
