export default function handleTime() {
  var time = new Date().getTime() / 1000;
  var currentTime = time;
  var timeSpent = 0;

  var secondsToTime = (time) => {
    var days = Math.floor(time / 86400);
    var hours = Math.floor((time - (days * 86400 ))/3600);
    var minutes = Math.floor((time - (days * 86400 ) - (hours *3600 ))/60);
    var secs = Math.floor((time - (days * 86400 ) - (hours *3600 ) - (minutes*60)));

    if (days === 0 && hours === 0 && minutes === 0) {
      return secs + " seconds passed";
    } else {
      days !== 0 ? days = days + " days " : "";
      hours !== 0 ? hours = hours + " hours " : "";  
      return days + hours + minutes + " minutes passed";      
    }
  };
  
  setInterval(function(){
    var currentTime = new Date().getTime() / 1000;
    timeSpent = secondsToTime(currentTime - time);
    $(".time").html(timeSpent);
  }, 1000);   
};
