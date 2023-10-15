import React, { useState } from 'react';
import "./PageScroller.css";
import { Link } from 'react-router-dom';
function PageScroller() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < 5) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handlePrevPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
      <div>
        {currentPage === 1 && <h2>Page 1 Content<Link  to="./Mobilepageone">
                    </Link></h2>}
        {currentPage === 2 && <h2>Page 2 Content<Link to="./Mobilepagetwo">
                    </Link></h2>}
        {currentPage === 3 && <h2>Page 3 Content</h2>}
        {currentPage === 4 && <h2>Page 4 Content</h2>}
        {currentPage === 5 && <h2>Page 5 Content</h2>}
      </div>
    </div>
  );
};

export default PageScroller;