// - See hover states for all interactive elements on the page
// - See a live countdown timer that ticks down every second (start the count at 14 days)
// - **Bonus**: When a number changes, make the card flip from the middle

// before end of the timer is 8 days 23hour 55 minute 41 second
//should make runFunction and setlInterval() for run functon every miliseconds
//should calculate remaining time of seconds, minutes,hours and days
//display the output to users(vachveno autputi anu yovel ganaxlebul funqciaze)
//display the message before timer is over
//newDate //getTime function
//I need whats time is right now, for understand - start time and end time
// text content or innerHTML
let dayEl = document.getElementsByClassName("day");
let hourEl = document.getElementsByClassName("hour");
let minuteEl = document.getElementsByClassName("minute");
let secondEl = document.getElementsByClassName("seconds");


setInterval( ()=> {
    let timeEnd = new Date("June 15,2023 00:00:00"); //date is classname,we made new classname and = string
    var milliseconds = timeEnd.getTime();//string change with number and have milliseconds
    let timeNow = Date.now();//its a millisecond of current time(without string) automatically millyseconds.
    let difference = milliseconds - timeNow;//sxvaoba

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let timeDay = Math.floor(difference / day);//round number, davamrgvale math.floor and math.ceil let google
    let timeHour = Math.floor((difference % day)/ hour);// we % for nashti and / for result.
    let timeMinute = Math.floor((difference % hour)/minute);
    let timeSecond = Math.floor((difference% minute) / second);
    console.log(timeDay,timeHour,timeMinute,timeSecond);
    //element is just name , we can use any name and after we save into element textContent and after change it
    Array.from(dayEl).forEach(element => {
        element.textContent = timeDay
    })
    Array.from(hourEl).forEach(element => {
        element.textContent = timeHour;
    })
    Array.from(minuteEl).forEach(element => {
        element.textContent = timeMinute;
    })
    //nodeList change with Array cuz we useed classname and we need this sintax for it 
    Array.from(secondEl).forEach(element => { 
        element.textContent= timeSecond;
    });
    //this syntax is when we use querryselector and not classname 
    // secondEl.forEach(element => { 
    //     element.textContent= timeSecond;
    // });
    //befor timer is over this will be message
    if (difference < 0){
        Array.from(dayEl).forEach(element => {
            element.textContent = "EX"
        })
        Array.from(hourEl).forEach(element => {
            element.textContent = "PI";
        })
        Array.from(minuteEl).forEach(element => {
            element.textContent = "R";
        })
        Array.from(secondEl).forEach(element => { 
            element.textContent= "ED";
        });
    }
  
},1000);









