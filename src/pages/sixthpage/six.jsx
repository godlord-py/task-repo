import React from 'react';

const SixthPage = () => {
    const FiveStarSVG = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="orange" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    return (
        <div className="bg-white min-h-screen mt-20 relative">
            <div className="flex p-2 justify-center text-yellow-500 font-bold">CLIENT STORIES</div>
            <div className="flex mt-2 p-2 ml-15 text-green-900 text-4xl font-bold justify-center text-center">What Our Supporters Say</div>
            <div className=" absolute mt-32 w-11/12 grid grid-cols-1 md:grid-cols-3 gap-6" style={{ top: "10%", left: "20%", transform: "translate(-15%, -30%)" }}>
                <div className="bg-[#fff8e8] p-2 rounded-md border border-gray-400  text-center h-full transition duration-500 hover:bg-red-200">
                <div className="flex ml-1 text-yellow-500 font-bold justify-start align-left"> <FiveStarSVG /><FiveStarSVG /><FiveStarSVG /><FiveStarSVG /><FiveStarSVG /></div>
                    <p className="text-start p-1 text-base text-xl text-green-900">
                                            Jan Seva Sankalp Foundation has transformed my life, providing educational
                                            opportunities that I never thought
                                            possible.</p>
                </div>
                <div className="bg-[#fff8e8] p-2 rounded-md border border-gray-400  text-center h-full transition duration-500 hover:bg-blue-200">
                <div className="flex ml-1 text-yellow-500 font-bold justify-start align-left"><FiveStarSVG /><FiveStarSVG /><FiveStarSVG /><FiveStarSVG /><FiveStarSVG /></div>
               
                    <p className="text-start p-1 text-base text-xl text-green-900">The commitment of the foundation to 
                    women's empowerment is truly inspiring and has made a significant impact on many lives.</p>
                </div>
                <div className="bg-[#fff8e8] p-2 rounded-md border border-gray-400 text-center h-full transition duration-500 hover:bg-green-200">
                <div className="flex ml-1 text-yellow-500 font-bold justify-start align-left"><FiveStarSVG /><FiveStarSVG /><FiveStarSVG /><FiveStarSVG /><FiveStarSVG /></div>
                  
                    <p className="text-base p-1 text-start text-xl text-green-900">Jan Seva Sankalp Foundation's dedication to community welfare is commendable, creating a positive change in society.</p>
                </div>
            </div>
            <div className=" absolute mt-32 w-11/12 grid grid-cols-1 md:grid-cols-3 gap-6" style={{ top: "40%", left: "20%", transform: "translate(-15%, -30%)" }}>
                <div className="bg-[#fff8e8] p-2 rounded-md border border-gray-400  text-center h-full transition duration-500 hover:bg-yellow-200">
                <div className="flex ml-1 text-yellow-500 font-bold justify-start align-left"><FiveStarSVG /><FiveStarSVG /><FiveStarSVG /><FiveStarSVG /></div>
                
                    <p className="text-start p-1 text-base text-xl text-green-900">I applaud the foundation's efforts indriving innovation in education and skill development, truly making a difference.</p>
                </div>
                <div className="bg-[#fff8e8] p-2 rounded-md border border-gray-400  text-center h-full transition duration-500 hover:bg-orange-200">
                <div className="flex ml-1 text-yellow-500 font-bold justify-start align-left"><FiveStarSVG /><FiveStarSVG /><FiveStarSVG /><FiveStarSVG /><FiveStarSVG /></div>
                  
                    <p className="text-start p-1 text-base text-xl text-green-900">Jan Seva Sankalp Foundation's dedication to community welfare is helpful.</p>
                </div>
                <div className="bg-[#fff8e8] p-2 rounded-md border border-gray-400  text-center h-full transition duration-500 hover:bg-gray-200">
                <div className="flex ml-1 text-yellow-500 font-bold justify-start align-left"><FiveStarSVG /><FiveStarSVG /><FiveStarSVG /><FiveStarSVG /></div>
                 
                    <p className="text-base p-1 text-start text-xl text-green-900">Joining Jan Seva Sankalp Foundation was a profound decision, as I have witnessed firsthand the positive impact on society.</p>
                </div>
            </div>
            </div>
    )
}

export default SixthPage;