
import Image from 'next/image';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation,useViewportScroll, useTransform } from "framer-motion";
import React, { useEffect } from "react";

export default function welcome() {
    const {scrollYProgress} = useViewportScroll();
    const yValue = useTransform(scrollYProgress,[0,1,0.3],[1,-200 , 300]);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
    }else
    {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const zoomout = {
    visible: { opacity: 1,   x: 0,
      y: 0,
      scale: 1,
      rotate: 0,  transition: { duration: 1 } },
    hidden: { opacity: 0,  x: 0,
      y: 0,
      scale: 0.8,
      rotate: 0,  transition: { duration: 1 } }
  };
  
  const textanimation = {
    visible: { opacity: 1,   
      x:0, y:0,
      scale: 1,
        transition: { duration: 1 } },
    hidden: { opacity: 1, x: 0,
      y: 20,
      scale: 1,
      rotate: 0,  transition: { duration: 1 } }
  };

  /* ------- */

  const squareVariants = {
      visible: { opacity: 1,   x: -120,
        y: 20,
        scale: 1,
        rotate: -10,  transition: { duration: 1 } },
      hidden: { x: 0,
        y: 0,
        scale: 1,
        rotate: 0,  transition: { duration: 1 ,} }
    };
    const rotateright = {
      visible: { opacity: 1,   x: 120,
        y: 20,
        scale: 1,
        rotate: 10,  transition: { duration: 1 } },
      hidden: { x: 0,
        y: 0,
        scale: 1,
        rotate: 0,  transition: { duration: 1 , } }
    };


    return (
      
        <section id="welcome" className="max-w-lg bg-gray-200 dark:bg-black text-justify font-paragraph" >
            <div className="container mx-auto p-10  ">
             
            <motion.p
             ref={ref}
             
             animate={controls}
             initial="hidden"
             variants={textanimation}
            className="lg:mt-10 lg:text-2xl md:mt-5 md:text-2xl "> Wanna Panda is a collection of 10,000 NFTs. Like a snowflake, each collectable is a one-of-a-kind hand-drawn original. Inspired by art, comic and global cultures, the artwork brought authenticity and down to the smallest details. By purchasing a panda, you’re also getting access to our exclusive community and some exciting bonus benefits.</motion.p>
             <motion.p
             
             ref={ref}
             animate={controls}
             initial="hidden"
             variants={textanimation}
             className="lg:mt-5 md:mt-2 lg:text-2xl md:text-2xl">We also create decentralized comic- a series of hilarious 4-panels with ideas coming from panda owners, we make it become your voice in the NFT space. Panda owners can join the Bamboo Beach, the beachfront club where members can make friends and get involved in our comic creation at the Workshop.</motion.p>
         
            </div>
             <div className="container mx-auto lg:flex md:grid p-10">
                <div className="lg:w-7/12 md:w-12/12 inline lg:mt-20 md:mt-10">
              
                   <motion.p 
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={textanimation}
                   className="flex lg:mt-5 md:mt-5 lg:text-2xl md:text-1xl  ">
                   Each Wanna Panda collectable is a 100% unique programmatically and randomly generated from over 200 traits. Wanna Panda focuses on expressions, animation and authenticity. The traits include mood, clothing, headwear and fun accessories. Some are animated, and some are rarer than others.

                   The pandas are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. They’re tamper-proof and last forever.

                   </motion.p>
                </div>
          <div  className="flex relative sm:w-4/12 text-center items-center justify-center mt-20 mx-auto">
                  <div className="flex w-12/12 sm:w-6/12 text-center items-center justify-center mx-auto">
                  <Image
                    src="/svg/graph.svg"
                    alt="Picture of the author"
                    width={150}
                    height={250}
                  className="absolute flex text-center items-center justify-center mx-auto"/>                 
                  </div>             
   
                <motion.div
                 /*  ref={ref} */
                  style={{y:yValue}}
                /*   animate={controls} */
                  initial="hidden"
             /*      variants={squareVariants} */
                  className="absolute w-12/12 sm:w-6/12 text-center items-center justify-center mx-auto">
                <Image
                  src="/svg/graph.svg"
                  alt="Picture of the author"
                  width={150}
                  height={250}
                />
            
                </motion.div>


                  <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={rotateright}
                    className="absolute w-12/12 sm:w-6/12 items-center justify-center mx-auto ">
                  <Image
                    src="/svg/graph.svg"
                    alt="Picture of the author"
                    width={150}
                    height={250}
                  />
                 </motion.div>
              </div>   
           
             </div>            
           </section>

    )
}
