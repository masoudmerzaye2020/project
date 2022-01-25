import React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, scale,useTransform,useMotionValue,useAnimation} from 'framer-motion'


const Box1 = ({speed}) => {
    const {scrollYProgress} = useViewportScroll();
   
    const yValue = useTransform(scrollYProgress,[0.2, 0.2, 0.4],[0.3, 0.7, -50*speed ]);
    const scale = useTransform(scrollYProgress,[0.6, 0.5, 0.9],[1,0.7, -2 ]) ;
   /*  const xValue = useTransform(scrollYProgress,[0, 0.9,1],[0.9, 50, -50*speed ]); */
 /*    const xValue = useTransform(scrollYProgress,[1, 0.3,0.7],[0.2, -50, -100*speed ]);  */
   
  
    return(
        <motion.div initial={{opacity:1}}    transition={{duration:3}} style={{y:yValue,scale}} className='absolute m-auto bottom-0  absolute top-1/2 left-64 transform -translate-x-1/2 z-30'>
         <Image src='/svg/sunset.svg' height={300} width={300}  className='w-full z-20' />
        </motion.div>
    );
  
  };

  const Box2 = ({speed}) => {
    const {scrollYProgress} = useViewportScroll();
    const scale = useTransform(scrollYProgress,[0.1,0.2, 3],[0.2, 0.6,5 ]) ;
    /* const scale = useTransform(scrollYProgress,[0.2, 3, 0.6],[0.9,4, 1 ]) ; */
    const yValue = useTransform(scrollYProgress,[0.2, 0.3,0.5],[0.3, -50, 50*speed ]);  
    return(
     /*    <motion.div initial={{opacity:1}}    transition={{duration:3}} style={{scale}}  className='absolute top-0 left-1/2'>
        <Image src='/svg/backimage.svg' height={300} width={300}  className='w-full z-20' />
        </motion.div> */

        <motion.div initial={{opacity:1}}    transition={{duration:3}} style={{scale}}  className='absolute top-0 left-1/2'>
        <Image src='/svg/backimage.svg' height={300} width={300}  className='w-full z-20' />
        </motion.div>
    );
  
  };

function Learn() {
    return (
        <div className='w-full bg-black'>
            <div className='xl:w-10/12 mx-auto flex flex-wrap bg-black lg:py-32 md:py-5'>
                <div className='sm:w-3/3 md:w-2/3 lg:w-2/3 xl:w-2/3 inline lg:mt-10 md:mt-10 relative bg-blue-200' >                    
                   
                   <div className=''>
                    <Image src='/svg/dashboard.svg' height={600} width={900}  className='w-full z-30' />
                    </div>
                    <Box2 speed={1}></Box2>
                    <Box1 speed={-7}></Box1>


                </div>
                <div className='w-full sm:w-3/3 md:w-1/3 lg:w-1/3 xl:w-1/3  justify-start  mx-auto p-6 order-first md:order-last md:p-12'>
                    <div className='text-white lg:text-5xl md:text-2xl lg:mt-32 md:mt-10 lg:mx-4 md:mx-1 font-semibold'>
                    Learn first about the next Crypto Punks
                    </div>
                    <div className='text-white lg:p-5 md:p-2'>
                    Ayzd helps you to learn about the NFT projects. Biggest NFT & Metaverse database, live news feed, top collections, powerful analytics, statistics & more
                    </div>
                    <button type="button" className='flex  lg:px-10 md:px-2 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-xl rounded-lg md:px-4 shadow-2xl drop-shadow-lg shadow-indigo-500/80'>
                         <div className="text-center mx-auto">Discover Drops</div>      
                     </button>

                </div>

            </div>
{/*             <div className="relative">

            <img className="absolute top-0 left-0" src="https://picsum.photos/536/354" alt="Workplace" width="600" />

            <img className="cursor-pointer absolute top-0 left-0 mt-32 ml-40 hover:shadow-outline" src="https://picsum.photos/535/354" width="600" />

            </div> */}
        </div>
    )
}

export default Learn
