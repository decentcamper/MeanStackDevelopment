var todos = [
    {action: "Get groceries", complete: false},
    {action: "Call plumber", complete: false},
    {action: "Buy running shoes", complete: true},
    {action: "Buy flowers", complete: false},
    {action: "Call family", complete: false}
];


var anotherToDo = [
    {action: "JS", complete: true},
    {action: "Means Stack", complete: true},
    {action: "Hybrid", complete: true},
    {action: "Cisco", complete: true},
    {action: "Info", complete: true}


];
var myCssClass = "justAnotherCss";
var myCssClass1 = "justAnotherCss1";

function mySimpleJSDirective(model, selector) {
    this.model = model;
    this.selector = selector;
}

mySimpleJSDirective.prototype.pleaseApply = function () {
    var outputHtml = "<table>",
        myElements = Array.prototype.slice.call(document.querySelectorAll("." + this.selector));
    for (var i = 0; i < this.model.length; i++) {
        outputHtml += "<tr>";
        for (var key in this.model[i]) {
            outputHtml += "<td>" + this.model[i][key] + "</td>"
        }
        outputHtml += "</tr>";
    }
    outputHtml += "</table>";
    myElements.forEach(function (element) {
        element.innerHTML = outputHtml;
    })
};


var mySimpleDirective = new mySimpleJSDirective(todos, myCssClass);
var mySimpleDirective1 = new mySimpleJSDirective(anotherToDo, myCssClass1);


mySimpleDirective.pleaseApply();
mySimpleDirective1.pleaseApply();
