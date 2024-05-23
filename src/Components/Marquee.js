import React from 'react'

const Marquee = ({children}) => {
  return (
    <div>
      <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {children}
      </div>
    </div>
    </div>
  )
}

export default Marquee
