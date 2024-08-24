import React from 'react';


const Services = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-pink-500">Our Services</h2>
        
        {/* Batch Schedules */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-center mb-8 text-pink-400">Batch Schedules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <h4 className="text-xl font-semibold text-white mb-4">Morning Batches</h4>
              <ul className="list-disc list-inside text-white">
                <li>8:00 AM - 9:00 AM</li>
                <li>9:00 AM - 10:00 AM</li>
                <li>10:00 AM -11:00 AM</li>

              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <h4 className="text-xl font-semibold text-white mb-4">Evening Batches</h4>
              <ul className="list-disc list-inside text-white">
                <li>4:00 PM - 5:00 PM (Girls Dance Batch)</li> 
                <li>6:00 PM - 7:00 PM</li>
                <li>7:00 PM - 8:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Services Provided and Why Join Us */}
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          {/* What We Provide */}
          <div className="md:w-1/2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
            <h3 className="text-3xl font-semibold mb-6 text-center text-white">What We Provide</h3>
            <ul className="list-disc list-inside text-lg text-white space-y-4">
              <li>Zumba and Aerobics</li>
              <li>Power Yoga & Pilates</li>
              <li>Fuctional Strength Training</li>
              <li>Bollyfit & Bhangra</li>
              <li>Bollywood & Semi Classicals</li>
              <li>Wedding Choreography</li>
              <li>Dance Classes For Girls</li>
            </ul>
          </div>

          {/* Why Join Us */}
          <div className="md:w-1/2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
            <h3 className="text-3xl font-semibold mb-6 text-center text-white">Why Join Us</h3>
            <ul className="list-disc list-inside text-lg text-white space-y-4">
              <li>Experienced Instructors</li>
              <li>State-of-the-Art Facilities</li>
              <li>Personalized Attention</li>
              <li>Community and Support</li>
              <li>Flexible Scheduling</li>
              <li>Fun and Engaging Classes</li>
              <li>Affordable Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
