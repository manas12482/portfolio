import React from 'react';
import { useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='font-bold capitalize text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;
          <a
            href={companyLink}
            target={'_blank'}
            rel='noopener noreferrer'
            className='capitalize text-primary dark:text-primaryDark'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className='my-32'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position='Tech Officer (Intern)'
            company='Engify - Education Tech Startup'
            companyLink='https://www.engify.in'
            time='Jul 2023 – Nov 2023'
            address='Remote / Imphal, Manipur'
            work="Led MVP development for an ed-tech platform using React.js, Firebase, and Material UI. Managed end-to-end deployment pipeline and integrated automated testing. Conducted user feedback sessions and optimized performance for accessibility and usability."
          />

          <Details
            position='Software Engineering Intern'
            company='Brainwave Matrix Solutions'
            companyLink='https://brainwavematrix.com' // Replace with actual link if available
            time='May 2025 – Jul 2025'
            address='Remote'
            work="Developed scalable web modules and interactive UI components using React.js and RESTful APIs. Optimized performance, reducing load times by 25%. Participated in agile sprints, implemented features, resolved high-priority production bugs, and collaborated cross-functionally to design secure backend endpoints."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
