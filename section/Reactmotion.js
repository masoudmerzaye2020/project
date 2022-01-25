import React, { useEffect } from "react";
import Image from "next/image";
import {motion, useViewportScroll, useTransform,useAnimation} from 'framer-motion'


const Box = ({speed}) => {
  const {scrollYProgress} = useViewportScroll();
 
  const yValue = useTransform(scrollYProgress,[0, 0.9,1],[0.9, 50, -50*speed ]);
  const xValue = useTransform(scrollYProgress,[1, 0.9,0.7],[0.2, 50, -200*speed ]);
 

  return(
    <motion.div initial={{opacity:1}}    transition={{duration:3}} style={{y:yValue ,x:xValue}} className="mx-auto flex text-center">
      <Image src='/svg/graph.svg' height={190} width={300}  />
    </motion.div>
  );

};

export const Reactmotion = () => {


  return (
    <>

    <div className="max-w-lg flex bg-blue-400">
  
    <div className="flex py-80 items-center mx-auto">
      <div className="flex items-center justify-center mx-auto">
        <Image src='/svg/graph.svg' height={190} width={300}  />
        </div>
        <div className="flex items-center justify-center mx-auto">
        <Image src='/svg/graph.svg' height={190} width={300}  />
        </div>
        <div className="flex items-center justify-center mx-auto">
        <Image src='/svg/graph.svg' height={190} width={300}  />
        </div>   
      </div>
      <div className="flex mx-auto">
       <Box speed ={2}></Box>
        <Box speed={0}></Box>
        <Box speed={-7}></Box>
      </div>

     
    </div>

{/* <div className=" flex">
<div className="mx-auto">
<Box speed ={1}></Box>
  <Box speed={0}></Box>
  <Box speed={-1}></Box>
</div>
<div className=" mx-auto">
<Box speed ={1}></Box>
  <Box speed={0}></Box>
  <Box speed={-1}></Box>
</div>
<div className=" mx-auto">
<Box speed ={1}></Box>
  <Box speed={0}></Box>
  <Box speed={-1}></Box>
</div>
</div> */}
</>
  );
};

export default Reactmotion
