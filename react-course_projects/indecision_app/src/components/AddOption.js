import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleOnSubmit = this.handleOnSubmit.bind(this);
      this.state = {
        error: undefined
      };
    }
  
    handleOnSubmit(e) {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
      this.setState(prevState => ({ error: error }));
  
      if(!error) {
          e.target.elements.option.value = "";
      }
    }
  
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleOnSubmit}>
            <input type="text" name="option" />
            <button>Add option</button>
          </form>
        </div>
      );
    }
  }