

import './App.css'
import HomePage from './components/Home/HomePage'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
function App() {


  return (
    <>
   <HomePage/>
    </>
  )
}

export default App
