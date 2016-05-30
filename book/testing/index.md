# Testing

Testing React Native components using [Enzyme](https://github.com/airbnb/enzyme) is similar to testing React Components for the web. We can use the shallow rendering API to isolate a component for testing. Additionally, `react-native-mock` allows us to run these tests on a CI server.

## Setup

To get started, we need to do a little bit of setup. Install the following dependencies.

- babel-core
- babel-eslint
- babel-plugin-transform-object-rest-spread
- babel-preset-es2015
- babel-preset-react
- chai
- enzyme
- mocha
- react-addons-test-utils
- react-dom
- react-native-mock
- sinon

Then, create a `.babelrc` file:

```json
{
  "presets": [
    "es2015",
    "react"
  ],
  "plugins": [
    "transform-object-rest-spread"
  ]
}
```

And finally add this task to `package.json`:

```json
"scripts": {
  ...
  "test": "mocha --require react-native-mock/mock --compilers js:babel-core/register test/**/*.spec.js --reporter nyan"
}
...
```


## Example

```js
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import {View} from 'react-native';
import Immutable from 'immutable';

import Types from '../../src/components/Types';
import TypedItem from '../../src/components/TypedItem';
import BasicInfo from '../../src/components/BasicInfo';


describe('<BasicInfo />', () => {

  it('should render correct components', () => {
    const basicInfo = shallow(<BasicInfo />);
    expect(basicInfo.find(View)).to.have.length(1);
    expect(basicInfo.find(Types)).to.have.length(1);
    expect(basicInfo.find(TypedItem)).to.have.length(2);
  });

  it('should pass types, height, and weight into child components', () => {
    const testTypes = Immutable.List(['foo', 'bar']);
    const basicInfo = shallow(<BasicInfo types={testTypes} height={20} weight={20} />);
    const types = basicInfo.find(Types).props().types;
    const firstTypedItem = basicInfo.find(TypedItem).first().props().value;
    const secondTypedItem = basicInfo.find(TypedItem).last().props().value;
    expect(types).to.deep.equal(testTypes);
    expect(firstTypedItem).to.equal(20);
    expect(secondTypedItem).to.equal(20);
  });

  describe('styles', () => {

    it('should have default styles', () => {
      const basicInfo = shallow(<BasicInfo />);
      const containerStyles = basicInfo.find(View).props().style;
      const typedItemStyles1 = basicInfo.find(TypedItem).first().props().style;
      const typedItemStyles2 = basicInfo.find(TypedItem).last().props().style;
      const expectedTypedStyles = {
        flex: 1,
        borderLeftWidth: 1,
      };
      expect(containerStyles).to.deep.equal({
        flexDirection: 'row',
        flexWrap: 'wrap',
      });
      expect(typedItemStyles1).to.deep.equal(expectedTypedStyles);
      expect(typedItemStyles2).to.deep.equal(expectedTypedStyles);
    });

  });

});
```
