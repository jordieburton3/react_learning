"use strict";

console.log("React.js is running");

// JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "Jordan's first React application",
    options: ["one", "two"]
};

var hasOptions = function hasOptions(options) {
    if (!options) {
        return React.createElement(
            "p",
            null,
            "No options"
        );
    }
    if (options.length > 0) {
        return React.createElement(
            "p",
            null,
            "Here are your options"
        );
    }
    return React.createElement(
        "p",
        null,
        "No options"
    );
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    hasOptions(app.options),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item 1"
        ),
        React.createElement(
            "li",
            null,
            "Item 2"
        )
    )
);

var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
    return undefined;
};

var user = {
    name: "Jordan",
    age: 21,
    location: "New York"
};

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
