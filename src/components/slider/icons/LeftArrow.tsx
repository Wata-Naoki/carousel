import React from 'react';

export const LeftArrow = () => (
  <button
    type="button"
    className="bg-gray-200 focus:ring-2 ring-gray-300 hover:opacity-90 transition duration-400 rounded-full p-2 sm:p-3 md:p-4"
  >
    {/* 左の矢印 */}
    <svg
      className="sm:h-5 sm:w-5 md:h-7 md:w-7 lg:h-10 lg:w-10 h-3 w-3 text-white -rotate-90 mr-0.5 sm:mr-1"
      viewBox="0 0 24 24"
      fill="white"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    </svg>
  </button>
);
