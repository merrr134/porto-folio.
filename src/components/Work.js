import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
// img
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <motion.div variants={fadeIn('left, 0.5')} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}>
              <h2 className='h2 leading-tight text-accent'>
                My Project
              </h2>
              <p className='max-w-sm mb-16 '>
                Ini adalah project yang pernah saya buat <br/>
                Ada tampilan web SMK TELKOM MAKASSAR <br/>
                web PRISAI SMK TELKOM MAKASSAR <br/>
                web Kelas
              </p>
              <button className='btn btn-sm '>View All Project</button>
            </motion.div>
            
            <a href='#'>
              {/* img */}
              <motion.div  variants={fadeIn('left, 0.8')} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className='group relative overflow-hidden border-2 border-white/50 rounded-xl top-4'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img src={Img2} alt='' className='group-hover:scale-125 transition-all duration-500'/>
                {/* text */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Front-end web</span></div>
                {/* nama project */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-4 lg:group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>SMK TELKOM MAKASSAR</span>
                </div>
              </motion.div>
            </a>
          </div>
          <div className='flex-1 flex-col gap-y-10'>
            <a href='#'>
              {/* img */}
              <motion.div variants={fadeIn('left, 0.5')} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className='group relative overflow-hidden border-2 border-white/50 rounded-xl mb-10 lg:mb-12'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img src={Img3} alt='' className='group-hover:scale-125 transition-all duration-500'/>
                {/* text */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Front-end web</span></div>
                {/* nama project */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-4 lg:group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>PRISAI TELKOM MAKASSAR</span>
                </div>
              </motion.div>
            </a>
            <a href='https://xirpl4-ujfj.vercel.app/'>
              {/* img */}
              <motion.div variants={fadeIn('left, 0.5')} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img src={Img1} alt='' className='group-hover:scale-125 transition-all duration-500'/>
                {/* text */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Web</span></div>
                {/* nama project */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-4 lg:group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>WEB KELAS XI RPL 4</span>
                </div>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Work;
