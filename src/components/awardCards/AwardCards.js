import React from 'react'

const AwardCards = () => {

  const card_info = [
    { img: 'jbya_2017.jpg', title: 'Joy Bangla youth Award 2017', by: 'by Young Bangla & CRI' },
    { img: 'frtg.jpg', title: 'Bibek Foundation Award 2020', by: 'by Bibek Foundation' },
    { img: 'bdf_award.jpg', title: 'Blood Donors Forum Adord 2017', by: 'by Blood Donors Forum' },
    { img: 'crs.jpg', title: 'Honoriun Creast 2017', by: 'by CROS' },
    { img: 'zoom_bd.jpg', title: 'Zoom Bangladesh Adord 2017', by: 'by Evergreen Zoom Bangladesh' },
    { img: 'bijoy.jpg', title: 'best youth Award 2017', by: 'by Bijoy Foundation' },
  ]

  return (
    
      <div className="mx-auto max-w-2xl py-16 lg:max-w-7xl">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {card_info.map((card, index) => {
            return (
              <div className="group relative border border-1 rounded-md h-72" key={index}>
                <div className="rounded-md p-3">
                  <img src={process.env.PUBLIC_URL + `/images/${card.img}`} alt="Front of men&#039;s Basic Tee in black." className="h-2/4 w-11/12 m-auto"/>
                </div>
                <div className="w-4/5 m-auto">
                  <div className='text-center'>
                    <h3 className="text-lg font-bold">
                      <p>{card.title}</p>
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

export default AwardCards