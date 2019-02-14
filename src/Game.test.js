import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import Menu from './Menu/Menu';

import { mount, shallow, render } from 'enzyme';


describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Game />);
  
    expect(component).toMatchSnapshot();
  });
});

it('renders Game without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Menu without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Menu />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('calc correctly', () => {
    test('15', () => {
        let  a = 5;
        let b = 10;
    
        expect(a+b).toBe(15);
    });
    test('11', () => {
        let  a = 1;
        let b = 10;
    
        expect(a+b).toBe(11);
    });
  });