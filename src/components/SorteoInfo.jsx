import React from 'react';
import sorteo from '../data/Sorteo.json'

function SorteoInfo() {
  return (
    <div className="bg-[#1a428a] p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4 rounded-md shadow-sm">
      <div className="flex justify-center items-center">
        <div className="flex flex-col sm:flex-row sm:space-x-4 md:space-x-6 lg:space-x-8">
          <div className="flex items-center justify-center mb-2 sm:mb-0">
            <span className="font-bold text-[#e9be6c] text-xl sm:text-2xl md:text-3xl mr-2">SORTEO:</span>
            <span className="text-[#e9be6c] text-xl sm:text-2xl md:text-3xl">{sorteo.sorteo}</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="font-bold text-[#e9be6c] text-xl sm:text-2xl md:text-3xl mr-2">FECHA:</span>
            <span className="text-[#e9be6c] text-xl sm:text-xl md:text-3xl">{sorteo.fecha}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SorteoInfo;
