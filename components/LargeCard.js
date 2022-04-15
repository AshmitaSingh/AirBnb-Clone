import React from 'react';
import Image from 'next/image'

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className='relative py-16 cursor-pointer'>
        {/* Will have 2 divs - one for the entire image and one for the rest of the stuff displayed on the Image */}
        <div className='relative h-96 min-w-[300px]'>
            <Image
                className='rounded-2xl'
                src={img}
                layout='fill'
                objectFit='cover'
                alt=''
            />
        </div>
        <div className='absolute top-32 left-12'>
            <h3 className='text-4xl mb-3 w-64'>{title}</h3>
            <p>{description}</p>
            <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
        </div>
    </section>
  )
}

export default LargeCard;