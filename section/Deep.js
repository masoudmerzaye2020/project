import React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, scale,useTransform,useMotionValue,useAnimation} from 'framer-motion'

const Box1 = ({speed}) => {
    const {scrollYProgress} = useViewportScroll();
    const x = useMotionValue(0)
    const yValue = useTransform(scrollYProgress,[0.2, 0.5,1],[0.8, -50, -90*speed ]);
    const scale = useTransform(scrollYProgress,[0.1, 0.2, 0.8],[0.2,0.4, 2 ]) ;
   /*  const xValue = useTransform(scrollYProgress,[0, 0.9,1],[0.9, 50, -50*speed ]); */
 /*    const xValue = useTransform(scrollYProgress,[1, 0.3,0.7],[0.2, -50, -100*speed ]);  */
   
  
    return(
        <motion.div initial={{opacity:1 , y:-234}}    transition={{duration:3}}  style={{scale}} className=''>
         <Image src='/svg/cartoon.svg' height={300} width={300}  className='w-full z-20' />
        </motion.div>
    );
  
  };

  const Box2 = ({speed}) => {
    const {scrollYProgress} = useViewportScroll();
    const x = useMotionValue(0)
    const yValue = useTransform(scrollYProgress,[0.2, 0.5,1],[0.8, -50, -90*speed ]);
    const scale = useTransform(scrollYProgress,[0.1, 0.3, 0.6],[0.2,0.4, 0.9 ]) ;  
  
    return(
        <motion.div initial={{opacity:1 , y:-234}}    transition={{duration:3}}  style={{y:yValue,scale}} className=''>
         <Image src='/svg/graph.svg' height={300} width={300}  className='w-full z-20' />
        </motion.div>
    );
  
  };

  const Box3 = ({speed}) => {
    const {scrollYProgress} = useViewportScroll();
    const x = useMotionValue(0)
    const yValue = useTransform(scrollYProgress,[0.9, 0.2, 0.3],[, 0.7, -160*speed ]);
    const scale = useTransform(scrollYProgress,[0.6, 0.5, 0.9],[1,0.7, 2 ]) ;
  
    return(
        <motion.div initial={{opacity:1 , y:-234}}    transition={{duration:3}}  style={{y:yValue,scale}} className=''>
         <Image src='/svg/whitesunset.svg' height={300} width={300}  className='w-full z-20' />
        </motion.div>
    );
  
  };

function Deep() {


    return (
        <>
        <div className='w-full h-40 min-h-full bg-gradient-to-b from-slate-900 via-slate-900 to-black border-t-2 border-gray-800'>
        
        </div>


          <div  className='text-white xl:w-10/12 mx-auto flex flex-wrap lg:py-60 '>

                <div className='sm:w-3/3 md:w-2/3 lg:w-2/3 xl:w-2/3 flex inline bg-blue-200 relative'>                    
                    <div className='absolute text-center mx-auto '>
                        {/* <Image src='/svg/cartoon.svg' height={200} width={200}  className='absolute z-50  ' /> */}
                        <Box1 speed={4} ></Box1>
                    </div>                   
                     <div className=''>
                       {/*  <Image src='/svg/graph.svg' height={190} width={300}  className='absolute w-full z-20' /> */}
                        <Box2 speed={-4} ></Box2>
                        </div>
                        <div className=''>
                       {/*  <Image src='/svg/whitesunset.svg' height={300} width={300}  className='w-full z-20' /> */}
                        <Box3 speed={3}></Box3>
                        </div>
                        <div className=''>
                             <Image src='/svg/card.svg' height={300} width={300}  className='absolute' />
                        </div> 

                </div>


       {/*          <div className='sm:w-3/3 md:w-3/3 lg:w-2/3 xl:w-2/3 inline bg-blue-200 '>
                    <div className=' '>
                        <Image src='/svg/whitesunset.svg' height={400} width={250}  className=' z-50  ' />
                    </div>                   
                    <div className='absolute top-1/3 left-2/3 -translate-x-2/3 z-30 '>
                        <Image src='/svg/graph.svg' height={190} width={300}  className='w-full z-20' />
                        </div>
                        <div className='absolute top-1/4 right-1/3 -translate-x-3/4 z-10 '>
                        <Image src='/svg/cartoon.svg' height={200} width={300}  className='w-full z-20' />
                        </div>
                        <div className='absolute bottum-2/3 top-1/2 right-1/2 -translate-x-1/3 z-10'>
                             <Image src='/svg/card.svg' height={300} width={300}  className='' />
                        </div>

                </div> */}
                <div className='sm:w-3/3 md:w-1/3 lg:w-1/3 xl:w-1/3 inline bg-blue-400'>
                   <div className='inline flex text-white text-5xl font-bold '>
                        Deep dive into the project analytics
                    </div>
                    <div className='inline flex text-white py-6 '>
                    Understand which projects are on a rise right now and which are losing its hype.
                    </div>
                    <div >
                    <button type="button" className='flex  px-12 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-xl  shadow-lg shadow-indigo-500/50 rounded-lg mx-4 py-3 '>
                            <div className="text-center mx-auto">Project Database</div>      
                    </button>
                    </div>

                </div>
            </div>


     

        <div className='bg-black w-full '>
                    <Image src='/svg/sectionbackground.svg' height={20} width='100%'  className='' />
               {/*      <Image src="/svg/sectionbackground.svg" style={{width: "100%", height: "auto"}}/> */}
                    </div>
            
        </>
    )
}

export default Deep
