/* eslint-disable jsx-a11y/alt-text */
import {React, useState, useEffect} from "react";
import Image from "/home/godlord/intern/task/task-page/src/assets/firstpage.png";
const FirstPage = () => {
        const [imagePosition, setImagePosition] = useState("top-16");
        useEffect(() => {
          setImagePosition("top-10");
        }, []);
    return (    
        <div className="first bg-[#fff8e8] min-h-screen relative">
            <div className="p-10 text-yellow-500 font-bold">INSPIRING CHANGE</div>
            <div className="p-3 font-bold mt-10 text-green-900 text-6xl absolute" style={{ top: "25%", left: "9%", transform: "translate(-15%, -30%)" }}>
                <h1>
                    Empowering<br />
                    Futures Through<br />Education
                </h1>
                <p className="p-3 text-xl mt-4 text-gray-400 text-base">
                    Join Jan Seva Sankalp Foundation in fostering personal and<br/> professional growth,
                    women's empowerment, and community<br/> welfare for a brighter future.
                </p>
                <button className="p-4 text-white bg-green-600 text-xl text-black px-6 py-3 rounded-full hover:bg-blue-600">
                    Get Involved
                </button>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white p-2 rounded-md border border-gray-400 text-center h-full transition duration-500 hover:bg-blue-300">
                    <p className="p-1 text-xl font-bold">100+</p>
                    <p className="text-base">Students Enrolled</p>
                </div>
                <div className="bg-white p-2 rounded-md border border-gray-400 text-center h-full transition duration-500 hover:bg-blue-300">
                    <p className="p-1 text-xl font-bold">20+</p>
                    <p className="text-base">Certified Trainers</p>
                </div>
                <div className="bg-white p-2 rounded-md border border-gray-400 text-center h-full transition duration-500 hover:bg-blue-300">
                    <p className="p-1 text-xl font-bold">4.9</p>
                    <p className="text-base">Google Rating</p>
                </div>
            </div>
            </div>
            <img
                src={Image}
                className={`absolute right-32 w-1/3 h-3/4 transition-all duration-1000 hover:rounded-l-full ${imagePosition}`}/>
        </div>
    );
};
export default FirstPage;
