'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Navbar
() {
  const route = useRouter()
  return (
    <div >
        <div className='flex justify-between '>
            <Image src="/572.png" alt='logo' height={120} width={110}/>
        
        <div >
            <ul className='flex space-x-14 mt-8 mr-14 text-2xl'>
              <button onClick={()=>route.push("/")}>  <li > <b>Home</b></li> </button>
              <button onClick={()=>route.push("/About")}>  <li><b>About</b></li> </button>
             <button onClick={()=>route.push("/blog")} >  <li><b>Blogs</b></li> </button>
             <button onClick={()=>route.push("/contact")} >   <li><b>Contact</b></li> </button>
            </ul>
        </div>  
</div>
    </div>
  )
}