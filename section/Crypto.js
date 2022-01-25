import React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, useTransform,useAnimation} from 'framer-motion'





function Learn() {
    return (
        <div className='w-full bg-black'>
            <div class="xl:w-10/12 bg-black flex flex-wrap">
                <div class="w-full sm:w-3/3 md:w-2/2 lg:w-2/3 xl:w-2/3 ">
                <div className='  inline lg:mt-10 md:mt-10 relative order-last md:order-first' >
                    
                  
                    <div className=' top-0 left-0 '>
                      <Image src='/svg/dashboard.svg' height={600} width={900}  className='w-full z-30' />
                     </div>
                    
 
                     <div className='absolute top-0 right-0'>
                     <Image src='/svg/backimage.svg' height={300} width={300}  className='w-full z-20' />
                     </div>
                     <div className='absolute m-auto bottom-0  absolute top-1/2 left-1/2 transform -translate-x-1/2 z-30'>
                     <Image src='/svg/sunset.svg' height={300} width={300}  className='w-full z-20' />
                     </div>
                 </div>

                </div>
                <div class="w-full sm:w-3/3 md:w-3/3 lg:w-1/3 xl:w-1/3 ">
                    <div className=' justify-center lg:w-10/12' >
                        <div className='text-white text-5xl mt-32 mx-4 font-semibold'>
                        Learn first about the next Crypto Punks
                        </div>
                        <div className='text-white py-5  px-4'>
                        Ayzd helps you to learn about the NFT projects. Biggest NFT & Metaverse database, live news feed, top collections, powerful analytics, statistics & more
                        </div>
                        <button type="button" className='flex  px-10 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-xl rounded-lg mx-4 p-3 mb-8 shadow-2xl drop-shadow-lg shadow-indigo-500/80'>
                            <div className="text-center mx-auto">Discover Drops</div>      
                        </button>
                    </div>    
                
                </div>           
              
            </div> 

                
            <div className='xl:w-10/12 mx-auto flex py-32 '>
                <div className='lg:max-w-8/12 md:w-12/12 inline lg:mt-10 md:mt-10 relative order-last md:order-first' >
                    
                  
                   <div className=' top-0 left-0 '>
                     <Image src='/svg/dashboard.svg' height={600} width={900}  className='w-full z-30' />
                    </div>
                   

                    <div className='absolute top-0 right-0'>
                    <Image src='/svg/backimage.svg' height={300} width={300}  className='w-full z-20' />
                    </div>
                    <div className='absolute m-auto bottom-0  absolute top-1/2 left-1/2 transform -translate-x-1/2 z-30'>
                    <Image src='/svg/sunset.svg' height={300} width={300}  className='w-full z-20' />
                    </div>
                </div>
                <div className='lg:w-4/12  sm:w-6/12  justify-start  mx-auto p-6 ' >
                    <div className='text-white text-5xl mt-32 mx-4 font-semibold'>
                    Learn first about the next Crypto Punks
                    </div>
                    <div className='text-white py-5  px-4'>
                    Ayzd helps you to learn about the NFT projects. Biggest NFT & Metaverse database, live news feed, top collections, powerful analytics, statistics & more
                    </div>
                    <button type="button" className='flex  px-10 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-xl rounded-lg mx-4 p-3 mb-8 shadow-2xl drop-shadow-lg shadow-indigo-500/80'>
                         <div className="text-center mx-auto">Discover Drops</div>      
                     </button>

                </div>

            </div>
        </div>
    )
}

export default Learn
