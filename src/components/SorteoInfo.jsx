import React from 'react';
import sorteo from '../data/Sorteo.json'

function SorteoInfo() {
  return (
    <div className="bg-[#1a428a] p-4 mb-4 rounded-md shadow-sm">
      <div className="flex justify-center items-center">
        <div className="flex space-x-8">
          <div className="flex items-center">
            <span className="font-bold text-[#e9be6c] text-3xl mr-2">SORTEO:</span>
            <span className="text-3xl">{sorteo.sorteo}</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold text-[#e9be6c] text-3xl mr-2">FECHA:</span>
            <span className="text-3xl">{sorteo.fecha}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SorteoInfo;