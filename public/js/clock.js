window.addEventListener("load", () => {
    clock();
    function clock() {
      const today = new Date();
  
      // get time components
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();
  
      //add '0' to hour, minute & second when they are less 10
      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      const second = seconds < 10 ? "0" + seconds : seconds;
  
      //make clock a 12-hour time clock
      const hourTime = hour > 12 ? hour - 12 : hour;
  
      // if (hour === 0) {
      //   hour = 12;
      // }
      //assigning 'am' or 'pm' to indicate time of the day
      const ampm = hour < 12 ? "AM" : "PM";
  
      // get date components
      const month = today.getMonth();
      const year = today.getFullYear();
      const date = today.getDate();
      const day =  today.getDay();
      const days =  today.getDay("s");
  
      const dayList = [
        "Sunday","Monday","Tuesday",
        "Wednesday","Thursday","Friday","Saturday"];
      const dayLists = [
        "Sundays","Mondays","Tuesdays",
        "Wednesdays","Thursdays","Fridays","Saturdays"];
  
      const monthList = [
        "Jan","Feb","Mar","Ap",
        "May","Jun","Jul","Aug","Sep",
        "Oct","Nov","Dec"
      ];
  
      //get current date and time
      const dates = dayList[day] + ", "+ date + " "  + monthList[month]  + " " + year;
      const time = hourTime + ":" + minute + ":" + second + ampm;
  
  
      //print current date and time to the DOM
      
      document.getElementById("Time").innerHTML = time;
      document.getElementById("Date").innerHTML = dates;
      setTimeout(clock, 1000);
  
      
      var a = document.getElementById(dayList[day]);
      var z = document.getElementById(dayLists[day]);
  
      if (a === a ) {
        a.style.display = "block";
       }
       else{
         a.style.display = "none";
       }
      if (z === z) {
        z.style.display = "block";
       }
       else{
         z.style.display = "none";
       }
      
    }
  });