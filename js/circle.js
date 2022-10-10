(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function (rad) {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return Math.PI * Math.pow(rad, 2); // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let answer = '';
            (doRounding) ? answer = `round the result to the nearest integer.`  : answer = `output the complete value`
            
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + answer);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
