import React from "react";

const productlistHeading = ({ metadata }) => {
  const { query, page, pages, total } = metadata;
  return (
    <>
      <div className="pro-heading">Search results for {query}</div>
      <div>Total {total} products found.</div>
      <div>
        Showing page {page} of total {pages} pages
      </div>
    </>
  );
};
export default productlistHeading;
