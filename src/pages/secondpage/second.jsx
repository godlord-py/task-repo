/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image2 from "/home/godlord/intern/task/task-page/src/assets/pic2.png";

const SecondPage = () => {
    return (    
        <div className="second bg-white min-h-screen relative">
            <img
                src={Image2}
                className="absolute left-20 top-10  w-1/3 h-3/4 object-cover transition-all duration-1000 rounded-3xl hover:rounded-r-full"
            />
            <div className="p-10 text-yellow-500 font-bold text-center absolute" style={{ top: "10%", left: "54.2%", transform: "translate(-15%, -30%)" }}>OUR STORY</div>
            <div className="p-3 py-2 font-bold mt-10 text-green-900 text-4xl absolute" style={{ top: "25%", left: "60%", transform: "translate(-15%, -30%)" }}>
                <h1>
                    Empowering Lives<br />
                    Through Education and<br />Community Welfare
                </h1>
                <p className="p-3 py-8 text-md mt-4 p-2 text-gray-400 text-base">
                    Jan Seva Sankalp Foundation is a beacon of hope focusing<br/> 
                    on educational welfare and women's empowerment. Our<br/>
                    efforts enhance society's well-being and create positive<br/>
                    change.
                </p>
                <button className="p-4 text-green-600 bg-white border-2 border-green-600 text-xl px-6 py-3 rounded-full hover:bg-green-600 hover:text-white">
                    Get Involved
                </button>
            </div>

        </div>
    );
};

export default SecondPage;
