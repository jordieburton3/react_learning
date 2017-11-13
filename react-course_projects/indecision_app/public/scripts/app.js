"use strict";

console.log("React.js is running");

// JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "Jordan's first React application",
    options: []
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

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderPage();
};

var numbers = [55, 101, 1000];

var renderPage = function renderPage() {
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
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove All Options"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderPage();
    }
};

var appRoot = document.getElementById("app");
renderPage();
