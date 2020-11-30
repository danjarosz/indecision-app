import React from "react";
import Modal from "react-modal";

const OptionModal = ({ selectedOption, handleClearDecision }) => {
  return (
    <Modal
      isOpen={!!selectedOption}
      onRequestClose={handleClearDecision}
      contentLabel="Selected Option"
      closeTimeoutMS={300}
      className="modal"
    >
      <h1 className="modal__title">Selected Option</h1>
      {selectedOption && <p className="modal__body">{selectedOption}</p>}
      <button className="button" onClick={handleClearDecision}>
        Okey
      </button>
    </Modal>
  );
};

export default OptionModal;
