const moment = require ('moment') //install : yarn add moment             

var date = moment(new Date())
var old_date = moment('2019-11-05T16:00:00.000Z'); // Set date in ISO 8601

const duration1 = moment.duration(date.diff(old_date));
const hours = duration1.asHours();
var months = duration1.asMonths();

var a = convert_time(hours)

console.log(a)


// diff in hours
function convert_time(duration_hours) {       

    var days = Math.round(duration_hours / 24)
 
    months = Math.round(months)  

    var info =    
    (duration_hours < 1) ? "última hora" 
    :(duration_hours < 24)? "Hoje" 
    :(duration_hours < (24*30)) ? `${days} dias`
    :` últimos ${months } meses`;  
    
    return info;
  }

/* 
function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = parseInt((duration / 1000) % 60),
      minutes = parseInt((duration / (1000 * 60)) % 60),

      hours = parseInt((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
 */

/* 

  var a = msToTime(u)

  var b = msToTime(bu)

  
  var daysLeft = (endYear.getTime() - today.getTime())
 
  console.log(us)
 */
/* endYear.setFullYear(today.getFullYear()); // Set year to this year

var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); //returns days left in the year
//console.log(endYear.getTime() - today.getTime()) */