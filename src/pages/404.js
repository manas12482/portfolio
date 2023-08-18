import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Custom404 = () => {
   const CustomLink = ({ href, title, className = '' }) => {
			const router = useRouter();
			// console.log(router)

			return (
				<Link href={href} className={`${className} relative group`}>
					{title}
					<span
						className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
							router.asPath === href ? 'w-full' : 'w-0'
						} `}
					>
						&nbsp;
					</span>
				</Link>
			);
		};
	return (
		<main className='flex w-full h-[80vh] flex-col items-center justify-center dark:text-light sm:pr-2 '>
         <h1>404| Resource Not Found</h1>
         <CustomLink href='/' title='Go Home' className='!mt-4' />
      </main>
	);
};

export default Custom404;
