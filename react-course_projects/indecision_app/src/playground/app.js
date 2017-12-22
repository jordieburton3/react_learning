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
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(optio                                            ns) {
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
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
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
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {props.options.map(option => (
        <Option
          handleDeleteOption={props.handleDeleteOption}
          key={option}
          optionText={option}
        />
      ))}
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
      <p>{props.optionText}</p>
      <button 
        onClick={(e) => {
            props.handleDeleteOption(props.optionText);
        }}
      >
        remove
    </button>
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
