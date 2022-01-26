import { createTheme, MenuItem, TextField, ThemeProvider } from "@mui/material";
import React from "react";
import "./Header.css";
import categories from "../../data/category";

const Header = ({ setCategory, category, word, setWord, darkMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: darkMode ? "#fff" : "#000",
      },
      mode: darkMode ? "dark" : "light",
    },
  });
  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };
  return (
    <div className="header">
      <span className="title" style={{ color: darkMode ? "white" : "black" }}>
        {word ? word : "Dictionary Hub"}
      </span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="standard-basic"
            label="Search a Word"
            className="search"
            variant="standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            id="standard-select-currency"
            select
            className="select"
            label="Language"
            variant="standard"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {categories.map((e) => (
              <MenuItem key={e.label} value={e.label}>
                {e.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
