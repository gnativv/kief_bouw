import React, {useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/kief bouw-01.png';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Header: React.FC = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (dropdownButtonRef.current && !dropdownButtonRef.current.contains(target) && isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isDropdownOpen]);

  const navigate = useNavigate();

  const handleClick = () => {
    window.open('https://www.instagram.com/kiefbouw/', '_blank');
  };

  return (
    <header className='h-50'>
      <div className='flex flex-row'>
        <button>
          <div className='flex items-center w-40 p-3' onClick={() => navigate('/')}>
            <img src={logo} className='' alt='Logo'/>
          </div>
        </button>
        <div className='block md:hidden grow'></div>
        <div className='md:flex md:flex-row md:grow hidden md:block md:justify-center md:items-center pr-[112px]'>
          <button className='px-3 py-2 border-b-2 border-transparent hover:border-black transition duration-300' type='button' onClick={() => navigate('/')}>Home</button>
          <button className='px-3 py-2 border-b-2 border-transparent hover:border-black transition duration-300' type='button' onClick={() => navigate('/services')}>Ons werk</button>
          <button className='px-3 py-2 border-b-2 border-transparent hover:border-black transition duration-300' type='button' onClick={() => navigate('/about')}>Over ons</button>
          <button className='px-3 py-2 border-b-2 border-transparent hover:border-black transition duration-300' type='button' onClick={() => navigate('/offerte')}>Offerte</button>
        </div>
        <button className='p-3 md:flex md:items-center md:justify-center hidden md:block hover:text-gray-500 transition duration-300 hover:text-[#4f5bd5]' type='button' onClick={handleClick}>
          <FontAwesomeIcon className='size-7' icon={faInstagram} />
        </button>
        <button ref={dropdownButtonRef} className='p-3 md:flex md:items-center md:justify-center block md:hidden' type='button' onClick={toggleDropdown}>
          <FontAwesomeIcon className='size-7' icon={faBars} />
        </button>
      </div>
      {isDropdownOpen && (<div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
          <button className='px-3 py-2 w-full text-left border-b-2 border-transparent hover:border-black transition duration-300' type='button' onClick={() => navigate('/')}>Home</button>
          <button className='px-3 py-2 w-full text-left border-b-2 border-transparent hover:border-black transition duration-300' type='button' onClick={() => navigate('/services')}>Ons werk</button>
          <button className='px-3 py-2 w-full text-left border-b-2 border-transparent hover:border-black transition duration-300' type='button' onClick={() => navigate('/about')}>Over ons</button>
          <button className='px-3 py-2 w-full text-left border-b-2 border-transparent hover:border-black transition duration-300' type='button' onClick={() => navigate('/offerte')}>Offerte</button>
        </div>
        )}
    </header>
  );
}

export default Header;
