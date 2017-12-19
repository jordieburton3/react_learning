const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
};

const getName = obj.getName.bind(obj);

console.log(getName());

class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer!";
        const options = ["This one", "Thing Two", "Thing 3"];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
    }

    handlePick() {
        alert("Handle Pick");
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        alert("Remove all options");
    }
    
    render() {
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All Options</button>
                {
                    this.props.options.map((option) => {
                        return <Option key={option} optionText={option}/>;
                    })
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleOnSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option) {
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type='text' name='option'/>
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));