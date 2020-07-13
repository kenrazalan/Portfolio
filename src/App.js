import React, { useEffect,useState } from 'react';
import Intro from './components/Intro';
import Sides from './components/Sides';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [windowDimensions,setWindowDimensions] = useState({})

  const updateWindowDimensions = () =>{
    setWindowDimensions({x:window.innerWidth,y:window.innerHeight})
  }

  useEffect(()=>{
      window.addEventListener('resize',updateWindowDimensions)

      return ()=> window.removeEventListener('resize',updateWindowDimensions)
  },[])

  useEffect(()=>updateWindowDimensions(),[])

  return (
    <div className="App">
        <Navigation windowDimensions={windowDimensions} />
        <Sides windowDimensions={windowDimensions}/>
        <Intro/>
        <About/>
        <Projects/>
        <Contact />
        <Footer/>
    </div>
  );
}

export default App;
