import React from 'react'

const VisitingPlaces = ({ VisitingPlaces }) => {
    return (
        <div className='flex flex-wrap justify-between gap-6'>
            {VisitingPlaces.map(place => <div key={place.title} className='flex w-80 items-center'>
                <img src={place.img} alt="Image Not Found" className='mr-4 w-12 h-12 rounded-full object-cover' />
                <div className='flex flex-col'>
                    <p className='font-bold text-lg leading-4 mb-2'>{place.title}</p>
                    <p className='leading-4'>
                        {place.description.map((placeInfo, index) =>
                            <a key={index} className='leading-4 text-sm font-normal cursor-pointer'>
                                <span className='text-[#4a4a4a]'>{placeInfo}</span>
                                {index < place.description.length - 1 && <span>, </span>}
                            </a>
                        )}
                    </p>
                </div>
            </div>
            )}
        </div>

    )
}

export default VisitingPlaces
