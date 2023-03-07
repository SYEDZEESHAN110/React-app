import React from 'react'
import Cards from './Cards'

import '../css/RightSide.css'

const RightSide = ({data}) => {
  return (
    <section className='rightSide col'>
      
      {data && data.map((item) => <Cards key={item.id} item={item}/> )}
      
    </section>
  )
}

export default RightSide