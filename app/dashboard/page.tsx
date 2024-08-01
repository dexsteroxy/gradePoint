import HeaderFor from '@/components/HeaderFor'
import Navbar from '@/components/Navbar'
import StarsCanvas from '@/components/ui/StarBackground'
import React from 'react'

import Board from '@/components/Dashboard'

const Dashboard = () => {
  return (
    <div className=' bg-black-100 min-h-screen'>
      {/* <StarsCanvas /> */}
   <HeaderFor />
     {/* contaner */}
    
     <Board />
    

    </div>
  )
}

export default Dashboard