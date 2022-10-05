var holdTime = 1000;
var pauseClues = 333;
var waitTime = 1000;
var progress = 0;
var guessCounter = 0;

var pattern = [Math.floor(Math.random() * 8) + 1];
var random = 0;
var rounds = 0;
var tonePlaying = false;
var volume = 0.5;
var time = 0;
var gamePlaying = false;
var myInterval;
var mistakes = 0;
var Lives = 3;
var TimeDiff = 0;
let color = true;
var myBox;
var myLives;

var Ro = 0;
document.getElementById("Title").classList.remove("hidden");


function myFunction() {
  myBox  = document.getElementById("myBox").selectedIndex;
  myLives  = document.getElementById("myLives").selectedIndex;
  var myRounds  = document.getElementById("myRounds").selectedIndex;
  var myTime  = document.getElementById("myTime").selectedIndex;
  
  

  
  myTime += 1;
  myTime *= 10;
  myBox += 1;
  myLives += 1;
  myRounds += 1;
  if(myBox == 0 || myLives == 0 || myRounds == 0 || myTime == 0) {
    Easy();
  } else {
  TimeDiff = myTime;
  time = myTime;
  Ro = myRounds;
//alert(myRounds)
  RandomPattern(myBox, myRounds)
  
  //alert(myTime);


  
  
 if (myBox == 1) {
    document.getElementById("button1").classList.remove("hidden")
 } else if (myBox == 2) {
    document.getElementById("button1").classList.remove("hidden")
    document.getElementById("button2").classList.remove("hidden")
 } else if (myBox == 3) {
    document.getElementById("button1").classList.remove("hidden")
    document.getElementById("button2").classList.remove("hidden")
    document.getElementById("button3").classList.remove("hidden")
 } else if (myBox == 4) {
    document.getElementById("button1").classList.remove("hidden")
    document.getElementById("button2").classList.remove("hidden")
    document.getElementById("button3").classList.remove("hidden")
    document.getElementById("button4").classList.remove("hidden")
 } else if (myBox == 5) {
    document.getElementById("button1").classList.remove("hidden")
    document.getElementById("button2").classList.remove("hidden")
    document.getElementById("button3").classList.remove("hidden")
    document.getElementById("button4").classList.remove("hidden")
    document.getElementById("button5").classList.remove("hidden")
 } else if (myBox == 6) {
    document.getElementById("button1").classList.remove("hidden")
    document.getElementById("button2").classList.remove("hidden")
    document.getElementById("button3").classList.remove("hidden")
    document.getElementById("button4").classList.remove("hidden")
    document.getElementById("button5").classList.remove("hidden")
    document.getElementById("button6").classList.remove("hidden")
 } else if (myBox == 7) {
    document.getElementById("button1").classList.remove("hidden")
    document.getElementById("button2").classList.remove("hidden")
    document.getElementById("button3").classList.remove("hidden")
    document.getElementById("button4").classList.remove("hidden")
    document.getElementById("button5").classList.remove("hidden")
    document.getElementById("button6").classList.remove("hidden")
    document.getElementById("button7").classList.remove("hidden")
 } else if (myBox == 8) {
    document.getElementById("button1").classList.remove("hidden")
    document.getElementById("button2").classList.remove("hidden")
    document.getElementById("button3").classList.remove("hidden")
    document.getElementById("button4").classList.remove("hidden")
    document.getElementById("button5").classList.remove("hidden")
    document.getElementById("button6").classList.remove("hidden")
    document.getElementById("button7").classList.remove("hidden")
    document.getElementById("button8").classList.remove("hidden")
 } else if (myBox == 9) {
    document.getElementById("button1").classList.remove("hidden")
    document.getElementById("button2").classList.remove("hidden")
    document.getElementById("button3").classList.remove("hidden")
    document.getElementById("button4").classList.remove("hidden")
    document.getElementById("button5").classList.remove("hidden")
    document.getElementById("button6").classList.remove("hidden")
    document.getElementById("button7").classList.remove("hidden")
    document.getElementById("button8").classList.remove("hidden")
    document.getElementById("button9").classList.remove("hidden")
 }
  
  document.getElementById("Index").classList.add("hidden");
  document.getElementById("BoxText").classList.add("hidden");
  document.getElementById("LivesText").classList.add("hidden");
  document.getElementById("RoundsText").classList.add("hidden");
  document.getElementById("myBox").classList.add("hidden");
  document.getElementById("myLives").classList.add("hidden");
  document.getElementById("myRounds").classList.add("hidden");
  document.getElementById("myTime").classList.add("hidden");
  document.getElementById("TimeText").classList.add("hidden");

  document.getElementById("MenuBtn3").classList.add("hidden");
  document.getElementById("MenuBtn").classList.remove("hidden");
    document.getElementById("TimeBar").classList.remove("hidden")
  document.getElementById("ProgressBar").classList.remove("hidden")
  
  if(myLives == 1) {
    document.getElementById("Heart").classList.remove("hidden");
    console.log("HI")
  } else if (myLives == 2) {
    document.getElementById("Heart").classList.remove("hidden");
    document.getElementById("Heart2").classList.remove("hidden");
  } else if (myLives == 3) {
    document.getElementById("Heart").classList.remove("hidden");
    document.getElementById("Heart2").classList.remove("hidden");
    document.getElementById("Heart3").classList.remove("hidden");
  }
  
  
  //document.getElementById("Heart2").classList.remove("hidden")
  Lives = myLives
  startGame();
  }
  //alert(myBox);
  
  //alert(myRounds);
}

