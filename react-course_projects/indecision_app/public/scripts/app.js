"use strict";

var appRoot = document.getElementById("app");
var hidden = true;

var toggleHidden = function toggleHidden() {
    hidden = !hidden;
    renderTemplate();
};

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleHidden },
            " ",
            hidden ? "Show Details" : "Hide Details"
        ),
        !hidden && React.createElement(
            "p",
            null,
            "Here are the details!"
        )
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();
