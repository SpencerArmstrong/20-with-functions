var ptotal = 0
var ctotal = 0


var pscore = 0 
var cscore = 0

function nameq(a) {
    var name = prompt(`what is ur name`)
    return name
}

function ranmath() {
  var num = Math.floor(Math.random() * 10) + 1;
  return num
}

function rngp(b) {
  alert (` hello ${name} welcome to twenty! you go first.`)
  do  {
    pscore = pscore + num;
    var pnum = prompt(`you rolled ${num} your new score is ${pscore}. do you want to roll again?`);
    return num
  }while ((pnum != "no") && (pscore < 20))
  if(pscore > 20){
    ctotal + 1;
    alert(`you went over 20, you lose.`);
    
  }
}

function rngc(c) {
  do {
  cscore = cscore + num
  alert(`computer rolled ${num} and its new score is ${cscore}`)
  return num
} while (cscore < 16)

}

function end(d) {
  if (pscore > 20){
    alert(`you got over 20, you lose`);
    ctotal++;
   } else if ((pscore < cscore) && (pscore <= 20) && (cscore <= 20) ){
  alert("hahaha you lose bum ez win")
  ctotal++;
   } else if ((cscore < pscore) && (cscore <= 20) && (pscore <= 20) ){
  alert("u win")
   ptotal++
   var q = prompt(`You have a score of ${ptotal}. The computer has a score of ${ctotal}. do you want to play again?`);
  }while (q != "no");
}


