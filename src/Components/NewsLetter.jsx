import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full bg-[#2699fb] p-4'>
      <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
      <div className='m-2'>
        <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn Latest IT Skills</h1>
        <span className='text-white'>Sign up to our Newsletter and stay up to date.</span>
      </div>
      <div className='m-2'>
        <input type='text' className='sm:w-full rounded mb-2 p-3 mr-2 text-slate-600' placeholder='Email'/>
        <button className='bg-black text-white p-3 rounded'>Get Started</button>
        <br/>
        <p className='text-white'>
            We care about the protection of your data. Read our <br/> <a href='' className='text-black'>Privacy Policy</a>
        </p>
      </div>
      </div>
    </div>
  )
}

export default NewsLetter
