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
