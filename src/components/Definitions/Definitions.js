import React from "react";
import "./Definitions.css";

const Definitions = ({ word, category, meanings, darkMode }) => {
  return (
    <>
      <div className="meanings">
        {meanings[0] && word && category === "en" && (
          <audio style={{
                    backgroundColor: darkMode ? "#fff" : "#000",                    
                  }}
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            controls
          >
            Your Browser does not support audio element
          </audio>
        )}
        {word === "" ? (
          <span className="subtitle">Start by typing a word in Search bar</span>
        ) : (
          meanings.map((mean) =>
            mean.meanings.map((item) =>
              item.definitions.map((def) => (
                <div
                  className="singleMean"
                  style={{
                    backgroundColor: darkMode ? "#fff" : "#282c34",
                    color: darkMode ? "black" : "white",
                  }}
                >
                  <b>{def.definition}</b>
                  <hr style={{
                    backgroundColor: darkMode ? "black" : "#fff",                    
                  }} />
                  {def.example && (
                    <span>
                      <b>Example: </b>
                      {def.example}
                    </span>
                  )}
                  {def.synonyms && (
                    <span>
                      <b>Synonyms: </b>
                      {def.synonyms.map((s) => `${s}, `)}
                    </span>
                  )}
                </div>
              ))
            )
          )
        )}
      </div>
    </>
  );
};

export default Definitions;
