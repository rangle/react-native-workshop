# Animated

The `Animated` library allows you to animate specific values of targeted components.

Unlike `LayoutAnimation` these animations are executed on the JavaScript side and rely on [`requestAnimationFrame`](https://facebook.github.io/react-native/docs/timers.html) and [`setNativeProps`](http://facebook.github.io/react-native/releases/0.26/docs/direct-manipulation.html#direct-manipulation). This can sometimes lead to stutter.

```js
import { Animated } from 'react-native';
```

Creating an animation with the Animted API is generally a three step process and might seem familiar if you've ever used [react-motion](https://github.com/chenglou/react-motion):

- Create a new animated value
- Trigger the animation/tween
- Connect the animated value to a style property of a component
