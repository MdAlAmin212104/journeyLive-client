import React from 'react';

const SortByCost = ({ handleBooksFilter }) => {
      return (
            <details className="dropdown mt-8">
                  <summary className="m-1 btn">Sort By</summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li onClick={()=> handleBooksFilter('cost')}><a>Cost</a></li>
                  <li onClick={()=> handleBooksFilter('rating')}><a>Rating</a></li>
                  <li onClick={()=> handleBooksFilter('visitors')}><a>Visitors</a></li>
                  </ul>
            </details>
      );
};

export default SortByCost;