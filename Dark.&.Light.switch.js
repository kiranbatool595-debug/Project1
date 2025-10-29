
let btn = document.getElementsByClassName("button");
let con = document.getElementsByClassName("container");
let text = document.getElementById("modeText");

// add variable to know which mode is night now.
let dark = 0;
      
function darkmode() {
    if(dark == 0){
        // add color and shadow to the "container"/ card.
        con["0"].style.backgroundColor = "rgb(45, 52, 54)";
        con["0"].style.boxShadow = "5px 5px 15px rgba(255, 255, 255, 0.1), -5px 5px 15px rgba(255, 255, 255, 0.1)";
        
        // add colore to the body.
        document.body.style.backgroundColor = "rgb(37, 40, 41)";
        document.body.style.color = "white";
        
        // to change the icon and text.
        btn["0"].innerHTML = "🌙";
        text.textContent = "Dark Mode";

        // variable for Dark mode
        dark = 1; 
                
        } else {
        // add color and shadow to the "container"/ card.
        con["0"].style.backgroundColor = "white";
        con["0"].style.boxShadow = "5px 5px 15px rgba(3, 3, 3, 0.322), -5px 5px 15px rgba(3, 3, 3, 0.322)";    
                
        // add colore to the body.
        document.body.style.backgroundColor = "rgb(243, 249, 255)";
        document.body.style.color = "black";

        // to change the icon and text.
        btn["0"].innerHTML = "☀";
        text.textContent = "Light Mode";

        // variable for light mode
        dark = 0;
        }
        };


