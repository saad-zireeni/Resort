import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Resorts.css";
import { Link } from "react-router-dom";

const Resorts = () => {
  const [resorts, setResorts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOption, setSortOption] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const resortsPerPage = 12;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/resorts/");
      setResorts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (data) => {
    setCurrentPage(data.selected);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(0);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(0);
  };

  const handleCityChange = (e) => {
    setCityFilter(e.target.value);
    setCurrentPage(0);
  };

  const handleAvailabilityChange = (e) => {
    setAvailabilityFilter(e.target.value);
    setCurrentPage(0);
  };

  const filteredResorts = resorts.filter((resort) => {
    const cityMatch = cityFilter ? resort.city === cityFilter : true;
    const availabilityMatch =
      availabilityFilter !== ""
        ? resort.availability === (availabilityFilter === "true")
        : true;

    return (
      resort.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      cityMatch &&
      availabilityMatch
    );
  });

  const sortedResorts = filteredResorts.sort((a, b) => {
    if (sortOption === "low-to-high") {
      return a.price - b.price;
    } else if (sortOption === "high-to-low") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  const pageCount = Math.ceil(sortedResorts.length / resortsPerPage);
  const startIndex = currentPage * resortsPerPage;
  const endIndex = startIndex + resortsPerPage;
  const resortsToDisplay = sortedResorts.filter(
    (resort, index) => index >= startIndex && index < endIndex
  );

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 0; i < pageCount; i++) {
      pageNumbers.push(
        <div
          key={i}
          className={`pagination-link ${i === currentPage ? "active" : ""}`}
          onClick={() => handlePageChange({ selected: i })}
        >
          {i + 1}
        </div>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <div className="reservations-container">
        <h1 className="main-heading text-white">Explore All Resorts</h1>
        <div className="bg-blur" />
        {/* Topbar */}
        <div className="topbar">
          <h2 className="filter-heading">Filters</h2>
          {/* Search */}
          <div className="filter-option">
            <label htmlFor="search" className="filter-option-label">
              Search
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="filter-option-input"
            />
          </div>

          {/* Sort options */}
          <div className="filter-option">
            <label htmlFor="sort" className="filter-option-label">
              Sort by Price
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className="filter-option-select"
            >
              <option value="">None</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>

          {/* City filter */}
          <div className="filter-option">
            <label htmlFor="city" className="filter-option-label">
              Filter by City
            </label>
            <select
              id="city"
              value={cityFilter}
              onChange={handleCityChange}
              className="filter-option-select"
            >
              <option value="">All Cities</option>
              <option value="Zarqa">Zarqa</option>
              <option value="Amman">Amman</option>
              <option value="Mafraq">Mafraq</option>
              <option value="Aqaba">Aqaba</option>
              <option value="Ajloun">Ajloun</option>
              <option value="Irbid">Irbid</option>
              <option value="Balqa">Balqa</option>
              <option value="Madaba">Madaba</option>
              <option value="Jarash">Jarash</option>
              <option value="Tafelah">Tafelah</option>
              <option value="Karak">Karak</option>
              <option value="Maan">Maan</option>
            </select>
          </div>

          {/* Availability filter */}
          <div className="filter-option">
            <label htmlFor="availability" className="filter-option-label">
              Filter by Availability
            </label>
            <select
              id="availability"
              value={availabilityFilter}
              onChange={handleAvailabilityChange}
              className="filter-option-select"
            >
              <option value="">All</option>
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Resort Cards */}
          <div className="resort-cards">
            {resortsToDisplay.map((resort) => (
              <div key={resort.id} className="resort-card">
                <div className="resort-image-container">
                  <img
                    src={`https://picsum.photos/200/200?random=${resort.id}`}
                    className="resort-image"
                    alt={resort.name}
                  />
                </div>
                <div className="resort-details">
                  <h2 className="resort-name">{resort.name}</h2>
                  <p className="resort-description">{resort.description}</p>
                  <div className="resort-info">
                    <p className="city-info">{resort.city}</p>
                    <p className="rating-info">({resort.rating}/5)</p>
                  </div>
                  <div className="resort-details-footer">
                    <p className="availability-info">
                      {resort.availability ? "Available" : "Not Available"}
                    </p>
                    <h3 className="price-info">${resort.price}</h3>
                  </div>
                  <Link to={`/details/${resort.id}`}>
                    <button className="details-button">Details</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}

          <div className="pagination-container">
            <div
              className={`pagination-link ${
                currentPage === 0 ? "disabled" : ""
              }`}
              onClick={handlePreviousPage}
            >
              &lt;
            </div>
            {renderPageNumbers()}
            <div
              className={`pagination-link ${
                currentPage === pageCount - 1 ? "disabled" : ""
              }`}
              onClick={handleNextPage}
            >
              &gt;
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resorts;
