import React, { useState } from 'react';
import Image from 'next/image';
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon,
    UsersIcon
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({placeholder}) {

    const [searchInput, setSearchInput] = useState('');
    // 'new Date()' returns today's date
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    // Keeping a track on the Number of guests
    const [noOfGuests, setNoOfGuests] = useState(1);
    // To go back to the homepage when the logo is clicked
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    // Implementing Cancel Button
    const resetInput = () => {
        setSearchInput('');
    }

    // Implementing Search Button - redirecting to the search page and providing all the data in the search link/url 
    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests
            }
        });
       
    }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5'>
        {/* Left Div - Logo */}
        <div
            onClick={() => router.push('/')} 
            className='relative flex items-center h-10 cursor-pointer my-auto'
        >
            {/* Next.JS Image tag as it compresses the image */}
            <Image 
                src='https://links.papareact.com/qd3'
                layout='fill'
                objectFit='contain'
                objectPosition='left'
                alt=''
            />
        </div>
        {/* Middle Div - Search Bar */}
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
            <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} 
                className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' 
                type='text' 
                placeholder={placeholder || 'Start your search'}
            />
            <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
        </div>
        {/* Right Div - Other Icons */}
        <div className="flex items-center space-x-4 justify-end text-gray-500">
            <p className='hidden md:inline cursor-pointer'>Become a host</p>
            <GlobeAltIcon className='h-6 cursor-pointer'/>
            <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'>
                <MenuIcon className='h-6'/>
                <UserCircleIcon className='h-6'/>
            </div>
        </div>

        {/* Calendar & other stuff when the search bar is clicked/typed */}
        {/* Only show this below part if the 'searchInput' has any value */}
        {searchInput && (
            <div className='flex flex-col col-span-3 mx-auto'>
                <DateRangePicker 
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={['#FD5B61']}
                    onChange={handleSelect}
                />

                <div className='flex items-center border-b mb-4'>
                    <h2 className='text-xl flex-grow font-semibold'>Number of Guests</h2>
                    <UsersIcon className='h-5'/>
                    <input
                        value={noOfGuests}
                        onChange={(e) => setNoOfGuests(e.target.value)} 
                        type='number' 
                        className='w-12 pl-2 text-lg outline-none text-red-400'
                        min={1}    
                    />
                </div>
                <div className='flex'>
                    <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                    <button onClick={search} className='flex-grow text-red-400'>Search</button>
                </div>
            </div>
        )}
    </header>
  )
}

export default Header;