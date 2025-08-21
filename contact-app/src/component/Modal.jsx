import React from "react";
import { IoIosCut } from "react-icons/io";
import { createPortal } from "react-dom";

const Modal = ({ onClose, isOpen, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      {/* Overlay with blur + fade */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-40 transition-opacity duration-300"
        onClick={onClose}
      >
        {/* Modal Box */}
        <div
          className="w-[70%] max-w-4xl min-h-[300px] bg-white p-6 rounded-2xl shadow-2xl relative flex flex-col animate-fadeIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-red-100 rounded-full shadow-md transition duration-200"
          >
            <IoIosCut className="text-2xl text-gray-700 hover:text-red-500" />
          </button>

          {/* Modal Content */}
          <div className="flex-1 flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
