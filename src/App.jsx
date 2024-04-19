import React, { useState } from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import { MainSearch } from "./components/MainSearch";
import { GenerateResult } from "./components/GenerateResult";

const App = () => {
  const [searchData, setSearchData] = useState(null);

  const handleMainSearch = (input, categories, type) => {
    setSearchData({ input, categories, type });
    console.log({ input, categories, type });
  };
  return (
    <div id="body">
      <Navbar />
      <div className="search-bar-container">
        <MainSearch onSubmit={handleMainSearch} />
      </div>
      {searchData && (
        <GenerateResult
          input={searchData.input}
          categories={searchData.categories}
          type={searchData.type}
        />
      )}
    </div>
  );
};

export default App;
