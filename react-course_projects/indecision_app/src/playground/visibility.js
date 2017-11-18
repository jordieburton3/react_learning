let appRoot = document.getElementById("app");
let hidden = true;

const toggleHidden = () => {
    hidden = !hidden;
    renderTemplate();
}

const renderTemplate = () => {
    let template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick = {toggleHidden}> {hidden? "Show Details" : "Hide Details"}</button>
            {!hidden && <p>Here are the details!</p>}
        </div>
        );
    ReactDOM.render(template, appRoot);
}

renderTemplate();