import React from 'react'
import '../css/Container.css'
import Navbar from './NavBar'
import LeftSide from './LeftSide'
import RightSide from './RightSide'


const Container = () => {
  return (
    <>
      <Navbar />
      <main className='container'>
        <LeftSide />
        <RightSide />
    </main>
    </>
    
  )
}

export default Container
