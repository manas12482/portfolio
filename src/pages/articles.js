import Head from 'next/head';
import React, { use,useRef } from 'react';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import article1 from '../../public/images/projects/portfolio-cover-image.png';
import { motion, useMotionValue } from 'framer-motion';

const FramerImage = motion(Image);

const FeaturedArticle = ({ title, description, link, image, time }) => {
	return (
		<motion.li className='cursor-pointer col-span-1 w-full p-4 bg-light border-solid border border-dark rounded-2xl relative' >
			<div className='absolute top-0 left-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />
			<Link
				href={link}
				target={'_blank'}
				className='w-full inline-block overflow-hidden rounded-lg '
			>
				<FramerImage
					src={image}
					alt={title}
					className='w-full h-auto'
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
				/>
			</Link>
			<Link href={link} target={'_blank'}>
				<h2 className='capitalize text-2xl font-bold my-2 hover:underline underline-offset-2 mt-4'>
					{title}
				</h2>
			</Link>
			<p className='text-sm mb-2'>{description}</p>
			<span className='text-primary font-semibold'>{time} read</span>
		</motion.li>
	);
};

const MovingImg = ({ title, image, link }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = React.useRef(null)
  const handleMouseMove = (e) => {
    imgRef.current.style.display = 'inline-block';
    x.set(e.pageX);
    y.set(-10);
  }
  const handleMouseLeave = () => {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);

  }
  return (
		<Link
			href={link}
			target={'_blank'}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<h2 className='capitalize text-xl font-semibold hover:underline'>
				{title}
			</h2>
			<FramerImage
				src={image}
				alt={title}
				className='z-10 w-96 h-auto hidden absolute rounded-lg'
        ref={imgRef}
        style={{x,y}}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5}}
			/>
		</Link>
	);
};

const Article = ({ title, link, image, date }) => {
	return (
		<motion.li
			className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 cursor-pointer'
			initial={{ y: 200 }}
			whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
			viewport={{ once: true }}
		>
			<MovingImg title={title} image={image} link={link} />
			<span className='text-primary font-semibold pl-4'>{date}</span>
		</motion.li>
	);
};

const articles = () => {
	return (
		<>
			<Head>
				<title>Suyash Mishra | Articles</title>
				<meta name='description' content="Suyash Mishra's articles" />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<main className='w-full bm-16 flex flex-col items-center justify-center overflow-hidden'>
				<Layout className='pt-16'>
					<AnimatedText text='Words Can Change The World!' className='mb-16 ' />
					<ul className='grid grid-cols-2 gap-16'>
						<FeaturedArticle
							title='Build A Custom Pagination Component In Reactjs From Scratch'
							description='Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
							link='https://medium.com/geekculture/build-a-custom-pagination-component-in-reactjs-from-scratch-6b3b1c2c1f3b'
							image={article1}
							time='9 Min'
						/>
						<FeaturedArticle
							title='Build A Custom Pagination Component In Reactjs From Scratch'
							description='Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
							link='https://medium.com/geekculture/build-a-custom-pagination-component-in-reactjs-from-scratch-6b3b1c2c1f3b'
							image={article1}
							time='9 Min'
						/>
					</ul>
					<h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>
						All Articles
					</h2>
					<ul>
						<Article
							title='Build A Custom Pagination Component In ReactJS From Scratch'
							link='https://medium.com/geekculture/build-a-custom-pagination-component-in-reactjs-from-scratch-6b3b1c2c1f3b'
							image={article1}
							date='16 Aug, 2023'
						/>
						<Article
							title='Build A Custom Pagination Component In ReactJS From Scratch'
							link='https://medium.com/geekculture/build-a-custom-pagination-component-in-reactjs-from-scratch-6b3b1c2c1f3b'
							image={article1}
							date='16 Aug, 2023'
						/>
						<Article
							title='Build A Custom Pagination Component In ReactJS From Scratch'
							link='https://medium.com/geekculture/build-a-custom-pagination-component-in-reactjs-from-scratch-6b3b1c2c1f3b'
							image={article1}
							date='16 Aug, 2023'
						/>
					</ul>
				</Layout>
			</main>
		</>
	);
};

export default articles;
