import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profileImage from '../../public/images/profile/developer-pic-1.png';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/icons';
import HireMe from '@/components/HireMe';
import TempAlert from '@/components/TempAlert';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
	return (
  <>
    <Head>
      <title>Manas Kumar</title>
      <meta name='description' content='Portfolio of Manas Kumar - Full Stack Engineer' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <TransitionEffect />
    <main className='flex items-center sm:items-start sm:pt-[5vh] text-dark w-full min-h-screen dark:text-light '>
      <Layout className='pt-0 md:pt-16 sm:pt-8'>
        <div className='flex items-center justify-between w-full lg:flex-col'>
          {/* Profile Image */}
          <div className='w-1/2 md:w-full'>
            <Image
              src={profileImage}
              alt='Manas Kumar'
              className='w-full h-auto lg:hidden md:inline-block md:w-full'
              priority
              sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw'
            />
          </div>

          {/* Intro Text */}
          <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
            <AnimatedText
              className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl xs:!text-2xl'
              text='Transforming Ideas into Innovative Web Applications'
            />
            <p className='my-4 text-lg font-medium md:text-sm sm:text-xs'>
              Hi, I&apos;m <span className='font-semibold'>Manas Kumar</span>, a Full Stack Engineer 
              passionate about building impactful digital solutions. Skilled in the MERN stack, 
              databases, RESTful APIs, and UI/UX design. Explore my projects like 
              <span className='font-semibold'> Wanderlust</span> and my 
              <span className='font-semibold'> Portfolio Website</span>, where I apply modern 
              frameworks, scalability, and performance optimization.
            </p>

            {/* CTA Buttons */}
            <div className='flex items-center self-start mt-2 lg:self-center'>
              <Link
                href='/cv.pdf'
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light cursor-pointer md:p-2 md:px-4 md:text-base'
                download={true}
              >
                Resume
                <LinkArrow className={'w-6 ml-1'} />
              </Link>

              <Link
                href='mailto:manas98350singh@gmail.com'
                target={'_blank'}
                className='ml-4 flex items-center text-dark p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent hover:border-dark underline dark:text-light md:text-base'
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </Layout>

      <HireMe />

      {/* Light bulb icon */}
      <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
        <Image src={lightBulb} alt='Manas Kumar' className='w-full h-auto' />
      </div>
    </main>
  </>
);

}
