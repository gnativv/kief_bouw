import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx'
import Foto from '../images/foto1.JPG';
import Icon from '../images/black bird.svg';
import Details from '../images/details.jpeg';
import Oplossing from '../images/oplossing.jpeg';
import waterdicht1 from '../images/waterdicht1.jpeg';
import waterdicht2 from '../images/waterdicht2.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {

  const [isPicture1, setIsPicture1] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
    setIsPicture1(prevIsPicture1 => !prevIsPicture1);
    }, 5000); // Switch every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

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
  }, []);

  return (
    <div>
      <div className='h-[64px]'>
      <Header />
      </div>
      <body className='bg-[#fffcf5]'>
        <div className="">
            <div
            className="flex justify-center items-center relative bg-cover bg-center"
            style={{ height: 'calc(100vh - 64px)', backgroundImage: `url(${Foto})` }}
            >
                <div className="absolute inset-0 bg-[#fffcf5] opacity-80 fadePicture"></div>
                <div className="relative flex flex-col items-center justify-center pb-100 fadeText">
                    <img src={Icon} className="size-52" alt="Icon" />
                    <h1 className="text-black text-6xl text-center lg:text-9xl font-bold">KIEF BOUW</h1>
                    <h2 className="text-black text-center text-l lg:text-2xl font-bold mt-5 mb-40">Jouw laatste stap naar je droombadkamer.</h2>
                </div>
            </div>
            <h1 className='uppercase my-10 lg:mt-20 lg:text-center px-5 text-4xl'>Waarom wij?</h1>
            <div className="px-5 lg:px-10 lg:grid grid-cols-2 grid-rows-3 gap-5">
                <div className="flex flex-col font-roboto justify-center p-0 lg:flex lg:flex-col lg:font-roboto lg:justify-center lg:p-5">
                    <h1 className='text-2xl mb-5 uppercase lg:px-20'>AANDACHT VOOR DETAILS</h1>
                    <p className='mb-5 lg:mb-10 lg:px-20'>De schoonheid van een badkamer wordt bepaald door het design, maar wat jouw badkamer echt laat uitspringen zijn de details. Wij maken gebruik van de meest geavanceerde technieken voor het leggen van tegels, waardoor elke voeg perfect uitgelijnd is en de tegels samen een naadloos glad oppervlak vormen.
                    </p>

                    <p className='mb-5 lg:px-20'>
                    Onze afwerking is ongeëvenaard: alle randjes worden zorgvuldig afgewerkt met profielen in de kleur van jouw tegel. Dit zorgt niet alleen voor een schitterende uitstraling, maar ook voor praktische duurzaamheid: de kans op beschadigde tegels wordt tot een minimum beperkt.</p>
                </div>
                <div className="flex flex-col font-roboto justify-center mb-10 lg:px-10 "><img src={Details}/></div>
                <div className="block lg:hidden flex flex-col font-roboto justify-center p-0">
                    <h1 className='text-2xl my-5 uppercase px-0'>Ervaring en Creativiteit: Oplossingen Voor Elke Uitdaging</h1>
                    <p className='mb-5 px-0'>Met meer dan 10 jaar ervaring hebben wij vrijwel elke situatie in een badkamer gezien. Dankzij onze uitgebreide kennis en creatieve aanpak kunnen wij voor zelfs de meest uitdagende problemen een oplossing vinden. Of het nu gaat om ongewone ruimtelijke indelingen, moeilijk bereikbare plekken, of speciale designwensen, wij hebben de expertise om jouw visie werkelijkheid te maken.
                    </p>
                    <p className='mb-5 px-0'>
                    Onze vakmensen zijn getraind om buiten de gebaande paden te denken en innovatieve oplossingen te bieden die perfect aansluiten bij jouw behoeften. We combineren jarenlange ervaring met een frisse blik op moderne technieken en materialen, waardoor we in staat zijn om voor elke situatie een passende en duurzame oplossing te leveren.</p>
                </div>
                <div className="flex flex-col font-roboto justify-center mb-10 lg:p-10 "><img src={Oplossing}/></div>
                <div className="hidden lg:block lg:flex lg:flex-col lg:font-roboto lg:justify-center lg:p-5">
                    <h1 className=' text-2xl my-5 uppercase px-20'>Ervaring en Creativiteit: Oplossingen Voor Elke Uitdaging</h1>
                    <p className='mb-5 px-20'>Met meer dan 10 jaar ervaring hebben wij vrijwel elke situatie in een badkamer gezien. Dankzij onze uitgebreide kennis en creatieve aanpak kunnen wij voor zelfs de meest uitdagende problemen een oplossing vinden. Of het nu gaat om ongewone ruimtelijke indelingen, moeilijk bereikbare plekken, of speciale designwensen, wij hebben de expertise om jouw visie werkelijkheid te maken.
                    <br/><br/>
                    </p>

                    <p className='mb-5 px-20'>
                    Onze vakmensen zijn getraind om buiten de gebaande paden te denken en innovatieve oplossingen te bieden die perfect aansluiten bij jouw behoeften. We combineren jarenlange ervaring met een frisse blik op moderne technieken en materialen, waardoor we in staat zijn om voor elke situatie een passende en duurzame oplossing te leveren.</p>
                </div>
                <div className="flex flex-col font-roboto justify-center p-0 lg:flex lg:flex-col lg:font-roboto lg:justify-center lg:p-5">
                    <h1 className='text-2xl my-5 uppercase lg:px-20'>Een waterdichte oplossing</h1>
                    <p className='mb-5 lg:mb-10 lg:px-20'>Bij ons staat kwaliteit voorop. Daarom bewerken wij elke doucheruimte met de grootste zorg en precisie, gebruikmakend van kimband en speciale afdichtpasta. Dit zorgt ervoor dat er geen enkele kans is op lekkage. Uw badkamer is bij ons in veilige en ervaren handen.
                    </p>
                </div>
                <div className="flex flex-col font-roboto justify-center lg:p-10 ">
                    <img
                    src={isPicture1 ? waterdicht1 : waterdicht2}
                    alt="Switcher"
                    />
                </div>
            </div>
            <h1 className='uppercase mb-5 lg:mb-20 mt-10 lg:mt-20 lg:text-center px-5 text-4xl'>Wat vinden onze klanten?</h1>
            <div className='w-full px-5 lg:px-20 space-y-5 lg:space-y-0 lg:space-x-20'>
                <div className='w-full flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-5'>
                    <div className="bg-white ring-1 ring-gray-400 p-4 h-full rounded-md">
                    <div className="text-xl font-bold pb-2">Pascal</div>
                    <div className="pb-2">
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 size-4'/>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 size-4'/>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 size-4'/>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 size-4'/>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 size-4'/>
                    </div>
                    <div className="pb-2 font-bold">
                        Badkamer verbouwing
                    </div>
                    <div className="pb-4">We hebben de badkamer gekocht bij Sanisale en gebruik gemaakt van de monteurs waarmee zij samen werken. Dankzij Ruslan en Vasyl van Kief Bouw hebben we nu een prachtige badkamer. Deze professional hebben ons in het hele proces begeleid en alles met ons afgestemd waardoor alles precies is gerealiseerd zoals we wilde. Dank Sanisale en Kief Bouw voor de goede service.</div>
                    <div className="">14 juni 2024</div>
                    </div>
                    <div className="bg-white ring-1 ring-gray-400 p-4 h-full flex flex-col space-y-2 rounded-md">
                        <div className="text-xl font-bold">Claudia</div>
                        <div className="">
                            <FontAwesomeIcon icon={faStar} className='text-yellow-400 size-4'/>
                            <FontAwesomeIcon icon={faStar} className='text-yellow-400 size-4'/>
                            <FontAwesomeIcon icon={faStar} className='text-yellow-400 size-4'/>
                            <FontAwesomeIcon icon={faStar} className='text-yellow-400 size-4'/>
                            <FontAwesomeIcon icon={faStar} className='text-yellow-400 size-4'/>
                        </div>
                        <div className='font-bold'>
                            Mooie spullen, goede prijs en supernette en fijne installatie!
                        </div>
                        <div className="pb-2">Hoe de indeling van onze nieuwbouwbadkamer zou worden lag al vast, maar we hadden wel nog alle spullen nodig. In de winkel in Delft (SaniSale) alles op ons gemak uitgezocht, advies gekregen en besproken. Installatie perfect en tot in de puntjes verzorgd door hun samenwerkingspartner Kief Bouw uit Poeldijk. Aanrader dus!</div>
                        <div className="grow flex items-end">29 mei 2024</div>
                    </div>
                </div>
                </div>

        </div>
      <Footer />
      </body>
    </div>
  );
};

export default Home;
