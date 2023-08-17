import React from 'react'
import { CircularText} from './icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden '>
      <div className="w-48 h-auto flex items-center justify-center relative">
         <CircularText className={'fill-dark animate-spin-slow'}/>
         <Link href='mailto:contact@suyashmishra.com' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark p-2 rounded-full w-20 h-20 font-semibold hover:bg-light hover:text-light'>Hire Me</Link>
      </div>
    </div>
  )
}

export default HireMe