import React from "react";

const Action = ({ hasOptions, handleMakeDecision }) => {
  return (
    <div>
      <button
        className="big-button"
        disabled={!hasOptions}
        onClick={handleMakeDecision}
      >
        What should I do?
      </button>
    </div>
  );
};

export default Action;
