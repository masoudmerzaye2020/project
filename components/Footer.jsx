import React from 'react'
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
   <>

<footer className="w-full bg-black pt-10  pt-10">
   <div className='w-full border-t-2 border-gray-500 pb-5'>

   </div>

  <div className='max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left pt-32'>
  <div className="lg:w-4/12 sm:w-12/12">
         
         <div className="text-xs uppercase text-gray-400 font-medium mb-6">
             Getting Started
         </div>

   
         
     </div>
    <div className=" text-gray-800 flex flex-wrap justify-left w-8/12">       

        <div className="p-5 w-1/2 sm:w-4/12 md:w-4/12">
        
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
               App quick links
            </div>

      
            <Link href="#">
               <a  className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                  Smart feed
               </a>
            </Link>
            <Link href="#">
               <a  className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                  Ranking
               </a>
            </Link>
            <Link href="#">
               <a  className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                 Project search
               </a>
            </Link>
            <Link href="#">
               <a  className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                  Feature request
               </a>
            </Link>
            <Link href="#">
               <a  className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                  NFT Drops
               </a>
            </Link>

        </div>

   
        <div className="p-5 w-1/2 sm:w-4/12 md:w-4/12">
  
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Misc
            </div>


            <Link href="#">
               <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                  Join NFT Newsletter
               </a>
            </Link>
            <Link href="#">
               <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                  Contact us
               </a>
            </Link>
            <Link href="#">
               <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                  Join our team
               </a>
            </Link>
            <Link href="#">
               <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                  Privacy policy
               </a>
            </Link>   
            <Link href="#">
               <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                  Partnerships
               </a>
            </Link>        
           
        </div>


        <div className="p-5 w-1/2 sm:w-4/12 md:w-4/12">
    
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Ayzd Family
            </div>

            <Link href="#">
               <a  className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                  NFT Merch
               </a>
            </Link>
            <Link href="#">
               <a  className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                  Ayzd For Artists
               </a>
            </Link>
            <Link href="#">
               <a  className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                  NFT Resources
               </a>
            </Link>
            <Link href="#">
               <a  className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                  NFT Meditations
               </a>
            </Link>           
        
        </div>
    </div>
  </div>

   <div className='w-full border-b-2 border-gray-500'>

   </div>

    <div className="pt-2 ">
        <div className="flex pb-5 px-3 mx-auto py-3 
              text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
            <div className="mt-2">
                © Copyright 1998-year. All Rights Reserved.
            </div>
          
            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                
                
                <div className=' '>
                  <a href="#" className="w-6 mx-2 p-2 bg-black border-2 border-red rounded-lg ">
                     <FacebookIcon/>
                  </a>
                </div>

               <div>
               <a href="#" className="w-6 mx-2 p-2 bg-black border-2 border-red rounded-lg ">
                    <TwitterIcon/>
                </a>
               </div>
              
              <div>
               <a href="#" className="w-6 mx-2 p-2 bg-black border-2 border-red rounded-lg ">
                     <YouTubeIcon/>
                  </a>
              </div>
               <div>
               <a href="#" className="w-6 mx-2 p-2 bg-black border-2 border-red rounded-lg ">
                    <FacebookIcon/>
                </a>
               </div>
               <div>
               <a href="#" className="w-6 mx-2 p-2 bg-black border-2 border-red rounded-lg ">
                    <InstagramIcon/>
                </a>
               </div>
            </div>
        </div>
    </div>
</footer>
   </>
    )
}

export default Footer
