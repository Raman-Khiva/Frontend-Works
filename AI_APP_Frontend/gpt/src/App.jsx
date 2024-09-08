import React from 'react'
import { Footer,Blog,Header,Features,WhatGPT3, Possibilty, } from './containers';
import { Cta,Brand,Navbar} from './components';
import './App.css';
import './index.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibilty/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App;
