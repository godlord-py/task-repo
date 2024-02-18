/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { React} from 'react';
import Image1 from "/home/godlord/intern/task/task-page/src/assets/firstpage.png";
import Image2 from "/home/godlord/intern/task/task-page/src/assets/volunteers.png";

const FourthPage = () => {
    return (
        <div className="first bg-white min-h-screen relative">
            <div className="flex p-2 mt-10 ml-20 text-yellow-500 font-bold justify-start align-left">WHY CHOOSE US?</div>
            <div className="flex mt-2 p-2 ml-20 text-green-900 text-4xl font-bold justify-left align-left">Discover Our Unique Value Propositions</div>
            <img
                src={Image1}
                alt="image not loaded"
                className="absolute mt-10 left-20 top-50 w-1/4 h-2/3 object-cover rounded-3xl transition-all duration-1000 hover:opacity-70 hover:shadow-lg"
            />
            <img
                src={Image2}
                alt="image not loaded"
                className="absolute mt-10 right-20 top-50 w-7/12 h-2/3 object-cover rounded-3xl transition-all duration-1000 hover:opacity-70 hover:shadow-lg"
            />
            <div className=" absolute mt-32 w-11/12 grid grid-cols-1 md:grid-cols-3 gap-42" style={{ top: "85%", left: "17%", transform: "translate(-15%, -30%)" }}>
                <div className="bg-white p-2 rounded-md border-b border-gray-400 text-center h-full transition duration-500 hover:bg-red-200">
                <div className="flex ml-1 text-yellow-500 font-bold justify-start align-left">01</div>
                    <p className="flex p-1 text-xl justify-start text-green-900 font-bold">Personal Growth</p>
                    <p className="text-start p-1 text-base text-xl text-gray-400">Empowering individuals to achieve personal growth and success in their endeavors.</p>
                </div>
                <div className="bg-white p-2 rounded-md border-b border-gray-400 text-center h-full transition duration-500 hover:bg-blue-200">
                <div className="flex ml-1 text-yellow-500 font-bold justify-start align-left">02</div>
                    <p className="flex p-1 justify-start text-xl text-green-900 font-bold">Community Impact</p>
                    <p className="text-start p-1 text-base text-xl text-gray-400">Driving positive chnage through community welfare initiatives and programs.</p>
                </div>
                <div className="bg-white p-2 rounded-md border-b border-gray-400 text-center h-full transition duration-500 hover:bg-green-200">
                <div className="flex ml-1 text-yellow-500 font-bold justify-start align-left">03</div>
                    <p className="flex p-1 justify-start text-xl text-green-900 font-bold">Innovation in Education</p>
                    <p className="text-base p-1 text-start text-xl text-gray-400">Offering innovative eductional programs that nurture skills and knowledge.</p>
                </div>
            </div>
            <div className=" absolute mt-32 w-11/12 grid grid-cols-1 md:grid-cols-3 gap-42" style={{ top: "116%", left: "17%", transform: "translate(-15%, -30%)" }}>
                <div className="bg-white p-2 rounded-md  text-center h-full transition duration-500 hover:bg-yellow-200">
                <div className="flex ml-1 text-yellow-500 font-bold justify-start align-left">04</div>
                    <p className="flex p-1 text-xl justify-start text-green-900 font-bold">Women's Empowerment</p>
                    <p className="text-start p-1 text-base text-xl text-gray-400">Dedicated to fostering growth and opportunities for women in all aspects of life.</p>
                </div>
                <div className="bg-white p-2 rounded-md  text-center h-full transition duration-500 hover:bg-orange-200">
                <div className="flex ml-1 text-yellow-500 font-bold justify-start align-left">05</div>
                    <p className="flex p-1 justify-start text-xl text-green-900 font-bold">Inclusivity & Diversity</p>
                    <p className="text-start p-1 text-base text-xl text-gray-400">Promoting Inclusivity and diversity in all our programs and initiatives.</p>
                </div>
                <div className="bg-white p-2 rounded-md text-center h-full transition duration-500 hover:bg-gray-200">
                <div className="flex ml-1 text-yellow-500 font-bold justify-start align-left">06</div>
                    <p className="flex p-1 justify-start text-xl text-green-900 font-bold">Society Well-being</p>
                    <p className="text-base p-1 text-start text-xl text-gray-400">Enhancing society's quality of life through our welfare efforts and programs.</p>
                </div>
                
            </div>
        </div>
    );
};

export default FourthPage;
