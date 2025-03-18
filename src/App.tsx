import image2 from '../src/assets/image2.png';
import Navbar from './components/Navbar';
import ServicesSection from './components/ServicesSection';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import Last from './components/Last';
import { Camera, Facebook, Twitter } from 'lucide-react';

const HeroSection = () => {
  return (
    <header className="flex flex-wrap md:flex-nowrap items-center gap-8 py-12 bg-gradient-to-r from-white to-[#DAFBFC] px-6">
      {/* Profile Image - Bigger and aligned */}
      <img 
        src={image2} 
        alt="Profile" 
        className=" w-200 h-150 max-w-xs md:max-w-3xl object-cover rounded-none shadow-lg"
      />

      {/* Text Section - Closer to Image */}
      <div className="md:pl-16 max-w-lg text-center md:text-left">
        <h2 className="text-3xl md:text-5xl text-red-500 font-medium">Hello, I'm Nancy</h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mt-2">
          Professional <br />
          UI/UX Designer <br />
          & Web Developer
        </h1>

        {/* Button */}
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white text-lg rounded-lg flex items-center gap-3 shadow-md">
          <span>Hire me now!</span>
          <span>&rarr;</span>
        </button>

        <div className="w-full mt-4 flex justify-center md:justify-start bg-white p-2 space-x-4">
          <Camera color="blue" size={48} />
          <Twitter color="blue" size={48} />
          <Facebook color="blue" size={48} />
        </div>
      </div>
    </header>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutUs />
      <Portfolio />
      <Last />
    </>
  );
};

export default App;
