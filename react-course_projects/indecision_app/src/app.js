const obj = {
  name: "Vikram",
  getName() {
    return this.name;
  }
};

const getName = obj.getName.bind(obj);

console.log(getName());

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleChooseOption = this.handleChooseOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }

  handleChooseOption() {
    const index = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[index]);
  }

  handleDeleteOptions() {
    this.setState(previousState => {
      return {
        options: []
      };
    });
  }

  handleAddOption(option) {
    if (!option) {
      return "Please enter an option.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists.";
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer!";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOption={this.state.options.length > 0}
          handleChooseOption={this.handleChooseOption}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

// class Header extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

// class Action extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handlePick = this.handlePick.bind(this);
//   }

//   handlePick() {
//     alert("Handle Pick");
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleChooseOption} disabled={!this.props.hasOption}>
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

const Action = props => {
  return (
    <div>
      <button onClick={props.handleChooseOption} disabled={!props.hasOption}>
        What should I do?
      </button>
    </div>
  );
};

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>
//           Remove All Options
//         </button>
//         {this.props.options.map(option => {
//           return <Option key={option} optionText={option} />;
//         })}
//       </div>
//     );
//   }
// }

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All Options</button>
      {props.options.map(option => {
        return <Option key={option} optionText={option} />;
      })}
    </div>
  );
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.optionText}</p>
//       </div>
//     );
//   }
// }

const Option = props => {
  return (
    <div>
      // <p>{props.optionText}</p>
      //{" "}
    </div>
  );
};

class AddOption extends React.Component {
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
    this.setState(prevState => {
      return {
        error: error
      };
    });
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

const jsx = (
  <div>
    <h1>Title</h1>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
