import React from 'react';
import Image1 from "/home/godlord/intern/task/task-page/src/assets/oldman.png";
import Image2 from "/home/godlord/intern/task/task-page/src/assets/fourguys.png";
import Image3 from "/home/godlord/intern/task/task-page/src/assets/guy.png";

const ThirdPage = () => {
    const programs = [
        {
            image: Image1,
            title: "Education Empowerment",
            info: "Transforming lives through quality education and community welfare",
            readmore: "Read More",
        },
        {
            image: Image2,
            title: "Women's Empowerment",
            info: "Empowering women through education and skill-building and mentoring programs",
            readmore: "Read More",
        },
        {
            image: Image3,
            title: "Community Welfare",
            info: "Enhancing society thriving through community-driven welfare initiatives",
            readmore: "Read More",
        },
    ];

    return (
        <div className="first bg-[#fff8e8] min-h-screen relative">
            <div className="flex p-2 text-yellow-500 font-bold justify-center align-center">DIVERSE PROGRAMS</div>
            <div className="flex text-green-900 text-4xl font-bold justify-center align-center">Explore Our Transformational Programs</div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {programs.map((program, index) => (
                    <div key={index} className="rounded-r-3xl bg-white w-96 p-2 rounded-md border border-gray-300 text-center transition duration-500 hover:bg-green-200 shadow-sm transform hover:scale-105 hover:shadow-md hover:border-green-600">
                        <img src={program.image} alt={`Program ${index + 1}`} className="w-full h-80 object-cover mb-4 rounded-t-3xl" />
                        <p className="p-1 text-xl font-bold text-green-900">{program.title}</p>
                        <p className="text-base text-left font-bold text-gray-500 p-2">{program.info}</p>
                        <p className="text-base text-left text-green-600 p-3">{program.readmore}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThirdPage;
