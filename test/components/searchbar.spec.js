import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import {
  View,
  TextInput,
} from 'react-native';

import clrs from '../../src/utils/clrs';
import SearchBar from '../../src/components/SearchBar';


describe('<SearchBar />', () => {

  it('should render proper components', () => {
    const searchBar = shallow(<SearchBar />);
    expect(searchBar.length).to.equal(1);
    expect(searchBar.find(View)).to.have.lengthOf(1);
    expect(searchBar.find(TextInput)).to.have.lengthOf(1);
  });

  it('should respond to onChange prop', () => {
    const onChange = sinon.spy();
    const searchBar = shallow(<SearchBar onChange={onChange} />);
    searchBar.find(TextInput).simulate('changeText');
    expect(onChange.called).to.be.ok;
  });

  describe('styles', () => {

    it('should have default styles', () => {
      const searchBar = shallow(<SearchBar />);
      const viewStyles = searchBar.find(View).props().style;
      const textInputStyles = searchBar.find(TextInput).props().style;
      expect(viewStyles).to.deep.equal({
        alignSelf: 'stretch',
        backgroundColor: clrs.lighterGray,
        borderTopColor: clrs.lightGray,
        borderTopWidth: 1,
        flexDirection: 'row',
      });
      expect(textInputStyles).to.deep.equal({
        alignItems: 'center',
        backgroundColor: clrs.white,
        borderColor: '#E4E4E4',
        borderRadius: 4,
        borderWidth: 1,
        flex: 1,
        height: 36,
        margin: 16,
        fontWeight: '800',
        paddingLeft: 10,
      });
    });

  });

});
