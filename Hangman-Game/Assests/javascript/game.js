  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var dashes = [];
  var word;          
  var guess;             
  var guesses = [];            
  var counter;
  var space;       
  var lives = 10;
  var space = 0;
  var words = ["knicks", "Court"]
  var correctLetter = []
  var clear = []

window.onload = function () {

    
    function selectWord() {
      word = words[Math.floor(Math.random() * words.length)];
      console.log(word);
      
      document.getElementById ("targetword").innerHTML = word;
      console.log (word);

      for (i = 0; i < word.length; i++) {
        console.log (word);
          dashes.push("_");
      }
      document.getElementById("targetword").innerHTML = dashes.join(" ");
      return word;

  
    }

    selectWord();

    $(document).on("keyup", function(event) {
      console.log("event.key", event.key)
        var keyPressed = event.key;
          if(event.which < 65 || event.which > 90) 
            return false;

           if(word.indexOf(keyPressed) === -1) {
            console.log('it is NOT the word',);
              lives -= 1;
                guesses.push(event.key);
            } 

           else {
            console.log('it is in the word');
                // var word = dashes.match("targetword");
                dashes.push(event.key);
                
            }
        
             

     document.getElementById("lives").innerHTML = lives;
     document.getElementById("previousguesses").innerHTML = guesses;
     document.getElementById("targetword").innerHTML = dashes;

    
    })


    $("#reset").on("click", function(e) {
      console.log("clear", e.guesses =[])
      lives === 10;
      guesses.length === 0;
       
      })
    $("lives").HTML = lives;
     $("previousguesses").HTML = guesses;
    
  }




    


//    var comments = function () {
//     document.getElementById ("lives")
//     lives.innerHTML = lives;
//     console.log (lives)
//     if (lives < 1) {   
//       showLives.innerHTML = "Game Over";
//     }
//     for (var i = 0; i < geusses.length; i++) {
//       if (counter + space === geusses.length) {
//         showLives.innerHTML = "You Win!";
//       }
//     }
//   }

    

//     function drawGuesses() {
//       guesses.sort();
//       $("#previousguesses").html(guesses.join(', '));
//       $("#previousguesses").on("keydown");
//     }

//     drawGuesses(#letters[]);

//     function cleanguess() {
//       var uniqueGuesses = []; 
//       $.each (guesses, function(index, element) {
//           if (element.length > 0 && $.inArray(element, uniqueGuesses)== -1) {
//               uniiqueGuesses.push(element);
//           }
//       });
//       guesses = uniqueGuesses;
//     }

//     function addGuess () {
//       if(/^[a-zA-z]*)*$/.test($("#guess").val()) && typeof $("#guess").val() !== "undefined") {
//         guesses.push($("#guess").val().tolowercase());
//       }
//     }  

  
      

  

  


// var showLives = document.getElementById("lives"); {

// };

  

//     for (var i = 0; i < letters.length; i++) {
      
//     }
  
  
    

  