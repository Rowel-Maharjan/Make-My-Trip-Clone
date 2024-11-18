import React from 'react'

const Offerings = ({ offerings }) => {
    return (
        <div className="flex flex-col gap-5 mb-10">
            {
                offerings.map(offering => <div key={offering.title} className='flex flex-col'>
                    <h1 className="text-[10px] font-black uppercase leading-3 mb-2">{offering.title}</h1>
                    <div className="text-gray-700 leading-3">
                        {offering.description.map((offer, index) => (
                            <span key={index}>
                                <span className='font-normal text-xs text-[#4a4a4a] hover:text-[#008cff] cursor-pointer'>{offer}</span>
                                {index < offering.description.length - 1 && ', '}
                            </span>
                        ))}
                    </div>

                </div>)
            }
        </div>
    )
}

export default Offerings
