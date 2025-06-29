'use client';

// import styles from './Fees.module.css';
import FeesDesktop from './FeesDesktop';
import FeesMobile from './FeesMobile';
import { useEffect, useState } from 'react';

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isMobile;
};

const Fees = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <FeesMobile /> : <FeesDesktop />}
    </>
  );
};

export default Fees;