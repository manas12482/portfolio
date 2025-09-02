import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import profilePic from '../../public/images/profile/developer-pic-2.png';
import Image from 'next/image';
import { useMotionValue, useSpring, useInView } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
	const ref = React.useRef(null);
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, {
		duration: 3000,
	});
	const isInViewport = useInView(ref, { once: true });

	React.useEffect(() => {
		if (isInViewport) {
			motionValue.set(value);
		}
	}, [isInViewport, value, motionValue]);

	React.useEffect(() => {
		springValue.on('change', (latestValue) => {
			if (ref.current && latestValue.toFixed(0) <= value) {
				ref.current.innerHTML = latestValue.toFixed(0);
			}
		});
	}, [springValue, value]);

	return <span ref={ref}></span>;
};

const about = () => {
	return (
  <>
    <Head>
      <title>Manas Kumar | About Page</title>
      <meta name='description' content='About page for Manas Kumar, Full Stack Engineer' />
    </Head>
    <TransitionEffect />
    <main className='flex w-full flex-col items-center justify-center dark:text-light sm:pr-2 '>
      <Layout className='pt-16'>
        <AnimatedText
          text='Passion Fuels Purpose!'
          className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
        />
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
          {/* About Text */}
          <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 md:text-center'>
              Crafting Digital Excellence: Manas&apos;s Developer Journey
            </h2>
            <p className='font-medium my-4'>
              - Hi, I&apos;m <span className="font-semibold">Manas Kumar</span>, a passionate Full Stack Engineer with strong problem-solving skills and a drive to build impactful digital solutions. 
            </p>
            <p className='font-medium my-4'>
              - I have hands-on experience in developing and deploying full-stack applications, contributing to open-source projects, and collaborating in cross-functional teams. My expertise spans the MERN stack, databases, RESTful APIs, and UI/UX principles.
            </p>
            <p className='font-medium my-4'>
              - During my journey at IIIT Manipur, I organized technical fests, delivered academic presentations, and built projects like <span className="font-semibold">Wanderlust</span> (a travel listing web app) and <span className="font-semibold">Rescore</span> (a resume checker app). 
            </p>
            <p className='font-medium my-4'>
              - I believe software development is not just about writing code — it&apos;s about solving real-world problems, designing intuitive user experiences, and continuously learning to adapt in a fast-evolving tech landscape.
            </p>
          </div>

          {/* Profile Image */}
          <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark/75 dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
            <div className='absolute left-0 top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-tl-2xl rounded-[2rem] bg-dark dark:bg-light sm:rounded-2xl rounded-br-[1rem]' />
            <Image
              src={profilePic}
              alt='Manas Kumar'
              className='w-full h-auto'
              priority
              sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw'
            />
          </div>

          {/* Stats Section */}
          <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center order-3'>
            <div className='flex flex-col items-end justify-center xl:items-center'>
              <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={10} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                Open Source Contributions
              </h2>
            </div>
            <div className='flex flex-col items-end justify-center xl:items-center'>
              <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={15} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                Projects Completed
              </h2>
            </div>
            <div className='flex flex-col items-end justify-center xl:items-center'>
              <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={2} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                Internships & Industry Experience
              </h2>
            </div>
          </div>
        </div>

        {/* Sections */}
        <Skills />
        <Experience />
        <Education />
      </Layout>
    </main>
  </>
);

};

export default about;
