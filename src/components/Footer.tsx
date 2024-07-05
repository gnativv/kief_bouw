import React, {useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/kief bouw-01.png';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faMapLocation, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer: React.FC = () => {

    const navigate = useNavigate();
    return (
        <footer className='bg-[#fffcf5]'>
            <hr className="block md:hidden border-gray-200 mt-4" />
            <section className="py-10 sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                {/* <div className='md:justify-start flex justify-center'> */}
                    <img className=" w-60 h-auto" src={logo} alt="" />
                {/* </div> */}

                <p className="text-base leading-relaxed text-gray-600 mt-7">Gespecialiseerd in hoogwaardige badkamerrenovaties. Wij transformeren uw badkamer tot een stijlvolle en functionele ruimte. Vakmanschap en klanttevredenheid staan bij ons voorop.</p>
            </div>

            <div>
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Bedrijf</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <button className='flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600' type='button' onClick={() => navigate('/about')}>Over ons</button>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Q&A </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms and Conditions </a>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Gegevens</p>

                <div className='mt-6'>
                    <div className='flex flex-row mb-4'>
                        <div className='flex items-top pt-1 width-[22px] justify-center'>
                            <FontAwesomeIcon icon={faMapMarker} className='px-1'></FontAwesomeIcon>
                        </div>
                    <p className='flex items-center justify-center pl-4'>Irenestraat 41, 2685CA Poeldijk</p>
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex items-center font-bold text-xs width-[22px] justify-center'>
                            kvk
                        </div>
                    <p className='flex items-center justify-center pl-4'> 65288068</p>
                    </div>
                </div>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Contact</p>
                <div className='mt-6'>
                    <div className='flex flex-row mb-4'>
                        <div className='flex items-center justify-center'>
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                        </div>
                    <p className='flex items-center justify-center pl-4'> +31 (0) 6 47 25 90 77</p>
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex items-center justify-center'>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        </div>
                    <p className='flex items-center justify-center pl-4'> info@kiefbouw.com</p>
                    </div>
                </div>
            </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">© Copyright 2024, All Rights Reserved by Kief Bouw</p>
    </div>
</section>
        </footer>
    );


}

export default Footer;
