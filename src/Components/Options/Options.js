import React from "react";
import Option from "./components/Option";

const Options = ({ options = [], handleDeleteOptions, handleDeleteOption }) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button--link" onClick={handleDeleteOptions}>
          Remove all
        </button>
      </div>
      {!options.length ? (
        <p className="widget__message">Please add an option to get started!</p>
      ) : (
        <ol>
          {options.map((option, index) => (
            <Option
              key={index}
              count={index + 1}
              option={option}
              handleDeleteOption={() => handleDeleteOption(index)}
            />
          ))}
        </ol>
      )}
    </div>
  );
};

export default Options;
