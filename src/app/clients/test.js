import React from 'react'
import {hydrate} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from '../../redux/configureStore'
import Test from '../../components/test'
const state = window.__STATE__;
delete window.__STATE__;
const store = configureStore(state)
hydrate(
  <Provider store={store} >
     <Test />
  </Provider>,
  document.querySelector('#app')
)