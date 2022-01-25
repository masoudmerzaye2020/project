import React from 'react'

function Hero() {
    return (
    <>            
        <div className='w-full bg-black'>
        <div className='xl:w-10/12 mx-auto'>
                <div className='text-blue-800 text-xl text-center pt-32'>
                  Be at the frontline of nft revolution
                </div>
                <div className='text-white text-5xl font-bold text-center'>
                Metaverse & NFT Analytics
                </div>
                <div className='text-white py-3 text-center lg:w-4/12 md:w-8/12 sm:w-10/12 justify-items-center mx-auto z-50 '>
                Ayzd helps you to learn about the NFT and Metaverse drops. Biggest NFT project database, live news feed, top collections, powerful analytics, statistics & more.
                </div>

                <div>
                <button type="button" className='flex  px-12 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-xl rounded-lg mx-auto p-3 mb-8 bg-indigo-500 shadow-2xl drop-shadow-2xl shadow-indigo-500/40'>
               
                    
                    <div className="text-center mx-auto">Oper Dashboard</div>
                  
               </button>
             
                </div>
       
                <div className='-mt-8 z-1 w-full'>
                    <video playsInline autoPlay loop muted poster="/backgroundimage.png" >
                        <source src="/backgroundvideo.webm" type="video/webm" />
                        <source src="/backgroundvideo.mp4" type="video/mp4" />
                        <source src="/backgroundvideo.mov" type="video/mov" />
                        <source src="/backgroundvideo.wmv" type="video/wmv" />
                        {/* <p>Your browser does not support this video.</p> */}
                    </video>
                </div>
            </div>
        
        
        </div>       
    </>
    )
}

export default Hero
