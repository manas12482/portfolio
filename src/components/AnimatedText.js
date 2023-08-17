import React from 'react';
import { motion } from 'framer-motion';  

const qouteVariants = {
   initial:{
      opacity:0.6,
   },
   animate:{
      opacity:1,
      transition:{
         delay:0.5,
         staggerChildren:0.1,
      }
   }
}

const singleWordVariants = {
   initial:{
      opacity:0,
      y:50,
   },
   animate:{
      opacity:1,
      y:0,
      transition:{
         duration:1,
      }
   }
}

const AnimatedText = ({ text, className = '' }) => {
	return (
		<div
			className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden ${className}`}
		>
			<motion.h1
				className={`w-full inline-block text-dark font-bold capitalize text-8xl  ${className}`}
            variants={qouteVariants}
            initial='initial'
            animate='animate'
			>
				{text.split(' ').map((word, index) => {
					return (
						<motion.span
							key={word + '-' + index}
							className='inline-block'
							variants={singleWordVariants}
						>
							{word}&nbsp;
						</motion.span>
					);
				})}
			</motion.h1>
		</div>
	);
};

export default AnimatedText;
