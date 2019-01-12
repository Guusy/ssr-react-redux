import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import Test from './components/test'
module.exports = function render(initialState) {
  // Model the initial state
  const store = configureStore(initialState)
  let content = renderToString(
    <Provider store={store} >
       <Test />
    </Provider>
  );
const preloadedState = store.getState()
return {content, preloadedState};
}