$(document).ready(function() {
    

  
    var random = Math.floor(Math.random() * 120) + 18;  
    	console.log("number to reach:" + random);
      $("#number").text(random)

    var blank_arr = []

   
    for (var i = 0; i < 4; i++){

   
        var crystalnumber = Math.floor(Math.random() * 12) + 1;  
          console.log("gem points:" + crystalnumber);
          blank_arr.push(crystalnumber)
          $("#crystals");
      }


    var gemSources = ["sapphire.jpg", "ruby.png", "Emerald .jpeg", "diamond.jpeg"]
  
  for (var i = 0; i < blank_arr.length; i++) {
      

       
        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

       
        imageCrystal.attr("src", "assets/images/" + gemSources[i]);

        imageCrystal.attr("data-crystalvalue", blank_arr[i]);

        $("#crystals").append(imageCrystal);
        
    } 
  
    var counter = 0;
      console.log("user score:" + counter);
      $("#total").text(counter);

    var wins = 0;
    $("#wins").text(wins);
    var losses = 0;
    $("#losses").text(losses);

       $(".crystal-image").on("click", function() {
    
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);
            
      counter += crystalValue;
   console.log(crystalValue);
      console.log(counter);
        $("#total").text(counter);
            if (counter === randomnum) {
          alert("You win!");
              wins++;
          $("#wins").text(wins);
            }

            else if (counter >= randomnum) {
          alert("You lose!!");
              losses++;
           $("#losses").text(losses);
           counter = 0;
              $("#totalscore").text(counter);

              randomnum = Math.floor(Math.random() * 120) + 18;  
          console.log("number to reach:" + randomnum);
              $("#number-to-guess").text(randomnum)


                blank_arr = []

                for (var i = 0; i < 4; i++){

                 
                    var crystalnumber = Math.floor(Math.random() * 12) + 1;  
                      console.log("gem points:" + crystalnumber);
                      blank_arr.push(crystalnumber)
                      $("#crystals");
                  }


                 gemSources = ["ruby.jpg", "diamond.png", "sapphire-003.jpg", "opal.jpg"]
 
              for (var i = 0; i < blank_arr.length; i++) {
                         

         
                    $("<img>").addClass("crystal-image")
                              .attr("src", "assets/images/" + gemSources[i])
                              .attr("data-crystalvalue", blank_arr[i]);


                    $("#crystals").append(imageCrystal);
                    
                } 
            }

  });


});