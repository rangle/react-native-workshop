# Timing, Spring & Delay

The three basic options to define the animation of an `Animated.Value` are:

## Animated.timing
Used to define an animation that takes a specific amount of time to execute.

```js
import { Animated, Easing } from 'react-native';
this.state = { animatedVal: new Animated.Value(0) };

Animated.timing(this.state.animatedVal, {
  toValue: 100,
  duration: 500,
  easing: Easing.inOut(Easing.ease),
  delay: 200,
}).start(() => console.log('animation complete'));
```


## Animated.spring
Used to define an animation as a spring rather than a specific timing. The spring uses the same physics as [Origami](https://facebook.github.io/origami).

```js
import { Animated, Easing } from 'react-native';
this.state = { animatedVal: new Animated.Value(0) };

Animated.spring(this.state.animatedVal, {
  toValue: 100,
  friction: 7,
  tension: 40,
}).start(() => console.log('animation complete'));
```


## Animated.decay
Used to define a deceleration style transition for something that is already moving.

```js
import { Animated, Easing } from 'react-native';
this.state = { animatedVal: new Animated.Value(0) };

Animated.decay(this.state.animatedVal, {
  velocity: { // velocity from a gesture
    x: gestureState.vx,
    y: gestureState.vy,
  },
  deceleration: 0.997,
}).start(() => console.log('animation complete'));
```
