
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
            <img src="/path/to/dandiya1.jpg" alt="Dandiya Night 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/path/to/dandiya2.jpg" alt="Dandiya Night 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/path/to/dandiya3.jpg" alt="Dandiya Night 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
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
            <img src="/path/to/marathon1.jpg" alt="Marathon Event 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/path/to/marathon2.jpg" alt="Marathon Event 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/path/to/marathon3.jpg" alt="Marathon Event 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
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
            <img src="/path/to/wedding1.jpg" alt="Wedding Choreography 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/path/to/wedding2.jpg" alt="Wedding Choreography 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/path/to/wedding3.jpg" alt="Wedding Choreography 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
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
            <img src="/path/to/corporate1.jpg" alt="Corporate Event 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/path/to/corporate2.jpg" alt="Corporate Event 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/path/to/corporate3.jpg" alt="Corporate Event 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
