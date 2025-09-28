import React from 'react'
import { Link } from 'react-router-dom'

const GradientButton = ({text,link,className=""}) => {
  return (
   <>
 <button onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
    <Link to={link} className={`btn uppercase font-heading border-2 border-transparent text-center min-w-[250px] px-12 py-2 lg:py-3 rounded-full ${className}`}>{text}</Link>
 </button>
   </>
  )
}

export default GradientButton