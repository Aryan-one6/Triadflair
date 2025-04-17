import { Description } from "@headlessui/react";
// import { StarsCanvas } from "./canvas";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
// import {Aryan, vinayak, Saumya, Suryansh, Rohit} from "../assets" ;
import Aryan from './Aryan.jpg';


const person = [
    {
        name: "Aryan",
        href: "#",
        Description: "Full Stack Dev.",
        imageSrc:"./Team/Aryan.jpg",
    },
    {
        name: "Suryansh",
        href: "#",
        Description: "Full Stack Dev.",
        imageSrc: "./Team/Suryansh.jpg",
    },
    
    {
        name: "Saumya ",
        href: "#",
        Description: "Soft. Developer",
        imageSrc: "./Team/Saumya.jpg",
    },
    {
        name: "Vinayak",
        href: "#",
        Description: "AI Engineer",
        imageSrc: "./Team/vinayak.jpg",
    },
    {
        name: "Sumit",
        href: "#",
        Description: "Application Dev.",
        imageSrc: "./Team/Sumit.jpg",
    },
    
];

export default function Team({ TopPadding = "" }) {
    return (
        <div className="bg-primary"> 
            <div
                className={`py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8 ${TopPadding}`}
            >
                <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                    <h2 className={`${styles.sectionHeadText}`}>
                        Our Team
                    </h2>
                </div>

                <div className="mt-4 flow-root">
                    <div className="-my-2">
                        <div className="relative box-content h-[22.3rem] overflow-x-auto py-2 xl:overflow-visible">
                            <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                                {person.map((person) => (
                                    <a
                                        key={person.name}
                                        href={person.href}
                                        className="relative flex h-[22rem] w-72 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        >
                                            <img
                                                alt=""
                                                src={person.imageSrc}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                        />
                                        <span className="relative mt-auto text-center text-xl font-bold text-white">
                                            {person.name}
                                        </span>
                                        <p className="relative text-center text-sm  text-secondary">
                                            {person.Description}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 px-4 sm:hidden">
                    <a
                        href="#"
                        className="block text-sm font-semibold text-white "
                    >
                        Scroll
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
