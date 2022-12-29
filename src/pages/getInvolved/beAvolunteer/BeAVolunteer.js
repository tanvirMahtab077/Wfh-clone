import React from 'react';
import HeroBanner from '../../../components/HeroBanner/HeroBanner';
import volunteer from '../../../Assests/Imgs/Voluteer-Opportunities-in-Bangladesh.jpg'

const BeAVolunteer = () => {
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
                    <h1 className='font-bold text-3xl font-sans my-3'>Responsibility to be a Volunteer</h1>
                    <ul className='text-zinc-400 lg:w-[570px] text-sm font-sans list-disc list-inside'>
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
                </div>
                <div className='lg:w-[600px]'>
                    <div className='px-10 py-8 bg-[#0097FA] mt-10 mb-12 w-full relative after:content:"" before:content:"" before:table after:table after:border-[12px] after:border-solid after:border-transparent after:border-t-[#0097FA] after:absolute after:-bottom-6 after:left-1/2 after:-ml-3 after:z-10'>
                        <h1 className='text-2xl lg:text-4xl font-bold text-white text-center'>Volunteer Registration Form</h1>
                    </div>
                    <div>
                        <div className='bg-[#0097fa] w-full bg-opacity-[0.15] rounded p-5'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeAVolunteer;