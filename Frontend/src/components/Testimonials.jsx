import React from 'react';

const testimonials = [
  {
    name: 'Anushka',
    position: 'Dance Enthusiast',
    quote: 'The classes at Mukta Dance & Fitness Academy have transformed my fitness journey. The instructors are top-notch, and the community is incredibly supportive.',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Reema',
    position: 'Fitness Coach',
    quote: 'A fantastic place for anyone looking to stay fit and learn dance. The variety of classes and professional staff make every session enjoyable.',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Vartika',
    position: 'Health Blogger',
    quote: 'I’ve tried many fitness centers, but Mukta Dance & Fitness Academy stands out. The energy and enthusiasm of the team are unmatched!',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Sharuk khan',
    position: 'Professional Dancer',
    quote: 'Great place to improve your dance skills or start from scratch. The personalized attention and expert guidance make a big difference.',
    image: 'https://via.placeholder.com/100'
  }
];

const Testimonials = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-pink-500">What Our Members Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-500 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 object-cover rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
