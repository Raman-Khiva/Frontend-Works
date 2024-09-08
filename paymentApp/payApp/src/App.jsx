import React from 'react';
import { Billing, Bussiness, CardDeal, Clients, Hero, Navbar, Stats, Testimonials } from './components';

function App() {

  return (
    <section className='bg-primary'>
      <div>
        <Navbar/>
        <Hero/>
      </div>
      <section className='my-12'>
        <Stats/>
      </section>
      <section className='mt-12 py-16'>
        <Bussiness/>
      </section>
      <section className=' py-28 '>
        <Billing/>
      </section>


      <section className=' py-28'>
        <CardDeal/>
      </section>


      <section className='py-28'>
        <Testimonials/>
      </section>

      <section className='py-20'>
        <Clients/>
      </section>

    </section>

  )
}

export default App
