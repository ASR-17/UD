import React, { useState, useRef, useEffect } from "react";
import Dictionary from "../assets/Dictionary.json";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWord, setSelectedWord] = useState(null);
  const dropdownRef = useRef(null);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());

    if (Dictionary[event.target.value.toLowerCase()]) {
      setSelectedWord({
        word: event.target.value,
        definition: Dictionary[event.target.value.toLowerCase()],
      });
    } else {
      setSelectedWord(null);
    }
  };

  // Close the pop-up
  const closePopup = () => {
    setSelectedWord(null);
    setSearchTerm("");
  };

  return (
    <div className="bg-gray-800 text-white flex flex-col justify-around items-center p-4 relative">
      {/* Navbar Section */}
      <div className="flex justify-center items-center w-full px-6 h-16">
        <h1 className="text-3xl font-bold font-serif">URBAN DICTIONARY</h1>
        
        {/* Navbar Buttons */}
        <div className="flex space-x-4 ml-8">
          <button className="px-4 py-2 bg-transparent text-white hover:bg-gray-700 rounded-md">Store</button>
          <button className="px-4 py-2 bg-transparent text-white hover:bg-gray-700 rounded-md">Blog</button>
          <button className="px-4 py-2 bg-transparent text-white hover:bg-gray-700 rounded-md">Advertise</button>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md">
              Browse ▼
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Search Box */}
      <div className="flex items-center space-x-2 mt-4">
        <input
          type="text"
          placeholder="Enter a word..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-1 w-80 h-8 text-white rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-1 h-8 bg-yellow-500 hover:bg-yellow-600 rounded-md">
          Search
        </button>
      </div>

      {/* 🔹 Pop-up Card */}
      {selectedWord && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
            <button onClick={closePopup} className="absolute top-2 right-2 text-red-600 text-xl font-bold">
              ×
            </button>
            
            {/* Card Content */}
            <div className="card-body text-center">
              <h2 className="card-title text-4xl text-black font-bold">{selectedWord.word}</h2>
              <p className="text-black m-7 mt-10 text-xl bold">{selectedWord.definition}</p>
              <div className="card-actions justify-end">
                <button className="text-black text-10 m-6 text-xl bg-blue">Read More ...</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
