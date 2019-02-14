import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from '.Game/Game';
import Menu from './Menu/Menu';

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
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