import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import CryptoList from './components/CrtptoList';

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      setData(response.data);
    };
    getData();
  }, []);

  
  const start = (page - 1) * postPerPage;
  const pageData = data.slice(start, start + postPerPage);

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col justify-between">
      <div>
        <h1 className="text-yellow-400 text-center font-extrabold text-5xl hover:underline cursor-pointer mb-10">
          Crypto Gallery
        </h1>
  
        <CryptoList crypto={pageData} />
      </div>
  
      <Pagination totalPosts={data.length} postPerPage={postPerPage} setPage={setPage} />
    </div>
  );
  
};

export default App;


