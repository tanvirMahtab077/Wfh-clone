import React from 'react';
import './Contact.css';

import { FaMapMarkerAlt, FaPhoneAlt, FaLink, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact">

            <div className="hero Banner ">
                <div className="hero-content flex-col lg:flex-row-reverse px-10">
                    <div className=' text-white mt-10 lg:mt-0 lg:mr-32 py-20 lg:py-36 '>

                        <h1 className=" lg:text-3xl text-center lg:font-bold  text-white">
                            Contact Us
                        </h1>

                        <div className='flex justify-center mt-3'>
                            <ol className='flex contact-a'>
                                <li>
                                    <a href="">Home</a><span>&nbsp;</span> /
                                    <p></p>
                                </li>

                                <p></p>
                                <li>
                                    <span> &nbsp;</span> <a href="">   Contact Us</a>
                                </li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>

            {/* banner end  */}


            <div className='px-8 mt-10 flex input-box'>


                <div className='box-width'>
                    <div className='grid grid-cols-3 gap-8'>

                        <input type="text" placeholder='Your Name*' className='border ' />


                        <input type="text" placeholder='Your Email*' className='border ' />
                        <input type="text" placeholder='Your Subject' className='border ' />


                    </div>

                    <textarea placeholder='Your Message' name="" id="" cols="30" rows="8" className='border w-full mt-8'></textarea>


                    <div className='my-btn'>
                        <button className="rounded-btn">SEND MESSAGE</button>
                    </div>


                </div>

                <div className='ml-10'>
                    <h1 className='main-text mb-20'>Main Office</h1>

                    <div className='text-color'>
                        <p className='flex mt-2'> <span className='m-1'> <FaMapMarkerAlt /> </span> House 33 Munsibari road, jigatola 1209</p>
                        <p className='flex mt-2'> <span className='m-1'><FaPhoneAlt /></span> +8801794013834</p>

                        <p className='flex mt-2'> <span className='m-1'><FaEnvelope /></span> info@wfhbd.org</p>
                        <p className='mt-2 flex'> <span className='m-1'><FaLink /></span> www.wfhbd.org</p>


                    </div>
                </div>

            </div>

            {/*  input box end  */}


            <div className='map mx-8'>

                <iframe style={{ width: "100%", height: "450px" }} scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=600&amp;height=450&amp;hl=en&amp;q=WFH%20Foundation,%2033%20Munshi%20Bari%20Rd,%20Dhaka%201209%20+(WFH%20Foundation,%2033%20Munshi%20Bari%20Rd,%20Dhaka%201209)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>


                {/* https://maps-generator.com/ */}

            </div>


        </div >





    );
};

export default Contact;