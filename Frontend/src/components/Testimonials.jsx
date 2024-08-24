import React from 'react';

const testimonials = [
  {
    name: 'Anushka Singh',
    position: 'Member',
    quote: 'The classes at Mukta Dance & Fitness Academy have transformed my fitness journey. Mukta Mam is a top-notch, and her community is incredibly supportive.',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Reema Singh',
    position: 'Member',
    quote: 'A fantastic place for anyone looking to stay fit and learn dance. The variety of classes and professional staff make every session enjoyable.',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Seema Goswami',
    position: 'Member',
    quote: 'As a woman who has been associated with this academy for 5 years now, I feel this place is a one stop for all the fun, fitness and socialising. It is not just a place for zumba but for many other fitness activities like aerobics, step aerobics, Tabata, HIIT, Pilates, yoga, Bhangra, Bollywood and much more.',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Nidhi Gupta',
    position: 'Member',
    quote: 'I am so glad that I found mukta maam and her awesome zumba classes. She is so enthusiastic, energetic and knowledgeable-not to mention a great dancer!.Though I m online student still I can connect with her as if I am present in her academy.',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Ritu Mishra',
    position: 'Member',
    quote: 'Mukta academy is one of the finest Zumba classes situated in Dwarka. Every day I feel extremely enthusiastic to attend my class and this says a lot about the trainer. She is extremely hardworking and focuses on every student individually and diligently. It’s been 2 months since I joined and I can feel the energy and my body is toned considering I am a mother of 24 yr old.',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Vandana Bansal',
    position: 'Member',
    quote: 'One stop shop for all fitness sessions. In a week, Zumba, Steppers, Aerobics, Bhangra, Bollywood, Yoga, Pilates and many more workouts are done. A new day and a new workout. The instructor, the coach, Mukta, is full of energy and positivity. She has her unique ways of motivating and convincing her clients to smile and do their exercises for the one hour of good health and staying fit.',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Ruchi Tanwar',
    position: 'Member',
    quote: 'I’ve been with her for more than 2years now. She’s helped me improve my strength & flexibility, and increase my endurance. Every training session is upbeat and positive. She customizes her fitness program to meet our individual needs and doesn’t repeat workouts.',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Vakula Sarthy',
    position: 'Member',
    quote: 'Highly recommend Mukta Dance and Fitness Academy!! Mukta ma’am is incredible, has an infectious energy and is a wonderful instructor. Join to experience fitness in a fun way!',
    image: 'https://via.placeholder.com/100'
  }
];

const Testimonials = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-pink-500">What Our Members Say</h2>
        
        {/* 5-Star Rating Highlight */}
        <p className="text-center text-lg font-bold text-yellow-400 mb-12">
          We have a 5-star rating on Google!
        </p>
        
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
