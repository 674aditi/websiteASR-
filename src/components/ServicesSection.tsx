import image5 from '../assets/image5.png';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

const services = [
    { title: 'UI/UX Design', description: 'We are excited to invite you to the upcoming UI/UX session.' },
    { title: 'Web Design', description: 'We are excited to invite you to the upcoming web design session.' },
    { title: 'Digital Marketing', description: 'We are excited to invite you to the upcoming marketing session.' }
];

const ServicesSection = () => {
    return (
        <section className="py-12 px-6 bg-gradient-to-r from-white to-[#DAFBFC] flex flex-col md:flex-row items-start">
            {/* Left Text Section */}
            <div className="w-full md:w-1/3 pr-6 flex-shrink-0 text-center md:text-left">
                <h3 className="text-red-500 text-2xl md:ml-20">Services</h3>
                <h2 className="text-3xl font-bold text-gray-900 leading-tight md:ml-20">
                    I Provide <br />
                    wide range of <br />
                    Digital Services
                </h2>
                <div className="w-full md:w-50 mt-4 flex justify-center md:justify-end bg-white p-2 space-x-4">
                    <CircleArrowLeft color="grey" size={48} />
                    <CircleArrowRight color="red" size={48} />
                </div>
            </div>

            {/* Services Cards Section */}
            <div className="flex flex-wrap justify-center md:flex-nowrap gap-6 md:gap-12 overflow-x-auto pb-10 w-full md:w-2/3">
                {services.map((service, index) => (
                    <div key={index} className="p-6 bg-white shadow-lg rounded-lg w-80 h-auto flex-shrink-0 text-center">
                        {/* Service Icon */}
                        <div className="flex justify-center mb-4">
                            <div className="w-50 mt-4 flex items-center justify-center bg-white p-2">
                                <img 
                                    src={image5} 
                                    alt="Service Icon" 
                                    className="w-16 h-16 object-cover rounded-none shadow-lg"
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
