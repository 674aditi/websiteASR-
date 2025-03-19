import image5 from '../assets/image5.png';
// import image5 from '../src/assets/image5.png';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

const services = [
    { title: 'UI/UX Design', description: 'We are excited to invite you to the upcoming UI/UX session.' },
    { title: 'Web Design', description: 'We are excited to invite you to the upcoming web design session.' },
    { title: 'Digital Marketing', description: 'We are excited to invite you to the upcoming marketing session.' }
];

const ServicesSection = () => {
    return (
        <section className="py-12 px-6 bg-gradient-to-r from-white to-[#DAFBFC] flex flex-col md:flex-row items-center md:items-start">
            {/* Left Text Section */}
            <div className="w-full md:w-1/3 pr-6 flex-shrink-0 text-center md:text-left">
                <h3 className="text-red-500 text-2xl ml-0 md:ml-20">Services</h3>
                <h2 className="text-3xl font-bold text-gray-900 leading-tight ml-0 md:ml-20">
                    I Provide <br />
                    wide range of <br />
                    Digital Services
                </h2>
                <div className="w-full md:w-50 mt-4 flex flex-row items-center justify-center md:justify-end bg-white p-2 space-x-4">
                    <CircleArrowLeft color="grey" size={48} />
                    <CircleArrowRight color="red" size={48} />
                </div>
            </div>

            {/* Services Cards Section */}
            <div className="flex flex-col md:flex-row gap-12 pb-10 w-full md:w-2/3">
                {services.map((service, index) => (
                    <div key={index} className="p-6 bg-white shadow-lg rounded-lg w-full md:w-80 h-auto md:h-80 flex-shrink-0 text-center">
                        {/* Service Icon */}
                        <div className="flex justify-center mb-4">
                            <div className="w-full mt-4 flex flex-row items-center justify-center bg-white p-2 space-x-4">
                                <img 
                                    src={image5} 
                                    alt="Profile" 
                                    className="w-15 h-15 object-cover rounded-none shadow-lg"
                                />
                            </div>
                        </div>
                        <h4 className="font-bold text-xl">{service.title}</h4>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
