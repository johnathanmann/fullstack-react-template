import React, { useState, useEffect } from "react";
import Homepage from "../components/pages/Homepage"

export default function ReactApp() {
  const [currentPage, setCurrentPage] = useState("Homepage");

  const renderPage = () => {
    if (currentPage === "Homepage") {
      return <Homepage handlePageChange={handlePageChange} />;
    }
  };

  useEffect(() => {
    document.title = "React App";
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {renderPage()}
    </div>
  );
}