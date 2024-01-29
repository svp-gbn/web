var stanovySlided = false;
$(".stanovy-dropdown").click(function () {
    if (stanovySlided === false) {
        $(".stanovy-dropdown").attr("src", "dropup.svg")
    $(".stanovy-schovany").slideDown();
    stanovySlided = true;
    } else {
        $(".stanovy-dropdown").attr("src", "dropdown.svg")
    $(".stanovy-schovany").slideUp();
     stanovySlided = false;
    } 
}
    )

    var formSlided = false;
$(".form-dropdown").click(function () {
    if (formSlided === false) {
        $(".form-dropdown").attr("src", "dropup.svg")
    $(".form-schovany").slideDown();
    formSlided = true;
    } else {
        $(".form-dropdown").attr("src", "dropdown.svg")
    $(".form-schovany").slideUp();
     formSlided = false;
    } 
}
    )




     // Set the date we're counting down to
     var countDownDate = new Date("Jan 30, 2024 9:40:00").getTime();
     var countDownDate2 = new Date("Jan 31, 2024 9:40:00").getTime();

     
     // Update the count down every 1 second
     var x = setInterval(function() {
        var dateSet = true
        $(".notset").hide();
       // Get today's date and time
       var now = new Date().getTime();
         
       // Find the distance between now and the count down date
       var distance = countDownDate - now;
         
       // Time calculations for days, hours, minutes and seconds
       var days = Math.floor(distance / (1000 * 60 * 60 * 24));
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
       // Output the result in an element with id="demo"
       document.getElementById("demo").innerHTML = days + "d " + hours + "h "
       + minutes + "m " + seconds + "s ";
         
       // If the count down is over, write some text 
       if (distance < 0) {
         clearInterval(x);
         $(".hset").text("Schůze probíhá")
         




 // Update the count down every 1 second
 var y = setInterval(function() {
    // Get today's date and time
    var now2 = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance2 = countDownDate2 - now2;
      
    // Time calculations for days, hours, minutes and seconds
    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days2 + "d " + hours2 + "h "
    + minutes2 + "m " + seconds2 + "s ";
      
    // If the count down is over, write some text 
    if (distance2 < 0) {
      clearInterval(x);

      
      dateSet = false;
         $(".hset").text("Datum schůze ještě nebylo určeno")

         $("#demo").hide();
         $(".notset").show();
    } 1000});








         dateSet = false;
         if(dateSet===true) {
            $("#demo").show();
            $(".notset").hide();
        
        } else if(dateSet===false) {

            $("#demo").hide();
            $(".notset").show();
        }
        

       }
     }, 1000);








     

