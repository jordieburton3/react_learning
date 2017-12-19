class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            hidden: true
        }
    }

    handleToggleVisibility() {
        this.setState((previousState) => {
            return {
                hidden: !previousState.hidden
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggleVisibility}> {this.state.hidden? "Show Details" : "Hide Details"} </button>
                {!this.state.hidden && <p>Here are the details!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let appRoot = document.getElementById("app");
// let hidden = true;

// const toggleHidden = () => {
//     hidden = !hidden;
//     renderTemplate();
// }

// const renderTemplate = () => {
//     let template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = {toggleHidden}> {hidden? "Show Details" : "Hide Details"}</button>
//             {!hidden && <p>Here are the details!</p>}
//         </div>
//         );
//     ReactDOM.render(template, appRoot);
// }

// renderTemplate();