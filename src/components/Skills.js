import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y, className = '' }) => {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer m-2 absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold ${className}`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>
        Skills
      </h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
        <motion.div
          className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer m-2 absolute dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:p-2 xs:text-xs`}
          whileHover={{ scale: 1.05 }}
        >
          Full Stack
        </motion.div>

        {/* Core Skills */}
        <Skill name='JavaScript' x='20vw' y='-6vw' />
        <Skill name='TypeScript' x='-20vw' y='-6vw' />
        <Skill name='Python' x='-12vw' y='-18vw' />
        <Skill name='C++' x='12vw' y='-18vw' />

        {/* Web Technologies */}
        <Skill name='React.js' x='0vw' y='12vw' />
        <Skill name='Node.js' x='18vw' y='10vw' />
        <Skill name='Express.js' x='-18vw' y='10vw' />
        <Skill name='RESTful APIs' x='30vw' y='-2vw' />
        <Skill name='Tailwind CSS' x='-28vw' y='2vw' />
        <Skill name='HTML5 & CSS3' x='0vw' y='25vw' />

        {/* Databases */}
        <Skill name='MongoDB' x='-25vw' y='18vw' />
        <Skill name='MySQL' x='25vw' y='18vw' />
        <Skill name='PostgreSQL' x='-15vw' y='25vw' />
        <Skill name='Firebase' x='15vw' y='25vw' />

        {/* Tools & Platforms */}
        <Skill name='Git & GitHub' x='-30vw' y='-12vw' />
        <Skill name='Render' x='22vw' y='-20vw' />

      </div>
    </>
  );
};

export default Skills;
