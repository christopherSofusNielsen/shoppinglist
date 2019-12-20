import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import AppNavbar from './components/AppNavbar';
import Shoppinglist from './components/Shoppinglist';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <AppNavbar/>
      <Shoppinglist/>
      </div>
    </Provider>
  );
}

export default App;
