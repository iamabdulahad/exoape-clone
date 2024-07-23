import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
import PlayReel from './components/PlayReel'
import Images from './components/Images'
import News from './components/News'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='h-screen w-screen'>
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Images />
      <News />
      <Footer />
    </div>
  )
}

export default App