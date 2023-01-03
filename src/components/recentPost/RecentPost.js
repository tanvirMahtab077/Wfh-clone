import React from 'react'

const RecentPost = () => {
  return (
    <div className='w-full lg:w-4/5 md:w-full m-auto'>
      <h4 className="mt-6 font-semibold text-xl text-primary">
        Recent Posts
      </h4>
      <div className="border-b-2 mb-4 mt-2 w-24 border-[#0097FA]"></div>
      <div className='mt-4'>
        <p>ভালোবাসা দিবসে পথশিশুদের পাশে ওয়ার্কস ফর হিউমিনিটি ফাউন্ডেশন</p>
        <span className='font-light text-xs'>March 1, 2022</span>
      </div>
      <div className='mt-4'>
        <p>Donate Love, Spread Happiness 2022</p>
        <span className='font-light text-xs'>January 31, 2022</span>
      </div>
    </div>
  )
}

export default RecentPost