function Levels() {
  document.getElementById("CampBtn").classList.remove("hidden");
  document.getElementById("CustomBtn").classList.remove("hidden");
  document.getElementById("MenuBtn").classList.remove("hidden");
  
  document.getElementById("StartBtn").classList.add("hidden");
  document.getElementById("TutorialBtn").classList.add("hidden");
  document.getElementById("Play").classList.add("hidden");
  document.getElementById("MenuBtn3").classList.add("hidden");
}

function Menu() {
  color = true;
  document.getElementById("CampBtn").classList.add("hidden");
  document.getElementById("CustomBtn").classList.add("hidden");
  document.getElementById("MenuBtn").classList.add("hidden");
  document.getElementById("MenuBtn2").classList.add("hidden");
  document.getElementById("EasyBtn").classList.add("hidden");
  document.getElementById("MediumBtn").classList.add("hidden");
  document.getElementById("HardBtn").classList.add("hidden");
  document.getElementById("ImpossibleBtn").classList.add("hidden");
  document.getElementById("TimeBar").classList.add("hidden");
  document.getElementById("ProgressBar").classList.add("hidden");

  
  document.getElementById("StartBtn").classList.remove("hidden");
  document.getElementById("TutorialBtn").classList.remove("hidden");
  document.getElementById("Title").classList.remove("hidden");
  document.getElementById("Play").classList.remove("hidden");
  
  document.getElementById("button1").classList.add("hidden")
  document.getElementById("button2").classList.add("hidden")
  document.getElementById("button3").classList.add("hidden")
  document.getElementById("button4").classList.add("hidden")
  document.getElementById("button5").classList.add("hidden")
  document.getElementById("button6").classList.add("hidden")
  document.getElementById("button7").classList.add("hidden")
  document.getElementById("button8").classList.add("hidden")
  document.getElementById("button9").classList.add("hidden")
  
  document.getElementById("Score").classList.add("hidden");
  document.getElementById("Lives").classList.add("hidden");
  document.getElementById("Time2").classList.add("hidden");
  document.getElementById("Tutorial").classList.add("hidden");
  document.getElementById("CustomTitle").classList.add("hidden");
  document.getElementById("CustomMode").classList.add("hidden");
  document.getElementById("Heart").classList.add("hidden")
    document.getElementById("Heart2").classList.add("hidden")
  document.getElementById("Heart3").classList.add("hidden")
  
  document.getElementById("Index").classList.add("hidden");
  document.getElementById("BoxText").classList.add("hidden");
  document.getElementById("LivesText").classList.add("hidden");
  document.getElementById("RoundsText").classList.add("hidden");
  document.getElementById("myBox").classList.add("hidden");
  document.getElementById("myLives").classList.add("hidden");
  document.getElementById("myRounds").classList.add("hidden");
  document.getElementById("myTime").classList.add("hidden");
  document.getElementById("TimeText").classList.add("hidden");
  
  stopClock();
  tonePlaying = false
  gamePlaying = false
}



function Tutorial() {
  document.getElementById("StartBtn").classList.add("hidden");
  document.getElementById("TutorialBtn").classList.add("hidden");
  document.getElementById("MenuBtn").classList.remove("hidden");
  document.getElementById("Tutorial").classList.remove("hidden");
  document.getElementById("Play").classList.add("hidden");
  document.getElementById("Title").classList.add("hidden");
  
}

