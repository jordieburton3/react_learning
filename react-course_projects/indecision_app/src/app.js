console.log("React.js is running");

// JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "Jordan's first React application"
}

var template = (
  <div>
    <h1>{app.title}</h1> 
    <p>{app.subtitle}</p>
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
    </ol>
  </div>
);

var user = {
    name: "Jordan",
    age: 21,
    location: "New York"
};

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

// Create a template2 variable as a JSX expression
// div (root element) containing h1 tag with your name
//  -> p tag: age: age
// -> p tag: Location: place
// render template 2 instead of template.

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
