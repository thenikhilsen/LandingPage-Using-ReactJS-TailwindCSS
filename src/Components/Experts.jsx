import React from 'react'
import laptop from '../assets/laptop.jpg';

const Experts = () => {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-3'>
      <div className='col-span-1 md:w-[80%] text-center'>
        <img src={laptop} alt=''/>
      </div>
      <div className='col-span-2 flex flex-col justify-center'>
        <h1 className='text-[#00df9a] font-bold mt-2'>LEARN FROM EXPERTS</h1>
        <p className='mt-2 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <button className='w-[30%] bg-black text-white p-3 rounded'>Get Started</button>
      </div>
    </div>
  )
}

export default Experts
