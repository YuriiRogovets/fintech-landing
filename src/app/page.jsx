"use client"


import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Footer from '@/components/Footer/Footer';
import Fees from '@/components/Fees/Fees';
import Faqs from '@/components/Faqs/Faqs';


export default function Home() {
  return (
    <>
    
      <Header />
      <main>
        <Hero />
        <Fees/>
        <Faqs/>
      </main>
      
      <Footer />
    </>
  );
}

