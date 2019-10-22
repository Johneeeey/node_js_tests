// const greeting = require('./greeting');

// global.name = "Nikita";

// global.console.log(date);
// console.log(greeting.getMessage());

// let nodePath = process.argv[0];
// let appPath = process.argv[1];
// let name = process.argv[2];
// let age = process.argv[3];

// console.log(nodePath);
// console.log(appPath);
// console.log();
// console.log(name);
// console.log(age);



//*********************NODEMON***************************
// const http = require("http");

// let message = "Hello Johneeeey!";
// http.createServer(function(request, response) {

//     console.log(message);
//     response.end(message);

// }).listen(3000, "127.0.0.1", () => {
//     console.log("Сервер начал прослушивание запросов");
// });


// function display(data, callback) {
//     var randInt = Math.random() * (10 - 1) + 1;
//     var err = randInt > 5 ? new Error("Error of execution. randInt more than 5") : null;

//     setTimeout(() => {
//         callback(err, data);
//     }, 0);
// }

// console.log("Programm start");

// display("Data processing...", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// console.log("Programm end");

function displaySync(callback) {
    callback();
}

console.log("Начало работы программы");

setTimeout(function() {

    console.log("timeout 500");
}, 500);

setTimeout(function() {

    console.log("timeout 100");
}, 100);

displaySync(function() { console.log("without timeout") });
console.log("Завершение работы программы");