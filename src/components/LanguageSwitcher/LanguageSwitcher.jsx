import React, { useState } from 'react';
// import ArrowDown from "../../assets/icons/ArrowDown.svg"
import i18n from '@/i18n';
import Image from 'next/image';


const LanguageSwitcher = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentLang = i18n.language === 'ua' ? 'UA' : 'EN';

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer px-4 py-2 transition"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
      >
        {currentLang}
        <Image
          src="/icons/arrow-down.svg"
          alt="arrow down icon"
          width={20}
          height={20}
          className={`ml-2 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      {isDropdownOpen && (
        <ul 
        
        className="list-none absolute left-0 mt-2 w-full shadow-lg rounded-md overflow-hidden z-10">
          <li
            className="px-4 py-2 cursor-pointer hover:text-[#113453]"
            onClick={() => handleLangChange('en')}
          >
            EN
          </li>
          <li
            className="px-4 py-2 cursor-pointer hover:text-[#113453]"
            onClick={() => handleLangChange('ua')}
          >
            UA
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
