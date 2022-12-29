import React from 'react'

const Channels = () => {

const card_info = [
    { img: 'bangla-visson-logo.jpg', title: 'Bangla Vision', by: 'দিন প্রতিদিন', link: 'https://youtu.be/3c91kDu46eM' },
    { img: 'channel-24.jpg', title: 'Channel 24', by: 'তোমার হাতে আশার মশাল', link: 'https://www.youtube.com/watch?v=QIckaEoXyeQ&t=97s' },
    { img: 'ittefak.jpg', title: 'Joy Bangla Youth Award 2017', by: 'Joy Bangla Youth Award 2017', link: 'https://drive.google.com/file/d/17brIX5gWTr2pqV2HC8n4tc4rU94a2Ki2/view?usp=sharing' },
    { img: 'Somoi-tv.jpg', title: 'Somoy TV', by: "অসহায়ের সহায় 'ওয়ার্কস ফর হিউম্যানিটি'", link: 'https://www.youtube.com/watch?v=ZBjp-IcoLKg' },
    { img: 'capital-fm.jpg', title: 'Capital FM', by: 'Live With WORKS FOT HUMANITY', link: 'https://youtu.be/3c91kDu46eM' },
    { img: 'Somoi-tv.jpg', title: 'Somoy TV', by: 'তারুণ্যের স্বপ্নযাত্রার গল্প | অদম্য বাংলাদেশ', link: 'https://youtu.be/rLieXh9YXs8' },
    { img: 'somokal-logo.jpg', title: 'Daily Somokal', by: 'তারুণ্যের উদ্ভাবনী চোখে উদ্ভাসিত বাংলার স্বপ্ন', link: 'http://samakal.com/todays-print-edition/tp-khobor/article/17104052/%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A7%81%E0%A6%A3%E0%A7%8D%E0%A6%AF%E0%A7%87%E0%A6%B0-%E0%A6%89%E0%A6%A6%E0%A7%8D%E0%A6%AD%E0%A6%BE%E0%A6%AC%E0%A6%A8%E0%A7%80-%E0%A6%9A%E0%A7%8B%E0%A6%96%E0%A7%87-%E0%A6%89%E0%A6%A6%E0%A7%8D%E0%A6%AD%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%A4-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%AA%E0%A7%8D%E0%A6%A8' },
    { img: 'bangla-kagoj.jpg', title: 'Bangla Kajog', by: 'মানবিক ভাবনা থেকেই ওয়ার্কস ফর হিউম্যানিটি', link: 'http://www.http//banglakagoj.news/%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A6%AC%E0%A6%BF%E0%A6%95-%E0%A6%AD%E0%A6%BE%E0%A6%AC%E0%A6%A8%E0%A6%BE-%E0%A6%A5%E0%A7%87%E0%A6%95%E0%A7%87%E0%A6%87-%E0%A6%93%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A7%8D/' },
    { img: 'daily-mail.jpg', title: 'Daily Mail', by: "কুড়িগ্রামের বন্যার্তদের পাশে 'ওয়ার্কস ফর হিউমানিটি'", link: 'https://www.dailymail24.com/2017/08/27/%E0%A6%95%E0%A7%81%E0%A6%A1%E0%A6%BC%E0%A6%BF%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A7%87%E0%A6%B0-%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A4%E0%A6%A6%E0%A7%87/' },
    { img: 'daily-campur.jpg', title: 'Daily Campus', by: 'মহামারীতে সকল শ্রেণির মানুষের সাথে ঈদ আনন্দ ভাগাভাগি', link: 'https://thedailycampus.com/struggle/68403/' },
    { img: 'bd-morning.jpg', title: 'BD Moring', by: 'জামালপুরে ওয়ার্কস ফর হিউম্যানিটির শিক্ষা উপকরণ ও স্বাস্থ্য সেবা প্রদান', link: 'http://www.bdmorning.com/desh/223484' },
    { img: 'jugantor.jpg', title: 'Jugantor', by: 'ভালবাসা দিবসে অসহায় শিশুদের পাশে ওয়ার্কস ফর হিউমিনিটি ফাউন্ডেশন', link: 'https://www.jugantor.com/country-news/144740/?fbclid=IwAR3yPI4WykGWswQkKpk1UkI9zSLdhZs-o0xCiyDUr5w8GULSI_Qm07jsTNY' },
  ]

  return (
    <div className="mx-auto max-w-2xl py-16 lg:max-w-7xl">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {card_info.map((card, index) => {
            return (
              <div className="group relative border border-1 rounded-md lg:h-72" key={index}>
                <div className="rounded-md p-3">
                  <img src={process.env.PUBLIC_URL + `/images/${card.img}`} alt="Front of men&#039;s Basic Tee in black." className="h-2/4 w-11/12 m-auto"/>
                </div>
                <div className="w-4/5 m-auto">
                  <div className='text-center'>
                    <h3 className="text-lg font-bold cursor-pointer hover:text-sky-400">
                      <a href={card.link} target="_blank" rel="noopener noreferrer">{card.title}</a>
                    </h3>
                    <p className="mt-10 text-sm text-gray-500">{card.by}</p>
                  </div>
                </div>
            </div>
            )
          })}
        </div>
      </div>
  )
}

export default Channels