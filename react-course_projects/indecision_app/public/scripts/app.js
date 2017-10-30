"use strict";

console.log("React.js is running");

// JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "Jordan's first React application"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    ),
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
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

// Create a template2 variable as a JSX expression
// div (root element) containing h1 tag with your name
//  -> p tag: age: age
// -> p tag: Location: place
// render template 2 instead of template.

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
