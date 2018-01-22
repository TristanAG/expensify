import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
import Header from '../../components/header';

test('should render header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  //expect(wrapper.find('h1').text()).toBe('expensify');
  // const renderer = new ReactShallowRenderer()
  // renderer.render(<Header/>);
  //
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  //
  // console.log(renderer.getRenderOutput());
})
