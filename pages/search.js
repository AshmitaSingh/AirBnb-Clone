import { useRouter } from 'next/router';
import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import format  from 'date-fns/format';
import InfoCard from '../components/InfoCard';
import MapIntegration from '../components/MapIntegration';

function Search({searchResults}) {
    const router = useRouter();
    
    // Accessing all the values from the search url
    //console.log(router.query);
    // ES6 Destructuring
    const {location, startDate, endDate, noOfGuests} = router.query;
    // ​Also check if the variables are null, if so, then redirect them

    // Format the startDate & endDate
    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
    // Using string interpolation to display the date range from startDate to endDate
    const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
        <main className='flex'>
            {/* Left side of the Page */}
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ Stays - <span className='bg-gray-200 rounded-lg px-2 py-1'>{range}</span> - for {noOfGuests} guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and Beds</p>
                    <p className='button'>More Filters</p>
                </div>

                <div className='flex flex-col'>
                {searchResults?.map(({ img, location, title, description, star, price, total }) => (
                    <InfoCard 
                        key={img}
                        img={img}
                        location={location}
                        title={title}
                        description={description}
                        star={star}
                        price={price}
                        total ={total}
                    />
                ))}
                </div>
            </section>
            {/* Right side of the Page - Map*/}
            <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                <MapIntegration searchResults={searchResults}/>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Search;

// Server-side Rendering
export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());

    return {
        props: {
            searchResults
        }
    }
}
