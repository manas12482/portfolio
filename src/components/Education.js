import React from 'react';
import { useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ type,time,place,info,certificate }) => {
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
					{type}&nbsp;
					{certificate ? (
						<a
							href={certificate.link}
							target={'_blank'}
							className='capitalize text-primary'
						>
							@{certificate.text}
						</a>
					) : (
						' '
					)}
				</h3>
				<span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
					{time} | {place}
				</span>
				<p className='font-medium w-full '>{info}</p>
			</motion.div>
		</li>
	);
};

const Education = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'center start'],
	});
	return (
		<div className='my-32'>
			<h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
				Education
			</h2>
			<div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full '>
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'
				/>

				<ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
					<Details
						type='Intermediate'
						time='2022'
						place='NLKVMIC Kanpur, Uttar Pradesh'
						info={`Subjects: Physics, Chemistry, Mathematics, Hindi, Computer Science. Percentage: 89.6% Board: UP Board`}
						// certificate={{link:'/',text:'See Here'}}
					/>

					<Details
						type='Bachelor of Technology, Computer Science'
						time='2023 - Present'
						place='Indian Institute of Information Technology, Manipur'
						info='Relevant courses including Data Structures and Algorithms, Computer Systems Engineering, Artificial Intelligence, Natural Language Processing, Computer Communications etc.'
					/>
					<Details
						type='Online CourseWorks'
						time='2022-Present'
						place='Udemy Coursera and other platforms'
						info={`Harvard's CS50x, Full-Stack Web Development, Object-Oriented Programming (OOP) with Java, Algorithms and Data Structures`}
						// certificate={{link:'/',text:'See Here'}}
					/>
				</ul>
			</div>
			<div className='w-full h-[10vh]' />
		</div>
	);
};

export default Education;
