var playing=false;
var score;
var action;
var timeremaining;
var correctanswer;

//if we click on the start/reset
   document.getElementById("startreset").onclick= function(){
       //if we are playing
      if(playing==true)
          { location.reload(); //reload page
}  else{//if we are not playing
    //change mode to,playing
    playing=true;
    hide("gameover");
    score=0; //set score to 0
    document.getElementById("scorevalue").innerHTML=score; 
    
    //shut countdown box
    show("timeremaining");
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML=timeremaining;
    
    //change button to reset
    document.getElementById("startreset").innerHTML="Reset game";
    //start countdown
    startcountdown();
    generateQA();
    }
   }  
 


 //reduce time by 1sec in loops
  //time-left??
    //yes-continue
    //no-gameover

// genereate new questions

   for(i=1;i<5;i++)
       {
document.getElementById("box"+i).onclick=function(){
//clicking on answerbox
       if(playing == true){
           
      if (this.innerHTML== correctanswer)
          { score++;
           document.getElementById("scorevalue").innerHTML=score;
         //hide wrong box
           hide("wrong");
           show("correct");
           setTimeout(function(){
               hide("correct");
           },1000);
           generateQA();
          }
           
        else{
            
            hide("correct");
            show("wrong");
        setTimeout(function(){
               hide("wrong");
           },1000);
          
           }
       }
   }}
//if we click on answerbox
   //if we are nt playing
     //correct?
      //yes
        //increase score
       //show correct box for 1sec
    //generate new question
//no
   //show try again for 1sec
   
   //functions
   function startcountdown(){
       action=setInterval(function(){
           timeremaining -= 1;
            document.getElementById("timeremainingvalue").innerHTML=timeremaining;
     if(timeremaining==0){
         stopcountdown();
           show("gameover");
           document.getElementById("gameover").innerHTML="<p> Game over</p> <p> your score is "+score+"</p>";
           
       hide("timeremaining");
           hide("correct");
           hide("wrong");
           playing=false;
         document.getElementById("startreset").innerHTML="Start game";
     }
       },1000);
}

function stopcountdown(){ clearInterval(action);
}

function hide(Id){
    document.getElementById(Id).style.display="none";
}
function show(Id){
    document.getElementById(Id).style.display="block";
}
function generateQA(){
    
 var x = 1+Math.round(19*Math.random());
var y = 1+Math.round(9*Math.random());
 correctanswer = x*y;
 document.getElementById("question").innerHTML=x+"x"+y;
var correctposition  = 1 + Math.round(3*Math.random());
    document.getElementById("box"+correctposition).innerHTML=correctanswer;
    //fill one box with correct answer
    
    var answers=[correctanswer];
    for(i=1;i<5;i++)
        {
if (i !== correctposition){
var wronganswer;
 do{ wronganswer =(1+Math.round(19*Math.random()))*(1+Math.round(9*Math.random()));}  while(answers.indexOf(wronganswer)>-1)
      document.getElementById("box"+i).innerHTML=wronganswer;
            answers.push(wronganswer);

}}
   
}
