let gameSeq = [];

let usrSeq = [];

let boxes = ["one", "two", "three", "four"];

let gameOn = false;

let message = document.querySelector("p");

let level = 0;

document.addEventListener("keypress", function(){
    gameSeq=[];
    level=0;
    if(!gameOn){
        gameOn = true;
        levelUp();
    }
});

function levelUp(){
    usrSeq=[];
    //Increase level
    level++;
    message.innerText = `Level ${level}`;

    //Flash a random btn
    let randInt = Math.floor(Math.random()*4);
    let boxNum = boxes[randInt]
    gameSeq.push(boxNum);
    console.log(`Game Seq : ${gameSeq}`)
    let randBtn = document.querySelector(`.${boxNum}`);

    flash(randBtn);
}

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 250);
}

let btns = document.querySelectorAll(".btn");

function gameOver(){
    message.innerText = `Game Over! Your Score is ${level}. Press any key to restart.`;
    gameOn= false;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "#E3CAA5";
    }, 200);
}

function btnPress(){
    flash(this);
    usrSeq.push(this.classList[0]);
    console.log(usrSeq);

    let lastUsrIdx = usrSeq.length-1;
    if(!( gameSeq[lastUsrIdx] === usrSeq[lastUsrIdx])){
        gameOver();
    }else if(gameSeq.length === usrSeq.length){
        setTimeout(()=>{
            levelUp();
        }, 1000);
    }
}

for(let btn of btns){
    btn.addEventListener("click", btnPress);
}