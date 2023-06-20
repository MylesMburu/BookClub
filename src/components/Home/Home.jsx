import React from 'react'
import Synopsis from './Synopsis'
import { Goals } from './Goals'
import { WhyRead } from "./WhyRead";

export const Home = () => {
  return (
    <div className='bg-primary text-white'>
        <Synopsis/>
        <Goals/>
        <WhyRead/>
    </div>
  )
}
