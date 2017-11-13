console.log("React.js is running");

// JSX - JavaScript XML

let app = {
    title: "Indecision App",
    subtitle: "Jordan's first React application",
    options: []
}

let hasOptions = function(options) {
    if (!options) {
        return <p>No options</p>;
    }
    if (options.length > 0) {
        return <p>Here are your options</p>;
    } 
    return <p>No options</p>;
}

const onRemoveAll = () => {
    app.options = [];
    renderPage();
}

const numbers = [55, 101, 1000];

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
};

const renderPage = () => {
    let template = (
        <div>
          <h1>{app.title}</h1> 
          {app.subtitle && <p>{app.subtitle}</p>}
          {hasOptions(app.options)}
          <button disabled={app.options == 0} onClick={onMakeDecision}>What should I do?</button>
          <button onClick={onRemoveAll}>Remove All Options</button>
          <ol>
              {
                  app.options.map((option) => {
                      return <li key={option}>{option}</li>;
                  })
              }
          </ol>
          <form onSubmit={onFormSubmit}>
              <input type='text' name='option'/>
              <button>Add option</button>
          </form>
        </div>
      );
      ReactDOM.render(template, appRoot);
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderPage();
    }
};

let appRoot = document.getElementById("app");
renderPage();
