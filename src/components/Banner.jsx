import React from 'react'
import image from '../assets/avatar.svg'
import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../Varient'



const Banner = () => {
  return (
    <section className="section min-h-[85vh] lg:min-h-[78vh] flex items-center" id='home'>
      <div className="container mx-auto sm:mt-[2rem]">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className="text flex-1 text-center font-secondary lg:text-left">
            <motion.h1 variants={fadeIn('up', .5)} initial = 'hidden' whileInView={'show'} viewport ={{once: false, amount: 0.7}} className='text-[55px] font-bold leading-[.8] lg:text-[110px]'>
              SABBIR <span>HOSSAIN</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', .5)} initial = 'hidden' whileInView={'show'} viewport ={{once: false, amount: 0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a </span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'YouTuber',
                2000,
              ]}
                speed ={50}
                className = 'text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <div>
              <motion.p variants={fadeIn('up', .5)} initial = 'hidden' whileInView={'show'} viewport ={{once: false, amount: 0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet autem facilis eos ipsum facere.
              </motion.p>
            </div>
            
            <motion.div variants={fadeIn('up', .5)} initial = 'hidden' whileInView={'show'} viewport ={{once: false, amount: 0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 '>
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>

            <motion.div variants={fadeIn('up', .4)} initial = 'hidden' whileInView={'show'} viewport ={{once: false, amount: 0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </motion.div>

          </div>
          <motion.div variants={fadeIn('down', .5)} initial = 'hidden' whileInView={'show'}  className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={image} alt="" />
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default Banner
  