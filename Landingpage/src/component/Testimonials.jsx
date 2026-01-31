import React from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="mt-24 px-4 tracking-wide">
      <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl font-bold mb-16">
        What People Are Saying
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Testimonial Text */}
            <p className="text-neutral-300 leading-relaxed text-base">
              “{testimonial.text}”
            </p>

            {/* User Info */}
            <div className="flex items-center mt-8">
              <img
                className="w-12 h-12 rounded-full border border-neutral-600 object-cover"
                src={testimonial.image}
                alt={testimonial.user}
              />

              <div className="ml-4">
                <h6 className="font-semibold text-lg">
                  {testimonial.user}
                </h6>
                <span className="text-sm text-neutral-500 italic">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
