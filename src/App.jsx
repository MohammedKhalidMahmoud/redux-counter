import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import {store} from '../src/lib/Store'
import { Counter } from './counter'
function App() {
  return (
    <>
    <Provider store={store}>
      <Counter/>
    </Provider>
    </>
  );
}

export default App