function PlayGround() {
  document.getElementById("button1").classList.remove("hidden")
  document.getElementById("button2").classList.remove("hidden")
  document.getElementById("button3").classList.remove("hidden")
  document.getElementById("button4").classList.remove("hidden")
  document.getElementById("button5").classList.remove("hidden")
  document.getElementById("button6").classList.remove("hidden")
  document.getElementById("button7").classList.remove("hidden")
  document.getElementById("button8").classList.remove("hidden")
  document.getElementById("button9").classList.remove("hidden")
  document.getElementById("MenuBtn").classList.remove("hidden");
  
  document.getElementById("StartBtn").classList.add("hidden");
  document.getElementById("TutorialBtn").classList.add("hidden");
  document.getElementById("Play").classList.add("hidden");
}

function Custom() {
  document.getElementById("CampBtn").classList.add("hidden");
  document.getElementById("MenuBtn").classList.add("hidden");
  document.getElementById("MenuBtn3").classList.remove("hidden");
  document.getElementById("CustomBtn").classList.add("hidden");
  document.getElementById("Title").classList.add("hidden");
  
  document.getElementById("CustomMode").classList.remove("hidden");
  document.getElementById("CustomTitle").classList.remove("hidden");
  //document.getElementById("MenuBtn").classList.remove("hidden");
  
  //document.getElementById("mySelect").classList.remove("hidden");
  
  document.getElementById("Index").classList.remove("hidden");
  document.getElementById("BoxText").classList.remove("hidden");
  document.getElementById("LivesText").classList.remove("hidden");
  document.getElementById("RoundsText").classList.remove("hidden");
  document.getElementById("myBox").classList.remove("hidden");
  document.getElementById("myLives").classList.remove("hidden");
  document.getElementById("myRounds").classList.remove("hidden");
  document.getElementById("myTime").classList.remove("hidden");
  document.getElementById("TimeText").classList.remove("hidden");
  
}

function Difficulty () {
  document.getElementById("EasyBtn").classList.remove("hidden");
  document.getElementById("MediumBtn").classList.remove("hidden");
  document.getElementById("HardBtn").classList.remove("hidden");
  document.getElementById("ImpossibleBtn").classList.remove("hidden");
  
  
  document.getElementById("CampBtn").classList.add("hidden");
  document.getElementById("CustomBtn").classList.add("hidden");
}

function Easy () {
  Ro = 4;
  Lives = 3;
  time = 30;
  TimeDiff = 30;
  RandomPattern(3, 4)
  startGame();
  document.getElementById("MenuBtn").classList.add("hidden")
  document.getElementById("MenuBtn2").classList.remove("hidden")

  
  document.getElementById("button1").classList.remove("hidden")
  document.getElementById("button2").classList.remove("hidden")
  document.getElementById("button3").classList.remove("hidden")
  
  document.getElementById("TimeBar").classList.remove("hidden")
  document.getElementById("ProgressBar").classList.remove("hidden")
  
  document.getElementById("Heart").classList.remove("hidden")
  document.getElementById("Heart2").classList.remove("hidden")
  document.getElementById("Heart3").classList.remove("hidden")
  color = true;
}
function Medium () {
  Ro = 8;
  Lives = 2;
  time = 60;
  TimeDiff = 60;
  RandomPattern(6, 8)
  startGame();
  
  document.getElementById("MenuBtn").classList.add("hidden")
  document.getElementById("MenuBtn2").classList.remove("hidden")
  
  document.getElementById("button1").classList.remove("hidden")
  document.getElementById("button2").classList.remove("hidden")
  document.getElementById("button3").classList.remove("hidden")
  document.getElementById("button4").classList.remove("hidden")
  document.getElementById("button5").classList.remove("hidden")
  document.getElementById("button6").classList.remove("hidden")
  
  document.getElementById("TimeBar").classList.remove("hidden")
  document.getElementById("ProgressBar").classList.remove("hidden")
  
  document.getElementById("Heart").classList.remove("hidden")
  document.getElementById("Heart2").classList.remove("hidden")
  
  color = true;
}
function Hard () {
  Ro = 10;
  Lives = 1;
  
  document.getElementById("MenuBtn").classList.add("hidden")
  document.getElementById("MenuBtn2").classList.remove("hidden")
  
  document.getElementById("button1").classList.remove("hidden")
  document.getElementById("button2").classList.remove("hidden")
  document.getElementById("button3").classList.remove("hidden")
  document.getElementById("button4").classList.remove("hidden")
  document.getElementById("button5").classList.remove("hidden")
  document.getElementById("button6").classList.remove("hidden")
  document.getElementById("button7").classList.remove("hidden")
  document.getElementById("button8").classList.remove("hidden")
  document.getElementById("button9").classList.remove("hidden")
  
  document.getElementById("TimeBar").classList.remove("hidden")
  document.getElementById("ProgressBar").classList.remove("hidden")
  
  document.getElementById("Heart").classList.remove("hidden")

  color = true;
  time = 40;
  TimeDiff = 40;
  RandomPattern(9, 10)
  startGame();
}
function Impossible () {
  Ro = 12;
  Lives = 1;
  document.getElementById("button1").classList.remove("hidden")
  document.getElementById("button2").classList.remove("hidden")
  document.getElementById("button3").classList.remove("hidden")
  document.getElementById("button4").classList.remove("hidden")
  document.getElementById("button5").classList.remove("hidden")
  document.getElementById("button6").classList.remove("hidden")
  
  document.getElementById("TimeBar").classList.remove("hidden")
  document.getElementById("ProgressBar").classList.remove("hidden")
  
  document.getElementById("Heart").classList.remove("hidden")
  
  color = false;
  time = 40;
  TimeDiff = 40;
  RandomPattern(9, 12)
  startGame();
}

