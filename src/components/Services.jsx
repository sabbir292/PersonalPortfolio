import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../Varient'

const services = [
  {
    name: 'FUll Stack Developer',
    descprition: 'Assumenda amet vero, inventore itaque corrupti beatae doloribus.',
    link: 'Learn More'

  },
  {
    name: 'Frontend Developer',
    descprition: 'Assumenda amet vero, inventore itaque corrupti beatae doloribus, consequuntur nemo sit ex eaque ratione.',
    link: 'Learn More'

  },
  {
    name: 'UI/UX Design',
    descprition: 'Assumenda amet vero, inventore itaque corrupti beatae doloribus, adipisci.',
    link: 'Learn More'

  },
  {
    name: 'Social Media Manager',
    descprition: 'Assumenda amet vero, itaque corrupti beatae doloribus, adipisci.',
    link: 'Learn More'

  },
]

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text and image*/}
          <motion.div     
          variants={fadeIn('right', 0.3)}
          initial = 'hidden'
          whileInView={'show'}
          viewport = {{once: false, amount: 0.3}} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">I'm a frelance Front-end Developer with over 5 years of experience</h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services*/}
          <motion.div     
          variants={fadeIn('left', 0.4)}
          initial = 'hidden'
          whileInView={'show'}
          viewport = {{once: false, amount: 0.3}}>

            {services.map((item, index) => {
              const { name, descprition, link } = item;
              return (
                <div className='border-b border-white/20 h-[140px] mb-[38px] flex gap-5' key={index}>
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                    <p className='font-secondary leading-tight'>{descprition}</p>
                  </div>

                  <div className='flex flex-col flex-1 items-end'>
                    <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center' href="#">
                      <BsArrowRight />
                    </a>
                    <a className='text-gradient text-sm' href="#">{link}</a>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
