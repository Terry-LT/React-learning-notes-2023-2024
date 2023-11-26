import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FoodList from './components/FoodList'
function App() {
  return(
    <>
    <Header></Header>
    <FoodList></FoodList>
    <Footer></Footer>
    </>

  );
}

export default App
