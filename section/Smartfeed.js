import React from 'react'
import Image from 'next/image'

function Smartfeed() {
    return (
        <>
        <div className='w-full bg-gradient-to-b from-indigo-800 via-indigo-900 to-black'>
            <div className='xl:w-10/12 mx-auto '>
                    <div className='mx-auto self-center object-center object-buttom text-center pt-40'>
                        <Image src='/blueimage.png' height={400} width={500}  className='' />
                    </div>
                <div className='text-5xl text-white w-7/12 mx-auto text-center pt-3'>
                Be ahead of the market and receive the best news in one place
                </div>
                <div className='text-white text-center w-7/12 pt-2 mx-auto pb-6'>
                We aggregate the best sources of NFT news and put them in a convenient way for you. Set Ayzd as your homepage and you will be up to date with the latest trends and events
                </div>
            <div className='pb-32'>
            <button type="button" className='flex  px-12 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-xl  shadow-md rounded-2xl  mx-auto p-3 mb-8 '>
                
                        
                <div className="text-center mx-auto drop-shadow-2xl">View Smartfeed</div>
            
            </button>
            </div>
            </div>
        </div>
            
        </>
    )
}

export default Smartfeed
