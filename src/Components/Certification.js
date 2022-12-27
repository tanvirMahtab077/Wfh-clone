import React from 'react'

const Certification = () => {
  return (
    <div className='flex w-full justify-between lg:flex-row md:flex-row flex-col'>
        <div>
            <div>
                <h2 className='text-sky-500 font-semibold'>These Awards Are Inspire Us To Move Forward</h2>
                <h1 className='lg:text-3xl md:text-2xl font-bold'>Awards & Certifications</h1>
            </div>
            <div>
                <p className='font-light w-2/3'>WFH Foundation’s work has been recognized by several organizations and institutions. We are thankful for their faith and belief in our services by giving us such an honor. It encourages us and instils a sense of belief that we are on the right path whilst reminding us of the great responsibility we carry toward the elderly of our society.</p>
            </div>
        </div>
        <div className=''>
            <div className='flex flex-col font-semibold'>
                <span className='text-amber-500'>7</span>
                <span>Awards</span>
            </div>
            <div className='flex flex-col font-semibold'>
                <span className='text-green-500'>12</span>
                <span>Vertification</span>
            </div>
        </div>
    </div>
  )
}

export default Certification