function RandomPattern(random, rounds) {
for(let t = 0; t < rounds; t++) {
        pattern[t] = getRandomInt(random)
        console.log("Random " + random)
        console.log(pattern[t])
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1
  }
}

function Results() {
  document.getElementById("button1").classList.add("hidden")
  document.getElementById("button2").classList.add("hidden")
  document.getElementById("button3").classList.add("hidden")
  document.getElementById("button4").classList.add("hidden")
  document.getElementById("button5").classList.add("hidden")
  document.getElementById("button6").classList.add("hidden")
  document.getElementById("button7").classList.add("hidden")
  document.getElementById("button8").classList.add("hidden")
  document.getElementById("button9").classList.add("hidden")
  document.getElementById("TimeBar").classList.add("hidden");
  document.getElementById("ProgressBar").classList.add("hidden");
  document.getElementById("Title").classList.add("hidden");
  
  document.getElementById("MenuBtn").classList.remove("hidden");
  document.getElementById("MenuBtn2").classList.add("hidden");
  document.getElementById("MenuBtn3").classList.add("hidden");
  
  document.getElementById("Score").classList.remove("hidden");
  document.getElementById("Lives").classList.remove("hidden");
  document.getElementById("Time2").classList.remove("hidden");
  
  document.getElementById("Heart").classList.add("hidden")
  document.getElementById("Heart2").classList.add("hidden")
  document.getElementById("Heart3").classList.add("hidden")
}


function startGame() {
  //alert(time);
  document.getElementById("EasyBtn").classList.add("hidden")
  document.getElementById("MediumBtn").classList.add("hidden")
  document.getElementById("HardBtn").classList.add("hidden")
  document.getElementById("ImpossibleBtn").classList.add("hidden")
  //document.getElementsByClassName("Progress").remove("hidden")  
  
  myInterval = setInterval(clock, 1000)
  //document.getElementById("Change").classList.remove("hidden");
 // mistakes = 0;
  //mistakesEl.innerText = strikes;
  progress = 0;
  gamePlaying = true;
    //document.getElementById("startButton").classList.add("hidden");
    //document.getElementById("stopButton").classList.remove("hidden");
    playclueSequence();
  console.log("Hello");
  
}

function lightButton(button) {
    document.getElementById("button" + button).classList.add("lit");
    
}
function light() {
    
    document.getElementById("button1").classList.add("lit")
    document.getElementById("button2").classList.add("lit")
    document.getElementById("button3").classList.add("lit")
    document.getElementById("button4").classList.add("lit")
    document.getElementById("button5").classList.add("lit")
    document.getElementById("button6").classList.add("lit")
    document.getElementById("button7").classList.add("lit")
    document.getElementById("button8").classList.add("lit")
    //document.getElementById("button9").classList.add("lit")
    
}
function clear() {
    document.getElementById("button1").classList.remove("lit")
    document.getElementById("button2").classList.remove("lit")
    document.getElementById("button3").classList.remove("lit")
    document.getElementById("button4").classList.remove("lit")
    document.getElementById("button5").classList.remove("lit")
    document.getElementById("button6").classList.remove("lit")
    document.getElementById("button7").classList.remove("lit")
    document.getElementById("button8").classList.remove("lit")
    //document.getElementById("button9").classList.remove("lit")
}

