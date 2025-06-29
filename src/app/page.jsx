"use client"


import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Footer from '@/components/Footer/Footer';
import Fees from '@/components/Fees/Fees';
import Faqs from '@/components/Faqs/Faqs';
import Benefits from '@/components/Benefits/Benefits';


export default function Home() {
  return (
    <>
    
      <Header />
      <main>
        <Hero />
        <Benefits/>
        <Fees/>
        <Faqs/>
      </main>
      
      <Footer />
    </>
  );
}

