import React from 'react'
import foto from '../assets/img/foto.png'
import satu from '../assets/img/satu.jpg'
import dua from '../assets/img/dua.jpg'
import realease1 from '../assets/img/realease1.png'
import realease2 from '../assets/img/realease2.png'

import {BsArrowRightShort, BsShopWindow, BsArrowUpRightCircle , BsTwitterX , BsInstagram , BsLinkedin} from 'react-icons/bs'

const Homepage = () => {
  return (
    <>
        <div className='border border-borderColor rounded-xl h-fit w-full pt-6 mt-3 pb-3 px-3 sm:px-6 md:px-5 lg:px-10 xl:px-10 lg:mt-10'>
              {/* profile pic */}
              <div className='border flex border-borderColor rounded-full h-[70px] w-full px-2 py-2'>
                <img src={foto} className='rounded-full' alt="" />
                <div className='px-2 flex flex-col items-center justify-center'>
                    <h4 className='font-semibold text-sm'>Ruslan Wahyudi</h4>
                    <p className='text-xs text-textColor'>Learner Enthusiast</p>
                </div>
              </div>
              {/* end of profile pic */}

              {/* describe hero */}
              <div className='mt-6'>
                <p className='text-[30px]'>👋</p>
                <h1 className='font-bold text-2xl'>Hi. I'm Ruslan, a Webdev and Android Specialist!</h1>
                <h5 className='mt-3 font-semibold text-textColor leading-7'>Hello, I'm Ruslan, an adept professional in Webdev and Android Apps. Experienced in crafting a valuable apps using the latest tech stack right now.</h5>
                <div className='mt-4 flex flex-col w-3/4 gap-2 lg:flex-row'>
                  <button className='bg-btnSecondary flex justify-center items-center gap-3 px-5 py-3 rounded-lg text-white'>Start a Project<BsArrowRightShort/></button>
                  <button className='bg-btnPrimary flex justify-center items-center gap-3 px-5 py-3 rounded-lg text-white'>About Me<BsArrowRightShort/></button>
                </div>
              </div>
              {/* end of describe hero */}

              {/* divider */}
              <div className='w-full h-[1px] bg-borderColor my-7'></div>

              {/* latest work */}
              <div className='flex w-full px-3 py-5 justify-between items-center'>
                <h3 className='flex justify-center gap-2 items-center text-md font-bold lg:text-xl'><BsShopWindow className='text-orange-300 text-2xl'/> Latest Work</h3>
                <h4 className='flex justify-center gap-2 items-center text-md lg:text-lg'>View All <BsArrowRightShort/></h4>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                  <div className='border p-6 border-borderColor rounded-xl h-fit w-full '>
                    {/* image */}
                    <img src={satu} className='rounded-lg h-[200px] w-full md:h-[250px] lg:h-[200px] xl:h-[300px]'  alt="" />
                    <div className='flex justify-between mt-3'>
                      <h3 className='flex justify-center gap-2 items-center text-md font-bold lg:text-xl'>Agency Website</h3>
                      <p className='bg-borderColor border border-slate-300 rounded-lg text-[10px] w-fit h-fit px-2 py-2'>WEBSITE DESIGN</p>
                    </div>
                    <p className='mt-2 font-semibold text-textColor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nisi!</p>
                    <div className='mt-3 flex justify-between items-center'>
                      <button className='bg-borderColor flex  rounded-lg text-slate-500 text-sm w-fit px-4 py-2 items-center'><span>Learn More</span><BsArrowRightShort/> </button>
                      <span className='border border-borderColor p-1 rounded-md'><BsArrowUpRightCircle className='text-xl'/></span>
                    </div>
                  </div>

                  <div className='border p-6 border-borderColor rounded-xl h-fit w-full '>
                    {/* image */}
                    <img src={dua} className='rounded-lg h-[200px] w-full md:h-[250px] lg:h-[200px] xl:h-[300px]'  alt="" />
                    <div className='flex justify-between mt-3'>
                      <h3 className='flex justify-center gap-2 items-center text-md font-bold lg:text-xl'>Agency Website</h3>
                      <p className='bg-borderColor border border-slate-300 rounded-lg text-[10px] w-fit h-fit px-2 py-2'>WEBSITE DESIGN</p>
                    </div>
                    <p className='mt-2 font-semibold text-textColor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nisi!</p>
                    <div className='mt-3 flex justify-between items-center'>
                      <button className='bg-borderColor flex  rounded-lg text-slate-500 text-sm w-fit px-4 py-2 items-center'><span>Learn More</span><BsArrowRightShort/> </button>
                      <span className='border border-borderColor p-1 rounded-md'><BsArrowUpRightCircle className='text-xl'/></span>
                    </div>
                  </div>
                </div>
              {/* end of latest work */}

              {/* divider */}
              <div className='w-full h-[1px] bg-borderColor my-7'></div>

              {/* Latest Releases */}
              <div className='flex w-full px-3 py-5 justify-between items-center'>
                <h3 className='flex justify-center gap-2 items-center text-md font-bold lg:text-xl'><BsShopWindow className='text-orange-300 text-2xl'/> Latest Releases</h3>
                <h4 className='flex justify-center gap-2 items-center text-md lg:text-lg'>View All <BsArrowRightShort/></h4>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='border p-6 border-borderColor rounded-xl h-fit w-full '>
                    {/* image */}
                    <img src={realease1} className='rounded-lg h-[200px] w-full md:h-[250px] lg:h-[200px] xl:h-[300px]'  alt="" />
                    <div className='flex justify-between mt-3'>
                      <h3 className='flex justify-center gap-2 items-center text-md font-bold lg:text-xl'>Docify</h3>
                      <p className='bg-borderColor border border-slate-300 rounded-lg text-[10px] w-fit h-fit px-2 py-2'>$29</p>
                    </div>
                    <p className='mt-2 font-semibold text-textColor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nisi!</p>
                    <div className='mt-3 flex justify-between items-center'>
                      <button className='bg-borderColor flex  rounded-lg text-slate-500 text-sm w-full px-5 justify-center py-2 items-center'><span>View Template</span><BsArrowRightShort/> </button>
                    </div>
                  </div>

                  <div className='border p-6 border-borderColor rounded-xl h-fit w-full '>
                    {/* image */}
                    <img src={realease2} className='rounded-lg h-[200px] w-full md:h-[250px] lg:h-[200px] xl:h-[300px]'  alt="" />
                    <div className='flex justify-between mt-3'>
                      <h3 className='flex justify-center gap-2 items-center text-md font-bold lg:text-xl'>Mellow</h3>
                      <p className='bg-borderColor border border-slate-300 rounded-lg text-[10px] w-fit h-fit px-2 py-2'>$49</p>
                    </div>
                    <p className='mt-2 font-semibold text-textColor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nisi!</p>
                    <div className='mt-3 flex justify-between items-center'>
                      <button className='bg-borderColor flex  rounded-lg text-slate-500 text-sm w-full py-2 px-5 justify-center items-center'><span>View Template</span><BsArrowRightShort/> </button>
                    </div>
                  </div>
                </div>
              {/* end of latest work */}

              {/* divider */}
              <div className='w-full h-[1px] bg-borderColor my-7'></div>
              {/* let's connect */}
              <div className='text-center h-fit w-full border border-borderColor rounded-lg py-8 px-6 lg:px-28'>
                <p className='font-bold'>Say Hello, 👋</p>
                <h1 className='font-bold text-md mt-2 lg:text-4xl'>Let's Connect!</h1>
                <p className='text-textColorfont-semibold mt-4'>Let's create something unique together! <br></br>Here's how you can reach out to me!</p>
                <div className='flex gap-3 mt-3 justify-center'>
                    <button className='bg-borderColor flex  rounded-lg text-slate-500 text-sm w-fit gap-1 px-5 justify-center py-2 items-center'><BsTwitterX/> <span>Twitter</span> </button>
                    <button className='bg-borderColor flex  rounded-lg text-slate-500 text-sm w-fit gap-1 px-5 justify-center py-2 items-center'><BsLinkedin/> <span>LinkedIn</span> </button>
                </div>
              </div>
              {/* end of lets connect */}
              
              {/* divider */}
              <div className='w-full h-[1px] bg-borderColor my-7'></div>
              <div className='flex justify-center items-center flex-col lg:flex-row lg:justify-between'>
                <p className='text-sm'>© 2024 Ruslan :: Web and Android Dev</p>
                <p className='text-sm'>Made with ❤️ by Ruslan Wahyudi</p>
              </div>
              <div className='h-[100px]'></div>
        </div>
        
    </>
  )
}

export default Homepage