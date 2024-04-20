import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Want to get in touch? Have a project or job in mind?
        </p>
        <Link to='/contact' className='btn'>
            Contact Me!
        </Link>
    </section>
  )
}

export default CTA