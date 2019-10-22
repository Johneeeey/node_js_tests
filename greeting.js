let currentDate = new Date();

global.date = currentDate;

module.exports.getMessage = function() {
    let hour = currentDate.getHours();
    if (hour > 16)
        return "Good evening, " + global.name;
    if (hour > 10)
        return "Good afternoon, " + global.name;
    if (hour > 16)
        return "Good morning, " + global.name;
}