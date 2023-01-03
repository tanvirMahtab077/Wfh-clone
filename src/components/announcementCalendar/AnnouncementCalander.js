import React, { useState } from 'react';

const AnnouncementCalander = () => {
    const [date, setDate] = useState(new Date());
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    console.log(setDate)
    const month = date.getMonth();
    const monthName = monthNames[month];
    const year = date.getFullYear();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = lastDay.getDate();
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const rows = [];

    let day = firstDay;
    let calendar = [];

    // Create a calendar for the current month
    for (let i = 0; i < days; i++) {
        calendar.push(day);
        if (day.getDay() === 6) {
            rows.push(calendar);
            calendar = [];
        }
        day = new Date(day.getTime() + 86400000);
    }
    rows.push(calendar);
    return (
        <div>
            <div>
                <h4 className="font-semibold text-lg leading-5 font-pop text-primary uppercase">
                    Recent Post
                </h4>
                <div className="border-b-2 mb-4 mt-2 w-[50px] border-[#0097FA]"></div>
                <div className="font-pop leading-7 text-primary flex flex-col gap-y-4  w-[90%]">
                    <div>
                        <p className="hover:text-blueTxt linear duration-300">
                            <a href="#/">
                                ভালোবাসা দিবসে পথশিশুদের পাশে ওয়ার্কস ফর হিউমিনিটি ফাউন্ডেশন
                            </a>
                        </p>
                        <p className="text-primary/40 text-xs mt-2 mb-1">March 1 2022</p>
                    </div>

                    <div>
                        <p className="hover:text-blueTxt linear duration-300">
                            <a href="#/">Donate Love, Spread Happiness 2022</a>
                        </p>
                        <p className="text-primary/40 text-xs mt-2 mb-1">March 1 2022</p>
                    </div>
                </div>
            </div>
            <div className="py-8">
                <h4 className="font-semibold text-lg leading-5 font-pop text-primary uppercase">
                    Calender
                </h4>
                <div className="border-b-2 mb-4 mt-2 w-[50px] border-[#0097FA]"></div>
                <p className="font-semibold text-[#8c8c8c] font-pop mb-3 text-center">{monthName} {year}</p>
                <div className='text-base text-[#8c8c8c] font-sans ml-14 lg:ml-0'>
                    <table className='border'>
                        <thead>
                            <tr>
                                {weekdays.map(weekday => (
                                    <th className='border p-2' key={weekday}>{weekday}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr key={i}>
                                    {row.map(day => (
                                        <td className='border p-2' key={day}>{day.getDate()}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default AnnouncementCalander;