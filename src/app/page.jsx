"use client"


import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Footer from '@/components/Footer/Footer';
import Fees from '@/components/Fees/Fees';
import Faqs from '@/components/Faqs/Faqs';
import Services from '@/components/Services/Services';
import GettingStarted from '@/components/GettingStarted/GettingStarted';


export default function Home() {
  return (
    <>
    
      <Header />
      <main>
        <Hero />
        <Services/>
        <GettingStarted/>
        <Fees/>
        <Faqs/>
      </main>
      
      <Footer />
    </>
  );
}

