'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Latestblogs from '@/data/ltsblog'
import { useRouter } from 'next/navigation'

export default function Homepage() {
  const route = useRouter()
  return (
    <div>
        
        <div
       className="min-h-screen bg-cover bg-center"
       style={{
         backgroundImage: "url('/programming-and-jpg.jpg')",  
       }}   >

        <div>
            <h1 className='text-white text-5xl pt-44 pl-5'> <i>Welcome to my Blog </i></h1> <br />
            <p className='text-white text-2xl pl-28'>Hello! I am  Sidra Farooq.</p> <br />
            <p className='text-white space-y-11 pl-8'> I m a web developer passionate about creating modern, efficient websites </p>
        </div>
        </div>
        
        <div>
          <div className='flex justify-center m-6 font-extrabold text-3xl ' >
            <h1>Latest Blogs</h1>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                {Latestblogs.map((Latestblog) => (
                    <div key={Latestblog.id} className="border p-4 rounded-md shadow-md">
                        <Image src={Latestblog.image} alt={Latestblog.name} height={300} width={500} className=" object-cover" />
                        <h2 className="text-lg font-bold">{Latestblog.name}</h2>
                        
                        <Link href={`/products/${Latestblog.id}`}>
                            <button className="mt-2 bg-blue-950 text-white px-4 py-2 rounded">
                                View 
                            </button>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
        <div className='flex justify-center items-center p-14'>
          <button onClick={()=>route.push("/blog")} className='bg-blue-950 text-white h-16 w-32 rounded '> View More </button>
        </div>
        </div>

       
        
    
  )
}