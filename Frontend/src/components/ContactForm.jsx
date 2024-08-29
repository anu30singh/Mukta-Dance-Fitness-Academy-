
import ContactImage from '../assets/ContactUs.svg'; 

const ContactForm = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col lg:flex-row">
      {/* Left Image Section */}
      <div className="lg:w-1/2 flex items-center justify-center p-8">
        <img src={ContactImage} alt="Contact Us" className="w-full max-w-md" />
      </div>

      {/* Right Contact Us Information */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center p-8">
        <div className="max-w-md w-full bg-black text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-pink-500">Get in Touch</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <p className="mb-2">
              <span className="font-semibold">Phone:</span> (+91) 9650002213
            </p>
            <p className="mb-4">
              <span className="font-semibold">Email:</span> <a href="mailto:Manyasaxena2006@gmail.com" className="text-pink-500 hover:underline">info@example.com</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ZinMukta/videos/mukta-dance-fitness-academy-dwarka-sec-9-online-offline-session-with-certified-f/303138727901865/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
             
              <a href="https://www.instagram.com/zin_mukta/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
