import React from 'react'
import Title from './Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from './CarCard'
import { useNavigate } from 'react-router-dom'

const FeautedSection = () => {
    const navigate = useNavigate()

    // Group cars into chunks of 3 to form 2 rows (for 6 cars)
    const rows = [];
    const featuredCars = dummyCarData.slice(0,6);
    for (let i = 0; i < featuredCars.length; i += 3) {
        rows.push(featuredCars.slice(i, i + 3));
    }

    return (
        <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div>
                <Title 
                    title="Featured Vehicles" 
                    subTitle="Explore our selection of premium vehicles available for your next adventure."
                />
            </div>
            <div className='w-full space-y-6 mt-8'>
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {row.map((car) => (
                            <div key={car._id}>
                                <CarCard car={car}/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <button 
                onClick={() => {
                    navigate('/cars'); 
                    scrollTo(0,0);
                }}
                className="flex items-center justify-center gap-2 px-6 py-2 border border-borderColor
                hover:bg-gray-50 rounded-md mt-18 cursor-pointer"
            >
                Explore all cars <img src={assets.arrow_icon} alt="arrow" />
            </button>
        </div>
    )
}

export default FeautedSection
