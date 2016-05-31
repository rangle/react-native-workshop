## Working with MapView and Third-party Components

While you won't be using it in this project, the MapView is a good example of a common element that you'll use in a lot of other projects, and is worth taking some time with.

At its most basic implementation, a MapView will render an interactive map in a defined area.

```javascript
<MapView
  region={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/>
```

Map features like markers and callouts are achievable through the use of an annotations parameter:

```js
<MapView
  style={styles.map}
  region={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  annotations={[{
    latitude: 37.788,
    longitude: -122.43,
    title: 'Sunset Cafe',
    subtitle: '4230 Sunset Blvd'
  }]}
/>
```

However, it's worth noting that the native MapView shipping in React Native is an iOS-only implementation, and will fail for Android builds. The official recommendation to work around this is to use a [react-native-maps](https://github.com/lelandrichardson/react-native-maps
) by Leland Richardson. You can add it to your project with `npm install react-native-maps --save` and then using `rnpm` to link the native components with `rnpm link`. Usage roughly mirrors the standard MapView component:

```js
import MapView from 'react-native-maps';
```

```js
<MapView
region={{
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}}
/>
```

You can set region as a part of your state:

```js
getInitialState() {
  return {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };
}

onRegionChange(region) {
  this.setState({ region });
}

render() {
  return (
    <MapView
      region={this.state.region}
      onRegionChange={this.onRegionChange}
    />
  );
}
```

However, implementations of advanced features like markers are different from the default MapView, with `react-native-maps` choosing to opt for a nested component format:


```js
<MapView
  region={this.state.region}
  onRegionChange={this.onRegionChange}
>
  {this.state.markers.map(marker => (
    <MapView.Marker
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
    />
  ))}
</MapView>
```
