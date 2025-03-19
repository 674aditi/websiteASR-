import image6 from '../assets/image6.png';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-50 to-white p-10 flex flex-col">
      <div className="w-full flex flex-col md:flex-row items-center gap-10">
        {/* Left Section: Text Content */}
        <div className="absolute top-10 left-10 w-3/4 md:w-1/4 text-center md:text-left">
          <h2 className="text-red-500 text-lg font-semibold mb-2">About Us</h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
            You Can Imagine <br /> I Can Do
          </h1>
          <div className="w-40 md:w-80 h-1 bg-red-500 mb-6 mx-auto md:mx-0"></div>
        </div>

        {/* Right Section: Image & About Me Card */}
        <div className=" relative w-full flex flex-col items-center md:items-end mt-20 md:mt-10 md:mr-50">
          {/* Profile Image */}
          <img 
            src={image6} 
            alt="Profile" 
            className="hidden md:block w-40 md:bottom-0 md:w-150 h-auto object-cover shadow-lg"
          />

          {/* About Me Box */}
          <div className="absolute md:bottom-10 -bottom-140 left-5 md:left-50 bg-white p-6 rounded-lg shadow-xl max-w-full md:max-w-lg text-center md:text-left">
            <h3 className="text-red-500 text-lg font-semibold border-b-2 border-red-500 pb-1">About Me</h3>
            <p className="text-gray-700 text-sm mt-2">
              I'm Aditi Kumari, a present 3rd-year undergraduate pursuing
              Information Technology Engineering from Jalpaiguri Government
              Engineering College. Coming from a family with an engineering
              background, I grew up discussing new technologies which made me
              curious, since childhood. However, because of my parents'
              transferable job, and the frequent change in schools, the friends
              surrounding me kept changing, which meant I lacked consistent
              companions who shared my interests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;