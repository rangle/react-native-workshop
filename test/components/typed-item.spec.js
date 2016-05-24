import React from 'react';

import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import {
  Text,
  View,
} from 'react-native';

import clrs from '../../src/utils/clrs';
import {capitalize} from '../../src/utils';
import TypedItem from '../../src/components/TypedItem';


describe('<TypedItem />', () => {

  it('should render the right components', () => {
    const typedItem = shallow(<TypedItem />);
    expect(typedItem.find(Text)).to.have.length(2);
    expect(typedItem.find(View)).to.have.length(1);
  });

  it('should display the type and value', () => {
    const myType = 'foo';
    const myValue = 'bar';
    const typedItem = shallow(<TypedItem value={myValue} type={myType} />);
    expect(typedItem.contains(capitalize(myType))).to.be.ok;
    expect(typedItem.contains(capitalize(myValue))).to.be.ok;
  });

  describe('styles', () => {

    it('should have default styles', () => {
      const typedItem = shallow(<TypedItem />);
      const containerStyle = typedItem.find(View).props().style;
      const textValueStyle = typedItem.find(Text).first().props().style;
      const textTypeStyle = typedItem.find(Text).last().props().style;
      expect(containerStyle[0]).to.deep.equal({
        height: 72,
        paddingLeft: 16,
        borderBottomWidth: 1,
        borderColor: clrs.lightGray,
        justifyContent: 'center',
      });
      expect(textValueStyle).to.deep.equal({
        fontSize: 16,
        color: clrs.black,
      });
      expect(textTypeStyle).to.deep.equal({
        color: clrs.gray,
        marginBottom: 4,
      });
    });

    it('should have passed in styles', () => {
      const myStyles = {
        flex: 1,
      };
      const typedItem = shallow(<TypedItem style={myStyles} />);
      const customContainerStyles = typedItem.find(View).props().style;
      expect(customContainerStyles[1]).to.deep.equal(myStyles);
    });

  });

});
