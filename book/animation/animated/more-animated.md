# More Animated!

The Animated library allows us to do a lot more things such as composing animations or driving animations through gestures and input events. Let's look at a few examples.



## Interpolation

Using the same `Animated.Value` you can drive multiple animations through interpolation. Interpolation can also be used to convert numbers into `rgb` colours or rotation values in `degrees`.

```js
this.state = { animatedVal: new Animated.Value(0) };

const marginLeftAnimation = this.state.animatedValue.interpolate({
  inputRange: [-300, -100, 0, 100, 101],
  outputRange: [300,    0, 1,   0,   0],
});
```

| Input  | Output |
| ------ | ------ |
| -400  | 450     |
| -300  | 300     |
| -200	| 150     |
| -100	| 0       |
| -50	  | 0.5     |
| 0	    | 1       |
| 50	  | 0.5     |
| 100	  | 0       |
| 101	  | 0       |
| 200	  | 0       |


## Composing Animations

```js
Animated.sequence([
  Animated.timing(this.state.animatedVal, {
    toValue: 100,
    duration: 500,
  }),
  Animated.timing(this.state.animatedVal, {
    toValue: 0,
    duration: 200,
  })
]).start();

Animated.parallel([
  Animated.spring(this.state.animPosition, {
    toValue: { x: 200, y: 100 }
  }),
  Animated.timing(this.state.animOpacity, {
    toValue: 0.75,
  }),
]).start();

Animated.stagger(100, [
  Animated.timing(this.state.animListItem1, {
    toValue: 100,
    duration: 200,
  }),
  Animated.timing(this.state.animListItem2, {
    toValue: 0,
    duration: 200,
  })
]).start()
```


## Animated.Event

Allows us to extract values from an input event and set values for an `Animated.Value`.

```js
class AnimatedEventExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedY: new Animated.Value(0),
    };
  }

  render() {
    const event = Animated.event([{
      nativeEvent: {
        contentOffset: {
          y: this.state.animatedY,
        },
      },
    }]);

    return (
      <ScrollView onScroll={ event }>
        <Animated.View
          style={{ height: this.state.animatedY }} />
      </ScrollView>
    )
  }
}
```
