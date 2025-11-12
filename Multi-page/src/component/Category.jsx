import React, { useEffect, useState, useRef } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Category = () => {
    const [slide, setSlide] = useState(0);
    const [categories, setCategories] = useState([]);
    const containerRef = useRef(null); // reference for the scroll container

    const fetchCategory = async () => {
        try {
            const response = await fetch("http://localhost:3000/foods");
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    // Scroll width for each step
    const scrollAmount = 120; // adjust based on your card width + gap

    const nextSlide = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            setSlide((prev) => Math.min(prev + 1, categories.length - 1));
        }
    };

    const prevSlide = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            setSlide((prev) => Math.max(prev - 1, 0));
        }
    };

    return (
        <div className="max-w-[1200px] mx-auto px-4 py-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-[25px] font-bold">What's on your mind?</h2>
                <div className="flex">
                    <button 
                        className="flex justify-center items-center w-[40px] h-[40px] bg-gray-200 hover:bg-gray-300 rounded-full mx-1" 
                        onClick={prevSlide}
                        disabled={slide === 0}
                    >
                        <FaArrowCircleLeft size={20} />
                    </button>
                    <button 
                        className="flex justify-center items-center w-[40px] h-[40px] bg-gray-200 hover:bg-gray-300 rounded-full mx-1" 
                        onClick={nextSlide}
                        disabled={slide >= categories.length - 1}
                    >
                        <FaArrowCircleRight size={20} />
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div 
                ref={containerRef} 
                className="flex gap-6 overflow-x-auto scrollbar-hide"
            >
                {categories.length > 0 ? (
                    categories.map((cat) => (
                        <div 
                            key={cat.id} 
                            className="flex flex-col items-center min-w-[100px] cursor-pointer hover:scale-105 transition-transform"
                        >
                            <img 
                                src={cat.image} 
                                alt={cat.name} 
                                className="w-20 h-20 object-cover rounded-full shadow-md"
                            />
                            <p className="mt-2 text-sm font-medium text-gray-700">{cat.name}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Loading categories...</p>
                )}
            </div>
        </div>
    );
};

export default Category;
