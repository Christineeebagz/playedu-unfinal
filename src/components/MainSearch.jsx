import React, { useState } from "react";
import "./MainSearch.css";
import { FaSearch } from "react-icons/fa";

export const MainSearch = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [inputCompleted, setInputCompleted] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectType, setType] = useState("");
  const [hasSubmitted, setHasSubmit] = useState(false);

  //   Sending input to the api
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  //   const handleCheckbox = (event) => {
  //     console.log(event.target.value);
  //     let state = state;
  //     state.category[event.target.value] = event.target.checked;
  //   };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setInputCompleted(true);
    }
  };

  const handleClick = () => {
    setInputCompleted(false);
    setHasSubmit(false);
  };

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
  };

  const handleSubmit = () => {
    if (selectType !== "") onSubmit(input, selectedCategories, selectType);
    setHasSubmit(true);
  };

  //   const handleGenerate =

  return (
    <>
      {/* ang input sa search [ex: algebra] = value */}
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          className="input-main-search"
          placeholder="Search Topic"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          onKeyPress={handleKeyPress}
          onClick={handleClick}
        />
        {inputCompleted && <div className="popup"></div>}
      </div>
      {inputCompleted && (
        <div id="category-section">
          <input
            className="input-category"
            type="checkbox"
            name="category"
            value="visualaid"
            onChange={handleCategoryChange}
          />
          <label htmlFor="visualaid">Visual Aid</label>
          <input
            className="input-category"
            type="checkbox"
            name="category"
            value="auditory"
            onChange={handleCategoryChange}
          />
          <label htmlFor="auditory">Auditory</label>
          <input
            className="input-category"
            type="checkbox"
            name="category"
            value="kinesthetic"
            onChange={handleCategoryChange}
          />
          <label htmlFor="kinesthetic">Kinesthetic</label>

          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {hasSubmitted && inputCompleted && (
        <div id="type-section">
          <button
            onClick={() => {
              setType("generate");
              onSubmit(input, selectedCategories, "generate");
              //   handleSubmit();
            }}
          >
            Generate
          </button>
          <button
            onClick={() => {
              setType("browse");
              handleSubmit();
              onSubmit(input, selectedCategories, "browse");
            }}
          >
            Browse
          </button>
        </div>
      )}
    </>
  );
};
