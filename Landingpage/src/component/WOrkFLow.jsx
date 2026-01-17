import React from "react";
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-24 px-4">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide font-semibold">
        Accelerate Your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
          Coding Workflow
        </span>
      </h2>

      {/* Content */}
      <div className="flex flex-wrap justify-center items-center mt-16 gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-4">
          <img
            src={codeImg}
            alt="Code"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Checklist Section */}
        <div className="w-full lg:w-1/2 pt-6">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start mb-10">
              {/* Icon */}
              <div className="flex justify-center items-center h-10 w-10 rounded-full bg-neutral-900 text-green-400 mr-6 shrink-0">
                <CheckCircle2 size={22} />
              </div>

              {/* Text */}
              <div>
                <h5 className="text-xl font-medium mb-1">
                  {item.title}
                </h5>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
