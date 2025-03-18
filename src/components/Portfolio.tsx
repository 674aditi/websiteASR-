import { ArrowRight } from 'lucide-react';
import image7 from '../assets/image7.png';
import { Button } from './ui/button';

const PortfolioSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-white to-blue-100 pt-10 px-4 md:px-10">
      {/* Small Top Text */}
      <p className="text-red-500 text-xl md:text-2xl">Please look at this</p>

      {/* Main Title */}
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-semibold text-gray-900 mt-2 text-center">
        My Creative Portfolio
      </h1>

      {/* Image Section */}
      <div className="mt-6 flex justify-center w-full max-w-4xl">
        <img 
          src={image7} 
          alt="Portfolio" 
          className="w-full h-auto object-cover shadow-lg"
        />
      </div>

      {/* More Info Button */}
      <Button className="mt-6 border-2 border-red-500 text-red-500 px-4 py-2 rounded-md bg-white hover:bg-gray-100 transition duration-300 mb-10 flex items-center space-x-2">
        <span>More info</span> <ArrowRight size={24} />
      </Button>
    </div>
  );
};

export default PortfolioSection;