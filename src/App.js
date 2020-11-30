import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Action from "./Components/Action/Action";
import Options from "./Components/Options/Options";
import AddOption from "./Components/AddOption/AddOption";
import OptionModal from "./Components/OptionModal/OptionModal";

class App extends Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  saveOptionsInLocalStorage = (options) => {
    localStorage.setItem("options", JSON.stringify(options));
  };

  getOptionsFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("options"));

  componentDidMount() {
    try {
      const storedOptions = this.getOptionsFromLocalStorage();
      if (storedOptions) {
        this.setState(() => ({ options: storedOptions }));
      }
    } catch (e) {
      // do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { options } = this.state;
    if (JSON.stringify(options) !== JSON.stringify(prevState.options)) {
      this.saveOptionsInLocalStorage(options);
    }
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((prevState) => {
      const options = [...prevState.options];
      options.push(option);
      return {
        options,
      };
    });
  };

  handleMakeDecision = () => {
    const { options } = this.state;
    const { length } = options;

    const optionIndex = Math.floor(Math.random() * length);
    const selectedOption = options[optionIndex];
    this.setState(() => ({ selectedOption }));
  };

  handleClearDecision = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: [],
    }));
  };

  handleDeleteOption = (index) => {
    this.setState((prevState) => {
      const options = [...prevState.options];
      options.splice(index, 1);
      return {
        options,
      };
    });
  };

  render() {
    const subtitle = "Put your life in the hands of a computer";
    const { options, selectedOption } = this.state;
    const hasOptions = !!options.length;

    return (
      <div>
        <Header subtitle={subtitle} />
        <main className="container">
          <Action
            hasOptions={hasOptions}
            handleMakeDecision={this.handleMakeDecision}
          />
          <section className="widget">
            <Options
              options={options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </section>
        </main>
        <OptionModal
          selectedOption={selectedOption}
          handleClearDecision={this.handleClearDecision}
        />
      </div>
    );
  }
}

export default App;
