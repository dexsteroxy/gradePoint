import { Login } from '@/components/Login'
import StarsCanvas from '@/components/ui/StarBackground'
import React from 'react'

const page = () => {
  return (
    <main
      className=" relative bg-black-100 min-h-screen flex 
     justify-center items-center flex-col 
        mx-auto px-5 overflow-clip"
    >
       <StarsCanvas />
     <div className="max-w-7xl w-full z-50">
    
     <Login />
     </div>
    </main>
  )
}

export default page