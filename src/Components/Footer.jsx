import React from 'react'



const Footer = () => {
  return (
    <div className='bg-[#2699fb] w-full py-10'>
    <div className='max-w-[1240px] mx-auto md:grid grid-cols-5 gap-5 p-2'>
        <div className='col-span-2'>
        <h1 className='text-3xl font-bold'>Nik.</h1>
        <p className='text-white p-1 md:w-[400px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className='col-span-1'>
            <div className='py-2 font-bold'>Solutions</div>
            <div className='py-2 text-white text-[15px]'>Analytics</div>
            <div className='py-2 text-white text-[15px]'>Marketing</div>
            <div className='py-2 text-white text-[15px]'>Commerce</div>
            <div className='py-2 text-white text-[15px]'>Insights</div>
        </div>
        <div className='col-span-1'>
            <div className='py-2 font-bold'>Support</div>
            <div className='py-2 text-white text-[15px]'>Pricing</div>
            <div className='py-2 text-white text-[15px]'>Documentation</div>
            <div className='py-2 text-white text-[15px]'>Guides</div>
            <div className='py-2 text-white text-[15px]'>API Status</div>
        </div>
        <div className='col-span-1'>
            <div className='py-2 font-bold'>Company</div>
            <div className='py-2 text-white text-[15px]'>About</div>
            <div className='py-2 text-white text-[15px]'>Blog</div>
            <div className='py-2 text-white text-[15px]'>Jobs</div>
            <div className='py-2 text-white text-[15px]'>Press</div>
            <div className='py-2 text-white text-[15px]'>Careers</div>
        </div>
    </div>
      
    </div>
  )
}

export default Footer
