import React from 'react';
import { render } from '@testing-library/react';
import Rockets from '../components/rockets/Rockets';
import Missions from '../components/missions/Missions';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Profile from '../components/profile/Profile';

describe('Testing if all pages renders correctly', () => {
  test('Testing Rockets page', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Testing Missions page', () => {
    const tree = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Testing Profile page', () => {
    const tree = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
