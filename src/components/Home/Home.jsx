import React from 'react'
import Synopsis from './Synopsis'
import { Mission } from './Mission'
import { Solution } from './Solution'

export const Home = () => {
  return (
    <div className='bg-primary text-white'>
        <Synopsis/>
        <Mission/>
        <Solution/>
    </div>
  )
}
