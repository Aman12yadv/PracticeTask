import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCards, removeCard, setCurrentPage } from '../redux/cardsSlice';

const Cards = () => {
  const dispatch = useDispatch(); 
  const { data, currentPage, cardsPerPage } = useSelector((state) => state.cards); 
 

  useEffect(() => {
 
  
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => dispatch(setCards(data)))
      .catch((error) => console.error('Error fetching data:', error));
  }, [dispatch]);

  
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  const handleClose = (id) => {
  
    dispatch(removeCard(id));
  };

  const paginate = (pageNumber) => {
    
    dispatch(setCurrentPage(pageNumber));
  };

  return (
  
    <div>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {currentCards.map((item, index) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
          >
           
            <button
              onClick={() => handleClose(item.id)}
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-900 font-bold text-2xl"
            >
              &times;
            </button>

         
            <img
              src={"https://picsum.photos/seed/${index + 1}/400/300"}
              alt="Random"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.body}</p>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={() => paginate(1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          1
        </button>
        <button
          onClick={() => paginate(2)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          2
        </button>
      </div>
    </div>
  );
};

export default Cards;