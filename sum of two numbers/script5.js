// 1. Function Declaration
function declarationFunction() {
    let a = 10;
    let b = 20;
    let sum = a + b;
    document.getElementById("result").innerHTML =
        "<h1>Function Declaration: Sum = " + sum + "</h1>";
}

// 2. Function Expression / Definition
const expressionFunction = function() {
    let a = 10;
    let b = 20;
    let product = a * b;
    document.getElementById("result").textContent =
        "Function Expression: Product = " + product;
};

// 3. Arrow Function
const arrowFunction = () => {
    let a = 20;
    let b = 10;
    let difference = a - b;
    document.getElementById("result").textContent =
        "Arrow Function: Difference = " + difference;
};
