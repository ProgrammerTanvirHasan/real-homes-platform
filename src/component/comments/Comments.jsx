

import React, { useState } from 'react';

const Comments = () => {
    const [showFirst, setShowFirst] = useState(true);

    const handleChange = () => {
        setShowFirst(!showFirst);
    };

    return (
      <div className='w-[95%] mx-auto'>
           <button 
          className="px-4 py-2 bg-blue-400 text-white font-bold rounded mt-4" 
          onClick={handleChange}
        >
          View Comments
        </button>

       
        <div className={`flex gap-4 my-16 ${showFirst ? '' : 'hidden'}`}>
        <div className='flex-row lg:flex'>
        <div className="w-full lg:w-3/5 pl-2">
            <h2 className="text-4xl font-bold text-white mt-16">What Our Client Say</h2>
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value="1" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value="2" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value="3" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value="4" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value="5" />
            </div>
            <p className="text-white font-semibold mt-4">Thanks to Real Home Company, I am now living in my dream home. Their exceptional service and expertise made all the difference. I highly recommend them to anyone looking to buy or sell a home. You won't be disappointed!</p>
            <div className="flex justify-between mt-12">
              <div className="flex gap-4">
                <img className="w-28 h-28 rounded-tr-lg" src="https://i.ibb.co/jZFDQBT/pensive-mature-businessman-holding-paper-cup-street-74855-3604.jpg" alt="" />
                <div>
                  <p className="text-white text-xl font-bold mt-4">Alexcan micelito</p>
                  <p className="text-gray-500 font-bold">CEO of Company</p>
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-8xl">99</p>
              </div>
            </div>
          </div>
       
          <div>
            <img className="pr-2 relative" src="https://i.ibb.co/DLn3YPz/istockphoto-1410700474-1024x1024.jpg" alt="" />
          </div>
       
        </div>



        </div>
        <div className={`flex gap-4 my-16 ${showFirst ? 'hidden' : ''}`}>
          <div className='flex-row lg:flex'>
          <div className="w-full lg:w-3/5 pl-2">
            <h2 className="text-4xl font-bold text-white mt-16">What Our Client Say</h2>
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value="1" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value="2" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value="3" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value="4" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value="5" />
            </div>
            <p className="text-white font-semibold mt-4">I recently had the pleasure of working with Real Home to find my new home. From the moment I reached out, their team was incredibly professional, knowledgeable, and dedicated to helping me find the perfect property.</p>
            <div className="flex justify-between mt-12">
              <div className="flex gap-4">
                <img className="w-28 h-28 rounded-tr-lg" src="https://i.ibb.co/TRQWCgk/portrait-professional-businesswoman-office-portrait-office-girl-businesswoman-face-179935-48168.jpg" alt="" />
                <div>
                  <p className="text-white text-xl font-bold mt-4">Mrs.India</p>
                  <p className="text-gray-500 font-bold">CEO of Company</p>
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-8xl">99</p>
              </div>
            </div>
          </div>
          <div>
            <img className="pr-2 relative" src="https://i.ibb.co/DLn3YPz/istockphoto-1410700474-1024x1024.jpg" alt="" />
          </div>
          </div>
        </div>

         
      </div>
    );
};

export default Comments;
