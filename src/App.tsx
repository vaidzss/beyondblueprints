

import './App.css'
import HomePage from './components/Home/HomePage'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
function App() {


  return (
    <>
   <HomePage/>
    </>
  )
}

export default App
