import React from 'react'
import sponsors from '../constants/trustees'

function TrusteesList() {
  return (
    <div className='flex gap-5 items-center justify-center  '>
      {
        sponsors.map((item,index)=>(
          <img src={item.logo} width={100} />
        ))
      }
    </div>
  )
}

export default TrusteesList