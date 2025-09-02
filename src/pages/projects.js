import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/icons';
import { motion } from 'framer-motion';
import wanderlustImg from '../../public/images/projects/wanderlust-cover.png';
import portfolioImg from '../../public/images/projects/portfolio-cover-image.png';

import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedProject = ({
	title,
	type,
	description,
	image,
	link,
	githubLink,
	summary,
}) => {
	return (
		<article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark p-12 dark:border-light bg-light dark:bg-dark relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
			<div className='absolute top-0 left-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem] ' />
			<Link
				href={link}
				target={'_blank'}
				className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
			>
				<FramerImage
					src={image}
					alt={title}
					className='w-full h-auto'
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
					priority
					sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw'
				/>
			</Link>

			<div className='w-1/2 flex flex-col items-start justify-between pl-6  lg:w-full lg:pl-0 lg:pt-6 '>
				<span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base '>
					{type}
				</span>
				<Link href={link} target={'_blank'}>
					<h2 className='my-2 w-full text-left text-4xl font-bold hover:underline underline-offset-2 text-dark dark:text-light sm:text-sm'>
						{title}
					</h2>
				</Link>
				<p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
					{description}
				</p>
				<div className='mt-2 flex items-center '>
					{githubLink ? (
						<Link href={githubLink} target={'_blank'} className='w-10 '>
							<GithubIcon />
						</Link>
					) : (
						''
					)}
					{link ? (
						<Link
							href={link}
							target={'_blank'}
							className='ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'
						>
							Visit Project
						</Link>
					) : (
						''
					)}
				</div>
			</div>
		</article>
	);
};

const Project = ({ title, type, image, link, githubLink }) => {
	return (
		<article className='w-full flex flex-col items-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative xs:p-4  '>
			<div className='absolute top-0 left-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] ' />
			<Link
				href={link}
				target={'_blank'}
				className='w-full cursor-pointer overflow-hidden rounded-lg  '
			>
				<Image
					src={image}
					alt={title}
					className='w-full h-auto'
					sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw'
				/>
			</Link>

			<div className='w-full flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 '>
				<span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base mt-2'>
					{type}
				</span>
				<Link
					href={link}
					target={'_blank'}
					className='hover:underline underline-offset-2'
				>
					<h2 className='my-2 w-full text-left text-3xl font-bold  text-dark dark:text-light lg:text-2xl sm:text-xl '>
						{title}
					</h2>
				</Link>
				<div className='w-full mt-2 flex items-center justify-between'>
					{link ? (
						<Link
							href={link}
							target={'_blank'}
							className='text-dark dark:text-light text-lg font-semibold hover:underline md:text-base '
						>
							Visit
						</Link>
					) : (
						''
					)}
					{githubLink ? (
						<Link href={githubLink} target={'_blank'} className='w-8 md:w-6 '>
							<GithubIcon />
						</Link>
					) : (
						''
					)}
				</div>
			</div>
		</article>
	);
};

const projects = () => {
	return (
  <>
    <Head>
      <title>Manas Kumar | Projects Page</title>
      <meta name='description' content="Manas Kumar's Project Work" />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light sm:pr-2'>
      <Layout className='pt-16'>
        <AnimatedText
          text='Building Ideas into Reality!'
          className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
        />

        <div className='grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>

          {/* Featured Project: Wanderlust */}
          <div className='col-span-12'>
            <FeaturedProject
              title='Wanderlust - Travel Listing Web App'
              type='Featured Project'
              description='A responsive, full-stack travel rental platform built with React.js, Node.js, Express, and MongoDB. Features include property CRUD, booking management, authentication (JWT), and interactive maps. Deployed on Render with positive user feedback.'
              link='https://github.com/manas12482/Wanderlust.git'
              githubLink='https://github.com/manas12482/Wanderlust.git'
              image={wanderlustImg} // replace with actual project image import
            />
          </div>

          {/* Portfolio Website */}
          <div className='col-span-6 sm:col-span-12'>
            <Project
              title='Personal Portfolio Website'
              type='Web Project'
              description='A modern, animated personal portfolio built with Next.js, React, and Framer Motion. Features smooth page transitions, responsive design, and a unique UI with dark mode support.'
              link='https://manas-portfolio.vercel.app/' // replace with actual live link
              githubLink='https://github.com/manas12482/portfolio-nextjs' // replace with your repo link
              image={portfolioImg} // replace with actual portfolio screenshot
            />
          </div>

          {/* Extra project slot (optional future projects) */}
          {/* <div className='col-span-6 sm:col-span-12'>
            <Project
              title='Another Project'
              type='Web Project'
              description='Description of another project.'
              link='#'
              githubLink='#'
              image={placeholderImg}
            />
          </div> */}
        </div>
      </Layout>
    </main>
  </>
);

};

export default projects;
