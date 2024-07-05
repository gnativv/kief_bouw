import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Foto from '../images/foto1.JPG';
import Icon from '../images/black bird.svg';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementPicture = document.querySelectorAll('.fadePicture');
      const elementsText = document.querySelectorAll('.fadeText');
      const maxScroll = 100; // Adjust this value as needed
      const opacityImage = 0.8 - (scrollPosition / 40) * 0.3;
      const opacityText = 1 - (scrollPosition / maxScroll);

      elementPicture.forEach((element) => {
        if (opacityImage >= 0) {
          element.style.opacity = opacityImage.toString();
        } else {
          element.style.opacity = '0';
        }
      });
      elementsText.forEach((element) => {
        if (opacityText >= 0) {
          element.style.opacity = opacityText.toString();
        } else {
          element.style.opacity = '0';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDropdownOpen]);

  return (
    <div>
      <Header />
      <body className='bg-[#fffcf5]'>
        {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
            <button className='px-3 py-2 w-full text-left border-b-2 border-transparent hover:border-black transition duration-300' type='button' onClick={() => navigate('/')}>Home</button>
            <button className='px-3 py-2 w-full text-left border-b-2 border-transparent hover:border-black transition duration-300' type='button' onClick={() => navigate('/services')}>Ons werk</button>
            <button className='px-3 py-2 w-full text-left border-b-2 border-transparent hover:border-black transition duration-300' type='button' onClick={() => navigate('/about')}>Over ons</button>
            <button className='px-3 py-2 w-full text-left border-b-2 border-transparent hover:border-black transition duration-300' type='button' onClick={() => navigate('/offerte')}>Offerte</button>
            </div>
        )}
        <div className="overflow-auto">
            <div
            className="flex justify-center items-center relative bg-cover bg-center"
            style={{ height: 'calc(100vh - 64px)', backgroundImage: `url(${Foto})` }}
            >
                <div className="absolute inset-0 bg-white opacity-80 fadePicture"></div>
                <div className="relative flex flex-col items-center justify-center pb-100 fadeText">
                    <img src={Icon} className="size-52" alt="Icon" />
                    <h1 className="text-black text-6xl text-center md:text-9xl font-bold">KIEF BOUW</h1>
                    <h2 className="text-black text-center text-l md:text-2xl font-bold mt-5 mb-40">Jouw laatste stap naar je droombadkamer.</h2>
                </div>
            </div>
            <div className='w-52 h-52 ring-1 ring-black rounded-md m-10 shadow-lg bg-white'>
                onze zekerheden
            </div>

            {/* Additional content to enable scrolling */}
            <div style={{ height: '2000px' }}></div>
        </div>
      </body>
    </div>
  );
};

export default Home;
