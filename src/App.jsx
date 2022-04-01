import React from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom';
import Musicplayer from './Musicplayer'

import { Provider } from 'react-redux';
import store from './Redux/Store';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter><Provider store={store}>
      <div className="App">
      {<Routes>
        <Route path='/*' element={<Musicplayer/>} />
      </Routes>}
      </div>
    </Provider></BrowserRouter>

  )
}

export default App
