import React from 'react';

const CryptoList = ({ crypto }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 justify-items-center">
      {crypto.map((item) => (
        <div
          key={item.id}
          className="bg-white text-black w-72 h-72 rounded-full shadow-md flex flex-col items-center justify-center hover:scale-105 transition-all p-4"
        >
          <img src={item.image} alt={item.name} className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-green-600 font-bold">${item.current_price}</p>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;



