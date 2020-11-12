import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer from "./store/reducer" 

test('renders learn react link', () => {
  const store: Store<UserState, UserAction> & {
    dispatch: DispatchType
  } = createStore(reducer, applyMiddleware(thunk))
  render(
    <Provider store={store}>
  <App />
  </Provider>
  );
  const linkElement = screen.getByText(/Saved/i);
  expect(linkElement).toBeInTheDocument();
});