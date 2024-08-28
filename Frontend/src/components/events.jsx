import dandiya1 from './assets/Events/dandiya1.jpg';
import dandiya2 from './assets/Events/dandiya2.jpg';
import dandiya3 from './assets/Events/dandiya3.jpg';
import marathon1 from './assets/Events/marathon1.jpg';
import marathon2 from './assets/Events/marathon2.jpg';
import marathon3 from './assets/Events/marathon3.jpg';
import wedding1 from './assets/Events/wedding1.jpg';
import wedding2 from './assets/Events/wedding2.jpg';
import wedding3 from './assets/Events/wedding3.jpg';
import corporate1 from './assets/Events/corporate1.jpg';
import corporate2 from './assets/Events/corporate2.jpg';
import corporate3 from './assets/Events/corporate3.jpg';

const Events = () => {
  return (
    <div className="bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Dandiya Nights Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">Dandiya Nights</h2>
          <p className="text-center text-white mb-8">
            Experience the vibrant and energetic Dandiya Nights with us! Our events are filled with traditional music, 
            lively dance performances, and an atmosphere that brings people together. Whether you're a beginner or an 
            experienced dancer, our Dandiya Nights promise a night of fun, rhythm, and cultural celebration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src={dandiya1} alt="Dandiya Night 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src={dandiya2} alt="Dandiya Night 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src={dandiya3} alt="Dandiya Night 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Marathon Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">Marathon Events</h2>
          <p className="text-center text-white mb-8">
            Join us in the spirit of fitness and fun! Our Marathon events are designed to inspire and energize. 
            Whether you're a seasoned runner or just starting, we create an inclusive environment where everyone can thrive. 
            Experience the thrill of the race, the joy of movement, and the camaraderie of fellow participants.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src={marathon1} alt="Marathon Event 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src={marathon2} alt="Marathon Event 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src={marathon3} alt="Marathon Event 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Wedding Choreography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">Wedding Choreography</h2>
          <p className="text-center text-white mb-8">
            Make your special day unforgettable with our bespoke wedding choreography services. From traditional dance forms 
            to contemporary moves, we craft performances that reflect your unique love story. Our expert choreographers work 
            closely with you to ensure every step is perfect, creating memories that last a lifetime.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src={wedding1} alt="Wedding Choreography 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src={wedding2} alt="Wedding Choreography 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src={wedding3} alt="Wedding Choreography 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Corporate Events Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">Corporate Events</h2>
          <p className="text-center text-white mb-8">
            Elevate your corporate gatherings with dynamic and engaging dance performances. Our corporate event services blend 
            professionalism with creativity, ensuring your event stands out. Whether it's a team-building activity or a grand 
            celebration, we deliver experiences that inspire and impress.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src={corporate1} alt="Corporate Event 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src={corporate2} alt="Corporate Event 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src={corporate3} alt="Corporate Event 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;