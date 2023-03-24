import {React, useState} from 'react';
import './App.css';

import Header from '../header';
import Figures from '../figures';
import FilterShapes from '../filterShapes';
import Burger from '../burger';

const App = () => {

  const [shapes, setShapes] = useState([
    {
      "form": "circle",
      "color": "blue",
      "dark": true
    },
    {
      "form": "square",
      "color": "yellow",
      "dark": false
    },	
    {
      "form": "square",
      "color": "yellow",
      "dark": false
    },	
    {
      "form": "circle",
      "color": "red",
      "dark": false
    },
  
    {
      "form": "circle",
      "color": "blue",
      "dark": true
    },
    {
      "form": "circle",
      "color": "green",
      "dark": false
    },	
    {
      "form": "circle",
      "color": "yellow",
      "dark": true
    },	
    {
      "form": "square",
      "color": "green",
      "dark": false
    },
    
    {
      "form": "square",
      "color": "yellow",
      "dark": false
    },
    {
      "form": "circle",
      "color": "green",
      "dark": true
    },	
    {
      "form": "square",
      "color": "blue",
      "dark": true
    },	
    {
      "form": "square",
      "color": "blue",
      "dark": false
    },	
    
    {
      "form": "square",
      "color": "blue",
      "dark": false
    },
    {
      "form": "triangle",
      "color": "red",
      "dark": true
    },	
    {
      "form": "circa",
      "color": "blue",
      "dark": false
    },	
    {
      "form": "square",
      "color": "blue",
      "dark": true
    },
  
    {
      "form": "circle",
      "color": "blue",
      "dark": true
    },
    {
      "form": "square",
      "color": "green",
      "dark": true
    },	
    {
      "form": "square",
      "color": "yellow",
      "dark": true
    },	
    {
      "form": "circle",
      "color": "green",
      "dark": false
    },
  
    {
      "form": "square",
      "color": "blue",
      "dark": false
    },
    {
      "form": "circle",
      "color": "yellow",
      "dark": true
    },	
    {
      "form": "square",
      "color": "green",
      "dark": true
    },	
    {
      "form": "square",
      "color": "yellow",
      "dark": false
    }
  ])


    return (
      <div className='container'>
        <Header />
        <FilterShapes />
        <Burger />
        <Figures shapes={shapes}/>
      </div>
    )
}

export default App;