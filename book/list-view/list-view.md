#ListView

Some implementation-specific details of **ListView**: A minimal implementation requires you to create a [ListView.DataSource](https://facebook.github.io/react-native/docs/listviewdatasource.html), populate it with a simple array of data blobs, and instantiate your ListView component with said DataSource. It also requires you to define a `renderRow` callback, which will take individual blobs from your DataSource array, and return them as renderable components.

```javascript
class Pokedex extends Component {
  constructor(props) {
    super(props);

    //Define a ListView.DataSource. DataSource requires you to define a rowHasChanged, comparator, and we'll use Immutable.is here for that.
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => !Immutable.is(r1, r2),
    });

    //Don't forget to add your dataSource to the state.
    this.state = { pokemon: dataSource };
  }
  componentWillReceiveProps({ pokemon }) {
    this.setState({
      pokemon: this.state.pokemon.cloneWithRows(pokemon.toArray()),
    });
  }
  render() {
    const { pokemon } = this.state;
    const { goToPokemonDetail, ready } = this.props;

    return (
        <View style={ styles.container }>

          <ListView dataSource={ pokemon }
            style={ styles.listView }
            renderRow={ (...args) => renderRow(goToPokemonDetail, ...args) }
            enableEmptySections />

          <SearchBar onChange={ filter } value={ query } />

          <KeyboardSpacer />

        </View>
    );
  }
}
```

Complete the Pokedex container component. We'll also do some housekeeping. Don't forget to:

* Define your styles
* Connect to the Redux store
* Map your state/dispatchers to props
* We'll define `renderRow` in the next section