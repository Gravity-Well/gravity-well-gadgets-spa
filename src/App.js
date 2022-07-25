import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Widgets from './components/Widgets';
import Wudgets from './components/Wudgets';

import Frame from 'react-frame-component';

const widgetprods=[
  {name: 'Master Widget', price:'$125.00'},
  {name: 'Sub Widget', price:'$115.00'},
  {name: 'Long Widget', price:'$150.00'},
  {name: 'Short Widget', price:'$135.00'}
]
const wudgetprods=[
  {name: 'Master Wudget', price:'$125.00'},
  {name: 'Sub Wudget', price:'$115.00'},
  {name: 'Long Wudget', price:'$150.00'},
  {name: 'Short Wudget', price:'$135.00'}
]
const App =()=>{
  return (
    <Router>
      <div className='App'>
        <Navbar />   
          <div className='container'>
            <Routes>
              <Route  path='/' component={Home} /> 
              <Route path='/widgets' element={<Widgets prods={widgetprods}/>}  />
              <Route path='/wudgets' element={<Wudgets prods={wudgetprods}/>}  />
             
             
            </Routes>         </div>
      </div>
      </Router>
  )};
  export default App;