# Exercise

Build a `Loader` component that accepts one property: `show`. If `show` is set to `true` then it displays a pulsing pikachu otherwise it displays whatever content is passed in as `children`.

Modify the `Pokedex` & `PokemonDetails` components to use the `Loader`.

![](/img/loader.gif)

```js
<Loader show={ !pokemon.get('name') }>
  <ScrollView style={ styles.container }>
    <Sprites sprites={ pokemon.get('sprites') } />
    <BasicInfo { ...basicInfo } />
    <Header>STATS</Header>
    <Stats stats={ pokemon.get('stats') } />
    <Header>MOVES</Header>
    <Moves moves={ pokemon.get('moves') } />
  </ScrollView>
</Loader>
```
