import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <section className="mt-24 px-4">
      <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wider mb-16">
        Pricing
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className={`relative rounded-2xl border border-neutral-700 bg-neutral-900 p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl ${
              option.title === "Pro"
                ? "border-orange-500 shadow-orange-500/20"
                : ""
            }`}
          >
            {/* Most Popular Badge */}
            {option.title === "Pro" && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-400 text-sm px-4 py-1 rounded-full font-semibold">
                Most Popular
              </span>
            )}

            {/* Title */}
            <h3 className="text-3xl font-semibold mb-6 text-center">
              {option.title}
            </h3>

            {/* Price */}
            <div className="text-center mb-8">
              <span className="text-5xl font-bold mr-2">
                {option.price}
              </span>
              <span className="text-neutral-400 text-lg">/month</span>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {option.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-orange-400 w-5 h-5" />
                  <span className="text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <a
              href="#"
              className="block text-center w-full py-3 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 transition"
            >
              Subscribe
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
