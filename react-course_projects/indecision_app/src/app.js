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

const renderPage = () => {
    let template = (
        <div>
          <h1>{app.title}</h1> 
          {app.subtitle && <p>{app.subtitle}</p>}
          {hasOptions(app.options)}
          <p>{app.options.length}</p>
          <button onClick={onRemoveAll}>Remove All Options</button>
          {/*
              numbers.map((number) => {
                return <p key={number}>Number: {number * 2}</p>;
              }) */
          }
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
