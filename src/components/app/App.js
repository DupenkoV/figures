import {React, useState} from 'react';
import './App.css';

import Header from '../header';
import Figures from '../figures';
import FilterShapes from '../filterShapes';
import Burger from '../burger';

const App = () => {

    return (
      <div className='container'>
        <Header />
        <FilterShapes />
        <Burger />
        <Figures/>
      </div>
    )
}

export default App;