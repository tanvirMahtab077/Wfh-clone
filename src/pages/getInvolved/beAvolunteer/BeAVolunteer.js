import React from 'react';
import HeroBanner from '../../../components/HeroBanner/HeroBanner';
import volunteer from '../../../Assests/Imgs/Voluteer-Opportunities-in-Bangladesh.jpg'
import { useForm } from 'react-hook-form';

const BeAVolunteer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const header = 'Volunteer Opportunities In Bangladesh'
    return (
        <div>
            <HeroBanner header={header} />
            <div className='flex flex-col lg:flex-row justify-center my-20 lg:mb-40 lg:mx-40 mx-5'>
                <div className='mb-14 lg:mb-5 lg:mr-8 lg:mt-8'>
                    <div className='flex items-center mb-5 lg:w-[600px]'>
                        <span className='ring-1 ring-t-0 border-r-0 border-b-0 border-[#0097FA] py-12 lg:py-8  bg-[#0097FA] mr-3'></span>
                        <div className=''>
                            <h1 className='text-[#0097FA] text-xl mb-2'>Help Us To Spread Happiness Over The World</h1>
                            <h1 className='font-bold text-2xl lg:text-3xl font-sans'>Volunteer Opportunities</h1>
                        </div>
                    </div>
                    <p className='text-zinc-400 lg:w-[590px] font-sans'>WFH Foundation, a socio-economic development  non-profit  organization in Bangladesh, is working to ensure the basic needs of food, health, education, employment, human rights, awareness, and so on all over the world. Being a youth-led organization, WFH Foundation is full of volunteer opportunities in Bangladesh which provides leadership development with an exceptional opportunity to gather hands on experience to work for the society. To grab this opportunity, fill up the Volunteer Registration Form and be a change-maker in your country.</p>
                    <img src={volunteer} alt="" className='w-[650px] my-5' />
                    <p className='text-zinc-400 lg:w-[590px] font-sans'>Through this volunteering program, WFH Foundation is offering volunteer opportunities and implementing various projects in different districts and people of any age can join this volunteering program and make an important contribution to our future world and civilization.</p>
                    <h1 className='font-bold text-2xl font-sans my-4'>Responsibility to be a Volunteer</h1>
                    <ul className='text-zinc-400 lg:w-[570px] text-sm font-sans list-disc list-inside ml-8'>
                        <li>
                            The willingness to work voluntarily in a patriotic mind is needed.
                        </li>
                        <li>
                            Offline volunteers should be present in the project area in his/her selected working day.
                        </li>
                        <li>
                            Plan and ensure timely implementation of the project activity and produce a structured work plan.
                        </li>
                        <li>
                            Should have complete the assigned work in time.
                        </li>
                        <li>
                            Must be present in meetings (Online/Offline).
                        </li>
                        <li>
                            Engage targeted communities in discussion for raising awareness.
                        </li>
                        <li>
                            Maintain close communication and co-ordination with different community members, including the community leaders.
                        </li>
                        <li>
                            The scheduled work has to be completed on time.
                        </li>
                        <li>
                            Organizing campaigns, seminars, and carrying out the project do’s.
                        </li>
                        <li>
                            No alcohol or abusing in public place.
                        </li>
                        <li>
                            Photographer, Videographer, Video Editor, Graphics Designer, and all the Creative Volunteers should have their own device and accessories.
                        </li>
                        <li>
                            Monitoring the field level activities and writing reports.
                        </li>
                        <li>
                            Carry out the field-level implementation of the project by the detailed approved budget and planned activities.
                        </li>
                        <li>
                            Should have a polite, gentle way of approaching others, especially when comes to direct communication with the beneficiaries of rural areas.
                        </li>
                        <li>
                            Developing policy, sustainability plan, youth engagement plan.
                        </li>
                        <li>
                            Should have creativity in writing content (Applicable for Content Writer).
                        </li>
                        <li>
                            Assist in data collection, collation, and maintaining beneficiary records. Compile short stories, case studies, and reflections from targeted beneficiaries throughout the entire project cycle.
                        </li>
                        <li>
                            To execute, direct, monitor, and follow up the technical, organizational, and training activities to ensure the achievement of the project targets.
                        </li>
                    </ul>
                    <h1 className='font-bold text-xl font-sans mt-6 mb-4'>Benefits of A Volunteer</h1>
                    <ul className='text-zinc-400 lg:w-[570px] text-sm font-sans list-disc list-inside ml-8'>
                        <li>
                            T-shirt, ID Card, and Volunteer recognition & participation certificate for each volunteer (conditions apply).
                        </li>
                        <li>
                            Opportunity to represent WFH in national and international conferences & seminars.
                        </li>
                        <li>
                            Volunteering is a practice to serve a nation. Therefore, volunteers will get the chance to improve their communication and social networking skill.
                        </li>
                        <li>
                            There will be recognition for the active volunteers.
                        </li>
                        <li>
                            Volunteer from the creative team will have more scope for job opportunities.
                        </li>
                        <li>
                            Chances to improve teamwork skills.
                        </li>
                        <li>
                            Two month long training session.
                        </li>
                        <li>
                            Mentorship and career counseling.
                        </li>
                    </ul>
                </div>
                <div className='lg:w-[600px]'>
                    <div className='px-10 py-8 bg-[#0097FA] mt-10 mb-12 w-full relative after:content:"" before:content:"" before:table after:table after:border-[12px] after:border-solid after:border-transparent after:border-t-[#0097FA] after:absolute after:-bottom-6 after:left-1/2 after:-ml-3 after:z-10'>
                        <h1 className='text-2xl lg:text-4xl font-bold text-white text-center'>Volunteer Registration Form</h1>
                    </div>
                    <div>
                        <div className='bg-[#0097fa] w-full bg-opacity-[0.05] rounded-3xl p-5'>
                            <form onSubmit={handleSubmit(onSubmit)} className=''>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label className='cursor-pointer' htmlFor="fullName">Full Name<span className='text-red-700 font-semibold'>*</span></label>
                                    <input className='w-full p-2 ring-1 ring-[#0097fa] focus:outline-none rounded-sm transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none required:ring-red-400'
                                        type="text"
                                        placeholder="E.g. Md. Abu Khalid"
                                        id='fullName'
                                        {...register("fullName", {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            }, maxLength: 30
                                        })} />
                                    <label className="label">
                                        {errors.fullName?.type === 'required' && <span className="label-text-alt text-[#E04562] bg-[#F9E4E8] block px-3 py-2 my-2 text-xs font-normal font-sans">{errors.fullName.message}</span>}
                                    </label>
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label className='cursor-pointer' htmlFor="email">Email Address<span className='text-red-700 font-semibold'>*</span></label>
                                    <input
                                        id='email'
                                        type="email"
                                        placeholder="E.g. khalid@wfhbd.org"
                                        className="p-2 ring-1 ring-[#0097fa] focus:outline-none rounded-sm transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none required:ring-red-400"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'This field is required. Please input a valid email.'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-[#E04562] bg-[#F9E4E8] block px-3 py-2 my-2 text-xs font-normal font-sans">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-[#E04562] bg-[#F9E4E8] block px-3 py-2 my-2 text-xs font-normal font-sans">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label className='cursor-pointer' htmlFor="phoneNumber">Phone Number<span className='text-red-700 font-semibold'>*</span></label>
                                    <input className='w-full p-2 ring-1 ring-[#0097fa] focus:outline-none rounded-sm transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none required:ring-red-400'
                                        type="tel"
                                        placeholder="E.g. 01816656455"
                                        id='phoneNumber'
                                        {...register("phoneNumber", {
                                            required: {
                                                value: true,
                                                message: 'This field is required. Please input a Phone number.'
                                            }, maxLength: 13
                                        })} />
                                    <label className="label">
                                        {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-[#E04562] bg-[#F9E4E8] block px-3 py-2 my-2 text-xs font-normal font-sans">{errors.phoneNumber.message}</span>}
                                    </label>
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label className='cursor-pointer' htmlFor="dob">Date of Birth<span className='text-red-700 font-semibold'>*</span></label>
                                    <input className='p-2 ring-1 ring-[#0097fa] focus:outline-none rounded-sm transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none bg-white'
                                        type="date"
                                        name="dob"
                                        id="dob"
                                        {...register("dob", {
                                            required: {
                                                value: true,
                                                message: 'This field is Required.'
                                            }
                                        })} />
                                    <label className="label">
                                        {errors.dob?.type === 'required' && <span className="label-text-alt text-[#E04562] bg-[#F9E4E8] block px-3 py-2 my-2 text-xs font-normal font-sans">{errors.dob.message}</span>}
                                    </label>
                                </div>
                                <div className='flex lg:justify-between'>
                                    <span className='flex flex-col w-1/2 mr-10'>
                                        <label className='cursor-pointer' htmlFor="bloodGroup">Blood Group</label>
                                        <select
                                            className='w-full p-2 ring-1 ring-[#0097fa] focus:outline-none rounded-sm transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none required:ring-red-400 bg-white'
                                            {...register("bloodGroup", {})}>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                        </select>
                                    </span>
                                    <span className='flex flex-col lg:mr-10'>
                                        <label className='cursor-pointer' htmlFor="ableToDonate">Able To Donate</label>
                                        <div className='flex items-center gap-x-2'>
                                            <input className='border border-[#17a8e3] rounded-full checked:border-[5px] w-5 h-5 cursor-pointer appearance-none' {...register("ableToDonate", {})} type="radio" value="Yes" />Yes
                                            <input className='border border-[#17a8e3] rounded-full checked:border-[5px] w-5 h-5 cursor-pointer appearance-none' {...register("ableToDonate", {})} type="radio" value="No" />No
                                        </div>
                                    </span>
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label className='cursor-pointer' htmlFor="address">Street Address<span className='text-red-700 font-semibold'>*</span></label>
                                    <input className='w-full p-2 ring-1 ring-[#0097fa] focus:outline-none rounded-sm transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none required:ring-red-400'
                                        type="text"
                                        placeholder="E.g. 23/3 Jhigatola, Dhaka 1209"
                                        id='address'
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'This field is required. Please enter the street address.'
                                            }, maxLength: 50
                                        })} />
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-[#E04562] bg-[#F9E4E8] block px-3 py-2 my-2 text-xs font-normal font-sans">{errors.address.message}</span>}
                                    </label>
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label className='cursor-pointer' htmlFor="district">District<span className='text-red-700 font-semibold'>*</span></label>
                                    <select
                                        className='w-full p-2 ring-1 ring-[#0097fa] focus:outline-none rounded-sm transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none required:ring-red-400 bg-white'
                                        {...register("district", { required: true })}>
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Bagerhat">Bagerhat</option>
                                        <option value="Bandarban">Bandarban</option>
                                        <option value="Barguna">Barguna</option>
                                        <option value="Barisal">Barisal</option>
                                        <option value="Bhola">Bhola</option>
                                        <option value="Bogra">Bogra</option>
                                        <option value="Brahmanbaria">Brahmanbaria</option>
                                        <option value="Chandpur">Chandpur</option>
                                        <option value="Chittagong">Chittagong</option>
                                        <option value="Chuadanga">Chuadanga</option>
                                        <option value="Comilla">Comilla</option>
                                        <option value="Cox'sBazar">Cox'sBazar</option>
                                        <option value="Dinajpur">Dinajpur</option>
                                        <option value="Faridpur">Faridpur</option>
                                        <option value="Feni">Feni</option>
                                        <option value="Gaibandha">Gaibandha</option>
                                        <option value="Gazipur">Gazipur</option>
                                        <option value="Gopalganj">Gopalganj</option>
                                        <option value="Habiganj">Habiganj</option>
                                        <option value="Jaipurhat">Jaipurhat</option>
                                        <option value="Jamalpur">Jamalpur</option>
                                        <option value="Jessore">Jessore</option>
                                        <option value="Jhalokati">Jhalokati</option>
                                        <option value="Jhenaidah">Jhenaidah</option>
                                        <option value="Khagrachari">Khagrachari</option>
                                        <option value="Khulna">Khulna</option>
                                        <option value="Kishoreganj">Kishoreganj</option>
                                        <option value="Kurigram">Kurigram</option>
                                        <option value="Kushtia">Kushtia</option>
                                        <option value="Lakshmipur">Lakshmipur</option>
                                        <option value="Lalmonirhat">Lalmonirhat</option>
                                        <option value="Madaripur">Madaripur</option>
                                        <option value="Magura">Magura</option>
                                        <option value="Manikganj">Manikganj</option>
                                        <option value="Maulvibazar">Maulvibazar</option>
                                        <option value="Meherpur">Meherpur</option>
                                        <option value="Munshiganj">Munshiganj</option>
                                        <option value="Mymensingh">Mymensingh</option>
                                        <option value="Naogaon">Naogaon</option>
                                        <option value="Narail">Narail</option>
                                        <option value="Narayanganj">Narayanganj</option>
                                        <option value="Narsingdi">Narsingdi</option>
                                        <option value="Natore">Natore</option>
                                        <option value="Nawabganj">Nawabganj</option>
                                        <option value="Netrokona">Netrokona</option>
                                        <option value="Nilphamari">Nilphamari</option>
                                        <option value="Noakhali">Noakhali</option>
                                        <option value="Pabna">Pabna</option>
                                        <option value="Panchagarh">Panchagarh</option>
                                        <option value="Patuakhali">Patuakhali</option>
                                        <option value="Pirojpur">Pirojpur</option>
                                        <option value="Rajbari">Rajbari</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                        <option value="Rangamati">Rangamati</option>
                                        <option value="Rangpur">Rangpur</option>
                                        <option value="Satkhira">Satkhira</option>
                                        <option value="Shariatpur">Shariatpur</option>
                                        <option value="Sherpur">Sherpur</option>
                                        <option value="Sirajganj">Sirajganj</option>
                                        <option value="Sunamganj">Sunamganj</option>
                                        <option value="Sylhet">Sylhet</option>
                                        <option value="Tangail">Tangail</option>
                                        <option value="Thakurgaon">Thakurgaon</option>
                                    </select>
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label className='cursor-pointer' htmlFor="education">Educational Qualification (Mention the Subject/Group)<span className='text-red-700 font-semibold'>*</span></label>
                                    <input className='w-full p-2 ring-1 ring-[#0097fa] focus:outline-none rounded-sm transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none required:ring-red-400'
                                        type="text"
                                        placeholder="E.g. BBA, 2nd Semester"
                                        id='education'
                                        {...register("education", {
                                            required: {
                                                value: true,
                                                message: 'This field is required. Please enter text.'
                                            }, maxLength: 50
                                        })} />
                                    <label className="label">
                                        {errors.education?.type === 'required' && <span className="label-text-alt text-[#E04562] bg-[#F9E4E8] block px-3 py-2 my-2 text-xs font-normal font-sans">{errors.education.message}</span>}
                                    </label>
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label className='cursor-pointer' htmlFor="profession">Profession<span className='text-red-700 font-semibold'>*</span></label>
                                    <select
                                        className='w-full p-2 ring-1 ring-[#0097fa] focus:outline-none rounded-sm transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none required:ring-red-400 bg-white'
                                        {...register("profession", { required: true })}>
                                        <option value="Student">Student</option>
                                        <option value="Service Holder">Service Holder</option>
                                        <option value="Business">Business</option>
                                        <option value="Enterpreneur">Enterpreneur</option>
                                        <option value="Social Worker">Social Worker</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label className='cursor-pointer' htmlFor="otherOrg">Involvement With Any Other Organization?<span className='text-red-700 font-semibold'>*</span></label>
                                    <select
                                        className='w-full p-2 ring-1 ring-[#0097fa] focus:outline-none rounded-sm transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none required:ring-red-400 bg-white'
                                        {...register("otherOrg", { required: true })}>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label className='cursor-pointer' htmlFor="facebookLink">Facebook Profile Link<span className='text-red-700 font-semibold'>*</span></label>
                                    <input className='w-full p-2 ring-1 ring-[#0097fa] focus:outline-none rounded-sm transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none required:ring-red-400'
                                        type="text"
                                        placeholder="E.g. www.facebook.com/wfhbd"
                                        id='facebookLink'
                                        {...register("facebookLink", {
                                            required: {
                                                value: true,
                                                message: 'This field is required. Please enter text.'
                                            }, maxLength: 50
                                        })} />
                                    <label className="label">
                                        {errors.facebookLink?.type === 'required' && <span className="label-text-alt text-[#E04562] bg-[#F9E4E8] block px-3 py-2 my-2 text-xs font-normal font-sans">{errors.facebookLink.message}</span>}
                                    </label>
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label className='cursor-pointer' htmlFor="volunteerType">Volunteer Type<span className='text-red-700 font-semibold'>*</span></label>
                                    <select
                                        className='w-full p-2 ring-1 ring-[#0097fa] focus:outline-none rounded-sm transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none required:ring-red-400 bg-white'
                                        {...register("volunteerType", { required: true })}>
                                        <option value="offline">Offline</option>
                                        <option value="online">Online</option>
                                    </select>
                                </div>
                                <input className='btn text-white bg-[#17A8E3] py-2 px-6 rounded-sm right-0 font-medium font-pop text-sm mb-10 mt-5 cursor-pointer hover:bg-[#008FCA] duration-200 drop-shadow-md' type="submit" value='SUBMIT' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeAVolunteer;