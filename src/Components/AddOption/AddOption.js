import React, { Component } from "react";

class AddOption extends Component {
  state = {
    inputText: "",
    error: undefined,
  };

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState(() => ({
      inputText: value,
      error: undefined,
    }));
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option);
    if (!error) {
      this.setState({
        inputText: "",
        error: undefined,
      });
    } else {
      this.setState({
        error,
      });
    }
  };

  render() {
    const { inputText, error } = this.state;
    return (
      <div>
        {error && <p className="add-option-error">{error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input
            className="add-option__input"
            type="text"
            name="option"
            value={inputText}
            onChange={this.handleInputChange}
          />
          <button className="button">Add option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
