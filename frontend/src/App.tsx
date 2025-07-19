import './App.css'
import HomePage from './components/Home/HomePage'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from './Layout';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import AdminPage from './components/admin/AdminPage';

import Thankyou from './components/Thankyou/Thankyou';
import ProjectGallery from './components/Portfolio/ProjectGallery';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path ="thankyou" element={<Thankyou />} />
          <Route path="portfolio/:projectId" element={<ProjectGallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
