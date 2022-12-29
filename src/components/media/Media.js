import React from 'react'

const Media = () => {
  return (
    <div className='flex w-full justify-between lg:flex-row md:flex-row flex-col mt-10'>
        <div className='lg:w-10/12 md:w-full'>
            <div>
                <h2 className='text-sky-500 font-semibold'>Gratitude To All Media Who Supported Us</h2>
                <h1 className='lg:text-3xl md:text-2xl font-bold'>Media Coverage</h1>
            </div>
            <div>
                <p className='font-light w-10/12'>WFH Foundation extends its gratitude to all  media who have been a part of its efforts across the Indian states to support us. The media fraternity has given WFH Foundation overwhelming support so far.</p>
            </div>
        </div>
        <div className='mt-10'>
            <div className='flex font-semibold w-full'>
                <img src={process.env.PUBLIC_URL + '/images/awards.jpg'} alt="" className=''/>
                <div className='flex flex-col'>
                    <span className='text-amber-500'>5</span>
                    <span>Electronic Media</span>
                </div>
            </div>
            <div className='flex font-semibold w-full'>
                <div>
                    <img src={process.env.PUBLIC_URL + '/images/vertification.jpg'} alt="" className='' />
                </div>
                <div className='flex flex-col'>
                    <span className='text-green-500'>9</span>
                    <span>Print & Online Media</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Media