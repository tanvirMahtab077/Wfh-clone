import React, { useState } from 'react';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { SwiperSlide } from 'swiper/react';
import HeroBanner from '../../../components/HeroBanner/HeroBanner';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import Slider from '../../../components/Slider/Slider';
import nagad from '../../../Assests/Imgs/nagad.png'
import bkash from '../../../Assests/Imgs/bkash.png'
import rocket from '../../../Assests/Imgs/dbblmobilebank.png'
import paypal from '../../../Assests/Imgs/paypal.png'
import visa from '../../../Assests/Imgs/visa.png'
import mastercard from '../../../Assests/Imgs/MasterCard-logo.png'
import upay from '../../../Assests/Imgs/Upay.png'

const MakeDonation = () => {
    const header = 'Donate Online To Charity'
    const [selected1, setSelected1] = useState(false)
    const [selected2, setSelected2] = useState(false)
    const [selected3, setSelected3] = useState(false)
    const [selected4, setSelected4] = useState(false)
    const [hideSelect, setHideSelect] = useState(false)
    const handleSelect1 = () => {
        setSelected1(true)
        setSelected2(false)
        setSelected3(false)
        setSelected4(false)
        const value = 1000
        console.log(value);
    }
    const handleSelect2 = () => {
        setSelected1(false)
        setSelected2(true)
        setSelected3(false)
        setSelected4(false)
        const value = 2000
        console.log(value);
    }
    const handleSelect3 = () => {
        setSelected1(false)
        setSelected2(false)
        setSelected3(true)
        setSelected4(false)
        const value = 5000
        console.log(value);
    }
    const handleSelect4 = () => {
        setSelected4(true)
        setSelected3(false)
        setSelected2(false)
        setSelected1(false)
    }
    const handleOption = () => {
        setHideSelect(true)
    }
    const handleCustomAmount = (event) => {
        const customAmount = parseInt(event.target.value)
        console.log(customAmount)
    }

    const data = {
        navigation: false,
        pagination: true,
        autoplay: true,
        slidesPerView: 6
    }
    return (
        <div>
            <HeroBanner header={header} />
            <div className='flex flex-col lg:flex-row justify-center my-20 lg:mx-40 mx-5'>
                <div className='mb-14 lg:mb-5 lg:mr-8 lg:mt-8'>
                    <div className='flex items-center mb-5 lg:w-[600px]'>
                        <span className='border border-t-0 border-r-0 border-b-0 border-[#0097FA] py-20 lg:py-12  bg-[#0097FA] mr-3'></span>
                        <div className=''>
                            <h1 className='text-[#0097FA] text-xl mb-2'>No One Has Ever Become Poor By Giving.</h1>
                            <h1 className='font-bold text-3xl font-sans'>Why You Should Donate To WFH Foundation</h1>
                        </div>
                    </div>
                    <p className='text-zinc-400 lg:w-[590px]'>Thank you for your great generosity. To ensure the basic needs of food, education, health and to empower the unemployed, WFH Foundation has several projects to support the social chain and economy. Your gift will fund:</p>
                    <ul className='text-zinc-400 lg:w-[590px]'>
                        <li className='my-2'>
                            1. Educational material to student from rural area.
                        </li>
                        <li className='mb-2'>
                            2. Monthly scholarship to those students who have a good academic result but cannot afford the cost of education.
                        </li>
                        <li className='mb-2'>
                            3. Books for the library.
                        </li>
                        <li className='mb-2'>
                            4. Education of the child-labourer aged from 5 to 15 years.
                        </li>
                        <li className='mb-2'>
                            5. Emergency relief to reduce the loss of natural disaster like flood, fire incident, epidemic situation.
                        </li>
                        <li className='mb-2'>
                            6. To run awareness campaign on child marriage, dowry system, mental health, plastic pollution, menstrual health, blood donation.
                        </li>
                        <li className='mb-2'>
                            7. Training, Counselling, creative activities of ‘Jibon Sundor Club’ to reduce the rate of depression, suicidal tendency, drug addiction, criminal minded tendency etc.
                        </li>
                        <li>
                            8. Empowerment of the unemployed especially the women and third gender; to remove poverty. Thank you for being with WFH Foundation to ensure a better world
                        </li>
                    </ul>
                </div>
                <div className='lg:w-[600px]'>
                    <div className='px-10 py-8 bg-[#0097FA] mt-10 mb-12 w-full relative after:content:"" before:content:"" before:table after:table after:border-[12px] after:border-solid after:border-transparent after:border-t-[#0097FA] after:absolute after:-bottom-6 after:left-1/2 after:-ml-3 after:z-10'>
                        <h1 className='text-2xl lg:text-4xl font-bold text-white text-center'>Make A Donation</h1>
                    </div>
                    <div>
                        <div className='bg-[#0097fa] w-full bg-opacity-[0.15] rounded p-5'>
                            <div className='grid grid-cols-3 lg:grid-cols-4 gap-5'>
                                <span className={selected1 === true ? `bg-[#0097fa] px-5 lg:px-9 py-3 text-white font-sans cursor-pointer border border-[#0097fa]` : `border border-[#0097fa] px-5 lg:px-9 py-3 text-[#0097fa] font-sans cursor-pointer`} onClick={handleSelect1}>৳1000</span>
                                <span className={selected2 === true ? `bg-[#0097fa] px-5 lg:px-9 py-3 text-white font-sans cursor-pointer border border-[#0097fa]` : `border border-[#0097fa] px-5 lg:px-9 py-3 text-[#0097fa] font-sans cursor-pointer`} onClick={handleSelect2}>৳2000</span>
                                <span className={selected3 === true ? `bg-[#0097fa] px-5 lg:px-9 py-3 text-white font-sans cursor-pointer border border-[#0097fa]` : `border border-[#0097fa] px-5 lg:px-9 py-3 text-[#0097fa] font-sans cursor-pointer`} onClick={handleSelect3}>৳5000</span>
                                <span className={selected4 === true ? `bg-[#0097fa] px-5 lg:px-9 py-3 text-white font-sans cursor-pointer border border-[#0097fa]` : `border border-[#0097fa] px-5 lg:px-9 py-3 text-[#0097fa] font-sans cursor-pointer`} onClick={handleSelect4}>Other</span>
                            </div>
                            {selected4 === true ?
                                <div>
                                    <input onKeyUp={handleCustomAmount} type="text" placeholder='Enter Amount Between 0 - 1000' className='border border-[#0097fa] text-zinc-600 font-sans w-full mt-4 p-2 focus:outline-none' />
                                </div> : <></>}
                            <div className='flex items-center flex-col'>
                                <h1 className='text-center font-sans font-bold text-lg my-4'>Select Cause</h1>
                                <select name="cause" id="" className='w-full bg-white p-3 border border-[#0097fa] rounded text-[#0097fa] focus:outline-none mb-4 text-xl font-sans' onChange={handleOption}>
                                    <option value="Select Cause" selected disabled hidden={hideSelect} className="text-center">Select Cause</option>
                                    <option value="Education-Program">Education Program</option>
                                    <option value="Health-Program">Health Program</option>
                                    <option value="Awareness-Program">Awareness Program</option>
                                    <option value="Emergency-Response">Emergency Response</option>
                                    <option value="Social-Empowerment">Social Empowerment</option>
                                </select>
                                <div className='mb-6 lg:mb-3'><PrimaryButton><p className='p-1'>DONATE NOW</p></PrimaryButton></div>
                                <Slider
                                    data={data}
                                >
                                    <SwiperSlide><img src={nagad} className='lg:w-[85px] cursor-pointer bg-[#0097fa] bg-opacity-[0.15]' alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={bkash} className='lg:w-[85px] cursor-pointer bg-[#0097fa] bg-opacity-[0.15]' alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={rocket} className='lg:w-[85px] cursor-pointer bg-[#0097fa] bg-opacity-[0.15]' alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={paypal} className='lg:w-[85px] cursor-pointer bg-[#0097fa] bg-opacity-[0.15]' alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={visa} className='lg:w-[85px] cursor-pointer bg-[#0097fa] bg-opacity-[0.15]' alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={upay} className='lg:w-[85px] cursor-pointer bg-[#0097fa] bg-opacity-[0.15]' alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={mastercard} className='lg:w-[85px] cursor-pointer bg-[#0097fa] bg-opacity-[0.15]' alt="" /></SwiperSlide>
                                </Slider>
                            </div>
                        </div>
                        <div className='flex items-center flex-col'>
                            <p className='text-lg text-center mt-10 mb-3'>When we are alone we can do so little<br />
                                But together we can do so much.</p>
                            <PrimaryButton>Be a Partner<MdOutlineArrowRightAlt className='text-2xl ml-2' /></PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeDonation;