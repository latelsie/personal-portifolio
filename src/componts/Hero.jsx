import profilePic from '../assets/elsietona.webp'
import {HERO_CONTENT} from '../constants'
import { motion } from 'framer-motion'
const Hero =()=>{
    return(

    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:p-8">
                <img src={profilePic} alt='Tona Elsie' className='border border-stone-900 rounded-3xl'/>
            </div>
        </div>

        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start mt-10'>
                <h2 className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Tona Elsie</h2>
                <span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>
                    Front-end Developer
                </span>
                <p className='my-2 max-w-lg  py-6 text-lg leading-relaxed tracking-tighter'>
                    {HERO_CONTENT}
                </p>
                <a href='https://drive.google.com/file/d/1NoZQrcvhg5pjZItvqejV-aw7WEq12uko/view?usp=sharing'
                target='_blank' rel='noopener noreferrer' download className='bg-white rounded-full p-4 text-sm text-slate-600 mb-10'>
                            Download Resume
                </a>
            </div>
        </div>
        </div>
    </div>
    )
}
export default Hero