var readlineSync=require("readline-sync");
var score=0;
var highscore=10;

console.log("how well you know Manzit?\n\n")
var user=readlineSync.question("User What is your name?: ")

console.log("\n\nWelcome "+ user + " :) ");
console.log("Rules: 2 points for every correct answer ");
console.log("lets play!!\n\n");

function play(question,answer)
{
userAnswer=readlineSync.question(question);
if((userAnswer.toLowerCase())===answer)
{
  score=score+2;
  console.log("correct :) "+score);
}
else
{
 console.log("wrong!!! "+score)
}


}

var questions=[
  
  {
  question:"what is Manzit's surname?: ",
  answer:"chunduri"
  },
  
  {
  question:"Who is Manzit's favourite Hero?: ",
  answer: "pawan kalyan"
  },

  {
  question:"what is Manzit's favourite Sport?: ",
  answer:"volley ball"
  },

  {
  question:"what is Manzit's favourite colour?: ",
  answer:"black"
  },

  {
  question:"which is the only PC game Manzit plays? ",
  answer:"rainbow six-seige"
  },

 
  {
    question:"what Manzit will prefer? coding or Netflix: ",
    answer: "coding"
  }
  
]

for(i=0;i<questions.length;i++)
{
 play(questions[i].question,questions[i].answer)

}
console.log("\n\n Good!! your final score is: "+ score );




var Players=[
  {
    name:"Manzit ",
    scored:12
  },
  {
    name:user,
    scored:score
  }

];

console.log("\n-----------------------------------");
if(score===Players[0].scored)
console.log("hurray!!! you created new highscore");
console.log("-----------------------------------\n");


console.log("HIGHSCORE\n");

function higher(name,scored)
{
  
  console.log(name + " : " + scored);
}


for(i=0;i<Players.length;i++)
{
  higher(Players[i].name,Players[i].scored);
}


