# LayoutAnimation

`LayoutAnimation` allows you to define mounting and update animations. They animate every property that changes in a component – usually by calling `setState`.

This is good option for when you want to apply the same animation for all properties or you don't know the specific values you are animating between. These are native animations and are mostly not affected by what is happening in JavaScript world during their execution.


### Example

![](/img/layout-animation.gif)

Run the example: [rnplay.org/apps/xdHpQA](https://rnplay.org/apps/xdHpQA)

```js
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { s: 100 };
  }

  _onPress = () => {
    LayoutAnimation.spring();
    this.setState({ s: this.state.s + 15 });
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={[
          styles.box,
          { width: this.state.s, height: this.state.s }
        ]} />

        <TouchableOpacity onPress={ this._onPress }>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>Press me!</Text>
          </View>
        </TouchableOpacity>
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
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
```
