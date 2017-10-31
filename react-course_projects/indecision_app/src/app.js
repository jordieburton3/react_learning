console.log("React.js is running");

// JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "Jordan's first React application",
    options: ["one", "two"]
}

var hasOptions = function(options) {
    if (!options) {
        return <p>No options</p>;
    }
    if (options.length > 0) {
        return <p>Here are your options</p>;
    } 
    return <p>No options</p>;
}

var template = (
  <div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    {hasOptions(app.options)}
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
    </ol>
  </div>
);

var getLocation = function(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
    return undefined;
}

var user = {
    name: "Jordan",
    age: 21,
    location: "New York"
};

var template2 = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