function clearButton(button) {
    document.getElementById("button" + button).classList.remove("lit");
}

function playsingleClue(button) {
    if(gamePlaying) {
      if (Boolean(color)) {
        lightButton(button);
        //console.log("HI")
    } 
      
        playTone(button, holdTime);
        setTimeout(clearButton, holdTime, button);
        
    }

}
var reptime = 0;
function playclueSequence() {
    guessCounter = 0;
    let delay = waitTime;
    for (let i = 0; i <= progress; i++) {
        console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
        setTimeout(playsingleClue, delay, pattern[i])
        delay += holdTime
        delay += 100;
        stop();
    }
}

var countDown = setInterval (() => {
  
  
})
document.addEventListener("DOMContentLoaded", function(event) {
  /* DOM is ready, so we can query for its elements */
  var dragonHealth = document.getElementById("file").value;
  //console.log(dragonHealth);
  
  
  var countDown = setInterval (() => {
  document.getElementById("file").value = (((TimeDiff - time) / TimeDiff) * 100);
  
}, 1000)
  //console.log(time)
  });

var countDown = setInterval (() => {
  
  
})
document.addEventListener("DOMContentLoaded", function(event) {
  /* DOM is ready, so we can query for its elements */
  var dragonHealth = document.getElementById("Pro").value;
  //console.log(dragonHealth);
  
  
  var countDown = setInterval (() => {
  document.getElementById("Pro").value = ((progress  / Ro) * 100);
  
}, 1000)
  //console.log(progress)
  //console.log(rounds)
  });





function clock() {
    time -= 1;
    document.getElementById("time-el").innerHTML = time;
    gameStopTime();
  
}

function gameStopTime() {
    console.log("Time: " + time)
    if (time == -1) {
        loseGame();
    }
}

function guess(button) {
    console.log("user guessed " + button);
    if(!gamePlaying){
        return;
    }

    if(pattern[guessCounter] == button) {
        if (guessCounter == progress) {
            if (progress == pattern.length - 1) {
              
                winGame();
            } else {
                progress++;
                playclueSequence();
            }
        } else {
            guessCounter++
        }
        
    } else if (Lives > 1){
        light();
        setTimeout(clear, (200), button);
        
        Lives--;
      if (Lives == 2) {
          document.getElementById("Heart").classList.add("hidden")
          
      } else if (Lives == 1) {
          
        document.getElementById("Heart2").classList.add("hidden")
       
      }
        //mistakesEl.innerText = strikes
        //console.log("Incorrect")
        playclueSequence();
        
    } else {
        //mistakesEl.innerText = strikes
        loseGame();
    }
    
//console.log(strikes)
//console.log(mistakes)
}

function stopClock() {
    clearInterval(myInterval);
    //time = 60;
    //document.getElementById("time-el").innerHTML = time;
}
function loseGame() {
    stopClock();
    stopGame();
  tonePlaying = false
  alert("Game Over. You Lost.")
  if(document.getElementById("time-el").innerHTML == -1) {
    (document.getElementById("time-el").innerHTML = 0);
    console.log("HI");
  }
  document.getElementById("count-el").innerHTML = (Lives - 1);
    Results();
    
}
function stopGame() {
   // mistakes = 0;
    //Lives = 3;
   document.getElementById("count-el").innerHTML = Lives
    gamePlaying = false;
}
function winGame() {
  stopClock()
    stopGame();
    alert("Game Over. You Win!")
  Results();
}






// Sound Synthesis Functions
const freqMap = {
    1: 261.6,
    2: 329.6,
    3: 392,
    4: 466.2,
    5: 532,
    6: 580.4,
    7: 610,
    8: 650.6,
    9: 700
  }
  function playTone(btn,len){ 
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
    setTimeout(function(){
      stopTone()
    },len)
  }
  function startTone(btn){
    if(!tonePlaying){
      context.resume()
      o.frequency.value = freqMap[btn]
      g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
      context.resume()
      tonePlaying = true
    }
  }
  function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
  }
  
  // Page Initialization
  // Init Sound Synthesizer
  var AudioContext = window.AudioContext || window.webkitAudioContext 
  var context = new AudioContext()
  var o = context.createOscillator()
  var g = context.createGain()
  g.connect(context.destination)
  g.gain.setValueAtTime(0,context.currentTime)
  o.connect(g)
  o.start(0)

