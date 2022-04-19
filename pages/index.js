import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ExtraLargeCard from '../components/ExtraLargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import styles from '../styles/Home.module.css'
import LargeCard from '../components/LargeCard'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className=''>
      <Head>
        <title>AirBnb Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* HEADER - Logo, Search Bar, other icons */}
      <Header/>
      {/* Banner - Fist BG Image/First Screen */}
      <Banner/>

      {/* Will contain all other components like small, medium, large card sections */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Small Cards */}
        <section className="pt-6">
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map((item) => (
            <SmallCard
              key={item.img}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))
          }
          </div>
        </section>
        
        {/* Medium Cards */}
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {cardsData?.map(({img, title}) => (
            <MediumCard
              key={img}
              img={img}
              title={title}
            />
          ))}
          </div>
        </section>

        {/* Large Cards */}
        <section>
          <h2 className='text-4xl font-semibold py-8'>Discover Airbnb Experiences</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            <LargeCard
              img='/adv2.jpg'
              title='Things to do on your trip'
              buttonText='Experiences'
            />
            <LargeCard
              img='/chore2.jpg'
              title='Things to do from home'
              buttonText='Online Experiences'
            />
          </div>
        </section>
        
        {/* ExtraLarge Card */}
        <ExtraLargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by AirBnb.'
          buttonText='Get Inspired'
        />
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

// Static Rendering (only for HomePage)
export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').
  then(
    (res) => res.json()
  );

  const cardsData = await fetch('https://links.papareact.com/zp1').
  then(
    (res) => res.json()
  );

  // Returning the result to the above function
  return {
    props: {
      exploreData,    //which means, 'exploreData: exploreData'
      cardsData
    }
  }
}


// Deployed!!!
// https://air-bnb-clone-ab.vercel.app/