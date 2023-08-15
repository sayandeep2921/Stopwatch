let hr = 0
let min = 0
let sec = 0
let count = 0

let time = false

function stopwatch() {
    if (time == true) {
        count = count + 1;
        // we dont use count ++ here to increment its value

        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
            // because in hr both sec and minute turns to 0
        }

        // Now we make futher changes to the code as while the stopwatch is running there is no 0 in front of the single digit number so to that we use the code below
        // First we make 4 variables to store number (value of the variables i.e hr min sec count) in string

        let hrStr = hr
        let minStr = min
        let secStr = sec
        let countStr = count

        // Now converting it into string if the number is single digit 

        if (hr < 10) {
            hrStr = "0" + hrStr
            //    anything added to string is a string 
        }
        if (min < 10) {
            minStr = "0" + minStr
            //    anything added to string is a string 
        }
        if (sec < 10) {
            secStr = "0" + secStr
            //    anything added to string is a string 
        }
        if (count < 10) {
            countStr = "0" + countStr
            //    anything added to string is a string 
        }


        document.getElementById("count").innerHTML = countStr;
        document.getElementById("sec").innerHTML = secStr;
        document.getElementById("min").innerHTML = minStr;
        document.getElementById("hr").innerHTML = hrStr;

        // We used the str variables to get 00 format in the stopwatch
        // getElementById is used to fetched the element from html with mentioned id and innerHTML makes changes to the main html code of the mentioned id or class , i wrapped this text by ALT+z

        setTimeout("stopwatch()", 10)
        
        // setTimeout repeats a function after the mentioned millisecond of time i.e 10 here (the integer after comma) , 1 sec has 1000 milliseconds so by making the function to wait for 10 milliseconds we can divide 1 sec into 100 parts 
    }
}

function start() {
    time = true;
    stopwatch()
}

function stop() {
    time = false;
}

// By reset the stopwatch will be stopped and get reset

function reset() {
    time = false;

    hr = 0
    min = 0
    sec = 0
    count = 0
    // by the doing the values would be reset but wont be visible over the stopwatch but would start from 0 when pressed start so for doing that we use the code below

    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";
    // in this we dont pass variable in innerHTML because it will only show single show (in math 0 is 0 not 00) so to do that we put "00" as a string
}