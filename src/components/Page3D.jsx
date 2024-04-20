import React from 'react'
import { Link } from 'react-router-dom'

const Page3D = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Visit a 3D Breakdown of My Experincess Below!
        </p>
        <Link to='/Marine' className='btn'>
            Visit the Marine Institute!
        </Link>
        <Link to='/WIP' className='btn'>
            Visit Barnes!
        </Link>
    </section>
  )
}

export default Page3D