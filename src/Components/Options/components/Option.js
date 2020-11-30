import React from "react";

const Option = ({ option, handleDeleteOption, count }) => {
  return (
    <li className="option">
      <p className="option__text">{`${count}. ${option}`}</p>
      <button className="button button--link" onClick={handleDeleteOption}>
        Remove
      </button>
    </li>
  );
};

export default Option;
