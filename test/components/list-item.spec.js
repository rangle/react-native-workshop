import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import {Text, View} from 'react-native';

import clrs from '../../src/utils/clrs';
import ListItem from '../../src/components/ListItem';


describe('<ListItem />', () => {

  it('should render components', () => {
    const listItem = shallow(<ListItem />);
    expect(listItem.find(View)).to.have.length(1);
    expect(listItem.find(Text)).to.have.length(1);
  });

  it('should render any children', () => {
    const listItem = shallow(<ListItem>testing</ListItem>);
    expect(listItem.contains('testing')).to.be.ok;
  });

  describe('styles', () => {

    it('should have default styles', () => {
      const listItem = shallow(<ListItem />);
      const viewStyle = listItem.find(View).props().style;
      const textStyle = listItem.find(Text).props().style;
      expect(viewStyle[0]).to.deep.equal({
        height: 40,
        paddingLeft: 16,
        justifyContent: 'center',
      });
      expect(textStyle).to.deep.equal({
        color: clrs.black,
      });
    });

    it('should take custom styles', () => {
      const myStyles = { flex: 1 };
      const listItem = shallow(<ListItem style={myStyles} />);
      const containerStyles = listItem.find(View).props().style;
      expect(containerStyles[1]).to.deep.equal(myStyles);
    });

  });

});
