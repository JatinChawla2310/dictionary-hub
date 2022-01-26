import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Definitions from "./components/Definitions/Definitions";
import Header from "./components/Header/Header";
import MaterialUISwitch from './components/ThemeSwitcher/MaterialUISwitch'

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const fetchData = async () => {
    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`;
      const data = await axios.get(url);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [word, category]);

  
  return (
    <>
      <div
        style={{ backgroundColor: darkMode ? "#282c34" : "#fff" }}
        className="container"
      >
        <Container
          style={{ color: darkMode ? "white" : "black" }}
          className="main"
          maxWidth="md"
        >
          <div className="switcher">
            <span>{darkMode ? "Dark" : "Light"} Mode</span>
            <MaterialUISwitch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>
          <Header
            category={category}
            setCategory={setCategory}
            word={word}
            setWord={setWord}
            darkMode={darkMode}
          />
          {meanings && (
            <Definitions
              word={word}
              meanings={meanings}
              category={category}
              darkMode={darkMode}
            />
          )}
        </Container>
      </div>
    </>
  );
};

export default App;
