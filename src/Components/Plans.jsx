import React from 'react'
import single from '../assets/single.png'

const Plans = () => {
  return (
    <div className='py-[100px]'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
        <div className='flex flex-col relative justify-center items-center shadow-xl h-[500px] my-2 hover:scale-105 duration-500'>
            <img src={single} alt='' className='w-[100px] absolute top-0' />
            <h2 className='py-4 font-bold text-xl'>Digital Marketing</h2>
            <h1 className='py-4 font-bold text-xl'>$149</h1>
            <p className='py-2'>Lorem Ipsum is simply</p>
            <p className='py-2'>Lorem Ipsum is simply dummy text of the printing</p>
            <p className='py-2'>Lorem Ipsum is simply dumm.</p>
            <button className='w-[30%] my-5 bg-black text-white p-3 rounded'>Start Trial</button>
        </div>
        <div className='flex flex-col relative justify-center items-center shadow-xl h-[500px] my-2 hover:scale-105 duration-500  bg-gray-100'>
            <img src={single} alt='' className='w-[100px] absolute top-0' />
            <h2 className='py-4 font-bold text-xl'>Web Development</h2>
            <h1 className='py-4 font-bold text-xl'>$149</h1>
            <p className='py-2'>Lorem Ipsum is simply</p>
            <p className='py-2'>Lorem Ipsum is simply dummy text of the printing</p>
            <p className='py-2'>Lorem Ipsum is simply dumm.</p>
            <button className='w-[30%] my-5 bg-[#00df9a] text-black p-3 rounded'>Start Trial</button>
        </div>
        <div className='flex flex-col relative justify-center items-center shadow-xl h-[500px] my-2 hover:scale-105 duration-500 '>
            <img src={single} alt='' className='w-[100px] absolute top-0' />
            <h2 className='py-4 font-bold text-xl'>App Developer</h2>
            <h1 className='py-4 font-bold text-xl'>$149</h1>
            <p className='py-2'>Lorem Ipsum is simply</p>
            <p className='py-2'>Lorem Ipsum is simply dummy text of the printing</p>
            <p className='py-2'>Lorem Ipsum is simply dumm.</p>
            <button className='w-[30%] my-5 bg-black text-white p-3 rounded'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Plans
