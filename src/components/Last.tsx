// import feedbackImage1 from '../assets/feedback1.png'; // Adjust paths as needed
// import feedbackImage2 from '../assets/feedback2.png';
// import feedbackImage3 from '../assets/feedback3.png';
// import logo from '../assets/logo.png';
import image9 from '../assets/image9.png';
import image2 from '../assets/image2.png';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

import { Facebook, Twitter, Instagram } from 'lucide-react';

const Last = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white pt-10  ">
    <div className="w-full bg-white">
      {/* Feedback Section */}

      
      <div className="text-left py-10 px-20">
  <h2 className="text-4xl font-semibold text-gray-800">
    Clients are satisfied with our work, <br /> view feedback
  </h2>

  <div className="relative">
  {/* Your main content goes here */}

  {/* Arrows Positioned at the Top Right */}
  <div className="absolute bottom-10 right-10 flex items-center space-x-4 bg-white p-2 shadow-lg rounded-lg">
    <CircleArrowLeft color="black" size={28} />
    <CircleArrowRight color="red" size={28} />
  </div>
</div>
        
        <div className="mt-6 flex justify-center gap-20 mb-30">
        <img 
          src={image2} 
          alt="Profile" 
          className="w-110 h-110 object-cover rounded-none shadow-lg "
        />
        <img 
          src={image9} 
          alt="Profile" 
          className="w-200 h-110 object-cover rounded-none shadow-lg"
        />
      </div>

      </div>

      {/* Service Inquiry Section */}
      <div className="relative">
  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-xl rounded-4xl p-6 w-2/3 text-center">
    <h3 className="text-lg font-semibold text-gray-900">
      Can't find your desired service?
    </h3>
    <p className="text-red-500 text-sm mt-2">Let us know 24/7 in 123456</p>
    <div className="mt-4 flex justify-center gap-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">More</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Info &gt;</button>
    </div>
  </div>
</div>

      {/* Footer */}
      <footer className="bg-blue-700 text-white mt-12 py-6 text-center">
        {/* <img src={logo} alt="Company Logo" className="mx-auto w-32" /> */}
        <div className="mt-4 space-x-6">
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Service</a>
          <a href="#" className="text-white">Portfolio</a>
          <a href="#" className="text-white">Contact</a>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <Facebook className="text-white" />
          <Twitter className="text-white" />
          <Instagram className="text-white" />
        </div>
        <p className="mt-4">© 2021 All Rights Reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default Last;
