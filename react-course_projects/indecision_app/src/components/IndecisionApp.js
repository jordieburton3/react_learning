import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handleChooseOption = this.handleChooseOption.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: []
      };
    }
  
    componentDidMount() {
        try {
          const json = localStorage.getItem('options');
          const options = JSON.parse(json);
          if(options) {
              this.setState(() => ({ options:options }));
          }
          console.log('Fetching Data.')
      } catch(e) {
          // Do nothing
      }
    }
  
    componentDidUpdate(prevParts, prevState) {
        if(prevState.options.length !== this.state.options.length) {
          const json = JSON.stringify(this.state.options);
          localStorage.setItem('options', json);
        }
    }
  
    componentWillUnmount() {
        console.log('Component will unmount.')
    }
  
    handleChooseOption() {
      const index = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[index]);
    }
  
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option)
      }))
    }
  
    handleDeleteOptions() {
      this.setState(prevState => ({ options: [] }));
    }
  
    handleAddOption(option) {
      if (!option) {
        return "Please enter an option.";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exists.";
      }
      this.setState(prevState => ({
        options: prevState.options.concat([option])
      }));
    }
  
    render() {
      const subtitle = "Put your life in the hands of a computer!";
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <Action
            hasOption={this.state.options.length > 0}
            handleChooseOption={this.handleChooseOption}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>
      );
    }
  }