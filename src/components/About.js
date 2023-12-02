import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion' 
import { fadeIn } from '../variants';
import Img1 from '../assets/Group 2373.svg'


const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center '>
          {/* img */}
          <motion.div variants={fadeIn('right, 0.3')} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className='flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'><img src={Img1} /></motion.div>
          {/* text */}
          <motion.div variants={fadeIn('left, 0.5')} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}  className='flex-1'>
            <h2 className='h2 text-accent'>
              About me
            </h2>
            <h3 className='h3 mb-4'>
              Saya <span className='font-bold'>AHMAD AMIRUDDIN</span> dari kelas XI RPL 4 sekian
            </h3>
            <p className='mb-6'>
              Yang memberikan saya motivasi untuk belajar coding itu adalah <span className='font-bold'>PAK RAHMAT DANI</span> walaupun dia malas tapi berkat dia saya jadi rajin dan dia banyak memotivasi saya untuk belajar coding walaupun kata kalian <span className='font-bold'>PAK RAHMAT DANI</span> itu pemalas tapi dimata saya dia itu memang pemalas tapi dia yang terus membimbing saya kalau ketemu EROR dapat di garis bawahi bahwa mindset orang itu berbeda-beda
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    InView ?
                    <CountUp start={0} end={0} duration={3}/> :
                     null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                    Years of <br/>
                    Exprience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    InView ?
                    <CountUp start={0} end={4} duration={3}/> :
                     null}
                     
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                    Project <br/>
                    Complate
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    InView ?
                    <CountUp start={0} end={0} duration={3}/> :
                     null}
                     
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                    Satisfied <br/>
                    Clients
                </div>
              </div>
              
            </div>
            <div className='flex gap-x-8 items-center'>
                <button className='btn btn-lg'>Contact me</button>
                <a href='#' className='text-gradient btn-link'>
                  My Portofolio
                </a>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;
