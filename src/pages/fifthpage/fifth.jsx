/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Image1 from "/home/godlord/intern/task/task-page/src/assets/firstpage.png";
import Image2 from "/home/godlord/intern/task/task-page/src/assets/pic2.png";
const FifthPage = () => {
    return (
        <div className="bg-[#fff8e8] min-h-screen mt-96 relative">
            <div className="flex p-2 justify-center text-yellow-500 font-bold">JOURNEY IN IMAGES</div>
            <div className="flex mt-2 p-2 ml-15 text-green-900 text-4xl font-bold justify-center text-center">Explore Our Impactful Journey Through<br/>Images</div>
            <img
                src={Image2}
                alt="image not loaded"
                className="absolute mt-10 left-20 top-50 w-1/4 h-8/12 rounded-3xl transition-all duration-1000 hover:opacity-70 hover:shadow-lg"
            />
            <img
                src={Image1}
                alt="image not loaded"
                className="absolute mt-10 ml-20 left-96 top-50 w-1/4 h-8/12 rounded-3xl transition-all duration-1000 hover:opacity-70 hover:shadow-lg"
            />
            <img
                src={Image2}
                alt="image not loaded"
                className="absolute mt-10 left-2/3 top-50 w-1/4 h-8/12  rounded-3xl transition-all duration-1000 hover:opacity-70 hover:shadow-lg"
                />
            </div>
    )
}
export default FifthPage;