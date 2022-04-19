import React from 'react';
import {
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon,
    UsersIcon
} from '@heroicons/react/solid';

function Footer() {
  return (
      <div className='bg-gray-100 text-gray-600'>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Center</p>
            <p>Safety information</p>
            <p>Cancellation options</p>
            <p>Our COVID-19 Response</p>
            <p>Supporting people with disabilities</p>
            <p>Report a neighbourhood concern</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Airbnb.org: disaster relief housing</p>
            <p>Support Afghan refugees</p>
            <p>Combating discrimination</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOSTING</h5>
            <p>Try hosting</p>
            <p>AirCover: protection for Hosts</p>
            <p>Explore hosting resources</p>
            <p>Visit our community forum</p>
            <p>How to host responsibly</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>Newsroom</p>
            <p>Learn about new features</p>
            <p>Letter from our founders</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>AirBnb Luxe</p>
        </div>
    </div>
    <div className='border-t -mt-10 py-3 lg:py-5 text-gray-900'>
        <div className='flex items-center space-x-3 lg:space-x-4 px-32 text-xs lg:text-sm'>
            <p>© 2022 Airbnb.AS, Inc.</p>
            <span>.</span>
            <p>Privacy</p>
            <span>.</span>
            <p>Terms</p>
            <span>.</span>
            <p>Sitemap</p>
            <span>.</span>
            <p>Company details</p>
        </div>
    </div>
    </div>
  )
}

export default Footer;