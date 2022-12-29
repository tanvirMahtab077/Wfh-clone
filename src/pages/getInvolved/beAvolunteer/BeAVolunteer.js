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
                        <span className='border border-t-0 border-r-0 border-b-0 border-[#0097FA] py-12 lg:py-8  bg-[#0097FA] mr-3'></span>
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
                        <div className='bg-[#0097fa] w-full bg-opacity-[0.15] rounded p-5'>
                            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label htmlFor="fullName">Full Name<span className='text-red-700 font-semibold'>*</span></label>
                                    <input type="text" placeholder="Full Name" {...register("fullName", { required: true, maxLength: 80 })} />
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label htmlFor="email">Email Address<span className='text-red-700 font-semibold'>*</span></label>
                                    <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label htmlFor="phoneNumber">Phone Number<span className='text-red-700 font-semibold'>*</span></label>
                                    <input type="tel" placeholder="Phone Number" {...register("phoneNumber", { required: true })} />
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label htmlFor="dateOfBirth">Date Of Birth<span className='text-red-700 font-semibold'>*</span></label>
                                    <input type="date" placeholder="Date Of Birth" {...register("dateOfBirth", { required: true })} />
                                </div>
                                <div className='flext items-center justify-between'>
                                    <span className='flex flex-col'>
                                        <label htmlFor="bloodGroup">Blood Group</label>
                                        <select {...register("bloodGroup", {})}>
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
                                    <span className='flex flex-col'>
                                        <label htmlFor="ableToDonate">Able To Donate</label>
                                        <div className='flex items-center gap-x-2'>
                                            <input {...register("ablteToDonate", { required: true })} type="radio" value="Yes" />Yes
                                            <input {...register("ablteToDonate", { required: true })} type="radio" value="No" />No
                                        </div>
                                    </span>
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label htmlFor="address">Street Address<span className='text-red-700 font-semibold'>*</span></label>
                                    <input type="text" placeholder="Street Address" {...register("address", { required: true })} />
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label htmlFor="district">District<span className='text-red-700 font-semibold'>*</span></label>
                                    <select {...register("district", { required: true })}>
                                        <option value="Mr">Dhaka</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Miss">Miss</option>
                                        <option value="Dr">Dr</option>
                                    </select>
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label htmlFor="education">Educational Qualification (Mention the Subject/Group)<span className='text-red-700 font-semibold'>*</span></label>
                                    <input type="text" placeholder="Education" {...register("education", { required: true })} />
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label htmlFor="profession">Profession<span className='text-red-700 font-semibold'>*</span></label>
                                    <select {...register("profession", { required: true })}>
                                        <option value="Mr">Student</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Miss">Miss</option>
                                        <option value="Dr">Dr</option>
                                    </select>
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label htmlFor="otherOrg">Involvement With Any Other Organization?<span className='text-red-700 font-semibold'>*</span></label>
                                    <select {...register("otherOrg", { required: true })}>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label htmlFor="facebookLink">Facebook Profile Link<span className='text-red-700 font-semibold'>*</span></label>
                                    <input type="text" placeholder="Facebook Profile Link" {...register("facebookLink", { required: true })} />
                                </div>
                                <div className='flex flex-col w-full font-pop text-sm my-3'>
                                    <label htmlFor="volunteerType">Volunteer Type<span className='text-red-700 font-semibold'>*</span></label>
                                    <select {...register("volunteerType", { required: true })}>
                                        <option value="offline">Offline</option>
                                        <option value="online">Online</option>
                                    </select>
                                </div>
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeAVolunteer;