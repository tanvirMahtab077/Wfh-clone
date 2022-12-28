import React from 'react';
import { CountUp } from 'use-count-up';
import { VscSmiley } from 'react-icons/vsc'
import { GiProgression } from 'react-icons/gi'

const SideStat = ({ statHead, statTitle, statDescription }) => {
    return (
        <div>
            <div className='mb-20 flex items-center justify-between'>
                <div>
                    <div className='flex items-center mb-5'>
                        <span className='border border-t-0 border-r-0 border-b-0 border-[#0097FA] py-6  bg-[#0097FA] mr-3'></span>
                        <div>
                            <h1 className='text-[#0097FA] text-lg font-semibold'>{statHead}</h1>
                            <h1 className='font-bold text-3xl font-sans'>{statTitle}</h1>
                        </div>
                    </div>
                    <p className='text-sm text-zinc-400 w-[680px]'>{statDescription}</p>
                </div>
                <div className='mr-28'>
                    <div className='text-[#fec501] font-semibold text-2xl flex items-center mb-10'>
                        <VscSmiley className='w-14 h-14' />
                        <span className='border border-t-0 border-r-0 border-b-0 border-black py-7 mx-3  bg-black opacity-10'></span>
                        <div>
                            <CountUp isCounting end={45000} duration={3.2} />
                            <h4 className='text-base text-black font-bold'>Beneficiary</h4>
                        </div>
                    </div>
                    <div className='text-[#8bca4e] font-semibold text-2xl flex items-center'>
                        <GiProgression className='w-14 h-14' />
                        <span className='border border-t-0 border-r-0 border-b-0 border-black py-7 mx-3  bg-black opacity-10'></span>
                        <div>
                            <CountUp isCounting end={14} duration={3.2} />
                            <h4 className='text-base text-black font-bold'>Project</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideStat;