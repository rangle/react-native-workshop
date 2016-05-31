# Gesture Responder System

> Gesture recognition on mobile devices is much more complicated than web. A touch can go through several phases as the app determines what the user's intention is. For example, the app needs to determine if the touch is scrolling, sliding on a widget, or tapping. This can even change during the duration of a touch. There can also be multiple simultaneous touches.

from [react-native-docs/gesture-responder-system.html](https://facebook.github.io/react-native/docs/gesture-responder-system.html)

## Responder Lifecycle

<figure style="margin-bottom: 2rem; text-align: center;">
  <img src="/img/responder-lifecycle.jpg" alt="responder lifecycle">
  <figcaption>
    <small style="font-weight: bold;">
      Image from: Learning React Native: Building Native Mobile Apps with JavaScript by Bonnie Eisenman
    </small>
  </figcaption>
</figure>

The gesture responder System allows views to negotiate responsibility for a touch event. A touch event has three phases: start, move and release. Let's break down its lifecycle.

#### 1. Request
A view can request to become the touch responder in the:
- start phase by returning `true` from `onStartShouldSetResponder`
- move phase by returning `true` from `onMoveShouldSetResponder`

#### 2. Bubbling
Similar to the web, these negotiation functions are called in a bubbling pattern. Therefore, the deepest component will become the responder.

#### 3. Override
However, a parent can choose to override and claim responsibility. This is done by returning true from either `onStartShouldSetResponderCapture` or `onMoveShouldSetResponderCapture`.

#### 4. Granted or Rejected
If a view's request is granted or rejected `onResponderGrant` or `onResponderReject` is invoked appropriately.

#### 5. Respond
Finally the view can then respond using one of the following handlers:
- `onResponderMove`
- `onResponderRelease`
- `onResponderTerminationRequest`
- `onResponderTerminate`


After a view has successfully claimed touch responder status, its relevant event handlers may be called.
