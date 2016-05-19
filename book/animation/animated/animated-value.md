# Animated.Value

The first step in creating an animation is to create an animated value. We can do that by calling:

```js
import { Animated } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedVal: new Animated.Value(0),
    };
  }

  ...
}
```

You'll want to save this animated value onto the state of a component or as a property. This is because we will need access to it in the `render()` method.


## Animated.ValueXY

It is similar to `Animated.Value` except it supports an `{ x, y }` object as the value. This is useful for dealing with positions of elements and gestures.

```js
new Animated.ValueXY({ x: 0, y: 0 })
```


## setValue

There are times when you might want to change the value for this `Animated.Value` but, not trigger an animation. This can be done by using the `setValue` method.

```js
this.state.animatedVal.setValue(100)
```
