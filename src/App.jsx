import React from 'react'
import './App.css'
import Musicplayer from './Musicplayer'
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Musicplayer />
      </div>
    </Provider>
  )
}

export default App
