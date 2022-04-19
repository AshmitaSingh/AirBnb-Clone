import React from 'react';
import Image from 'next/image'

function LargeCard({img, title, description, buttonText}) {
    return (
        <div className='h-96 w-1/2 pr-3 cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            <div className='relative h-80 w-full'>
                <Image src={img} layout='fill' objectFit='cover' className='rounded-xl' alt=''/>
            </div>
            <div className='absolute top-28 lg:top-20 left-8'>
                <h3 className='text-white text-xl lg:text-3xl mb-3 -ml-2'>{title}</h3>
                <button className='text-sm text-gray-900 bg-white px-4 py-2 rounded-lg -ml-2 bmt-5 font-semibold'>{buttonText}</button>
            </div>
        </div>
      )
    }

export default LargeCard;