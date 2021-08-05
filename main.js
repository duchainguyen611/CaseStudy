let canvas = document.querySelector('.canvas');
let ctx = canvas.getContext('2d');
let die = new Audio('./sound/die.mp3');
let hit = new Audio('./sound/hit.mp3');
let point = new Audio('./sound/point.mp3');
let swoosh = new Audio('./sound/swoosh.mp3');
let wing = new Audio('./sound/wing.mp3');

canvas.width="500"; 
canvas.height="700";

const sprites = new Image();
sprites.src = './image/sprites.png';

const obstacle = new Image();
obstacle.src = './image/fireball.png';


let game = 'start';
let frame = 0;

//Screen
const startGame = {
    draw: function(){
        ctx.beginPath();
        ctx.drawImage(sprites,350,90,90,25,canvas.width/2-135,90,270,75);
        ctx.drawImage(sprites,291,57,100,33,canvas.width/2-135,230,270,75);
        ctx.drawImage(sprites,291,86,58,54,canvas.width/2-100,350,200,180);
    }
}

const endGame = {
    draw: function(){
        ctx.beginPath();
        ctx.drawImage(sprites,390,56.5,105,25,canvas.width/2-140,100,300,80);
        ctx.drawImage(sprites,0,258,120,60,canvas.width/2-140,230,310,160);
        ctx.drawImage(sprites,350,116,60,35,canvas.width/2-50,420,120,70);
    }
}

const boom = new Image();
boom.src = './image/boom.png'


//Ground
let arrGround = [];
for(let i=0;i<4;i++){
    let ground = new Ground(165*i,650);
    arrGround.push(ground);
}

function drawArrGround(){
    arrGround.forEach(ground => ground.draw())
} 
function updateArrGround(){
    arrGround.forEach(ground =>{
        ground.cX += ground.dx;
    })
    if(arrGround[0].cX <= -165){
        arrGround.splice(0,1);
        let ground = new Ground(arrGround[2].cX + 165,650);
        arrGround.push(ground);
    }
}
//bird
let bird = new Bird(120,canvas.height/2-12);

//background
const bg = {
    sX: 0,
    sY: 0,
    sW: 140,
    sH: 210,
    cX: 0,
    cY: 0,
    cW: 500,
    cH: 650,
    draw: function(){
        ctx.beginPath();
        ctx.drawImage(sprites,this.sX,this.sY,this.sW,this.sH,this.cX,this.cY,this.cW,this.cH);
    }
}


//random
function random(min,max){
    return Math.ceil(Math.random()*(max-min)+min);
}

//pipes
let arrPipes = [];
function newPipes(){
    for(let i=1;i<4;i++){
        let pipe = new Pipes(random(500,550)*i,random(-640,-300),200);
        arrPipes.push(pipe);
    }
}
newPipes();

function drawArrPipe(){
    arrPipes.forEach(pipe => pipe.draw())
} 

function updateArrPipe(){
    arrPipes.forEach(pipe =>{
        pipe.cX += pipe.dx;
    })
    if(arrPipes[0].cX <= -120){
        arrPipes.splice(0,1);
        let pipe = new Pipes(arrPipes[arrPipes.length-1].cX + random(500,550), random(-640,-300),200);
        arrPipes.push(pipe);
    }
}

//Obstacle
let arrFireball = [];
function newFireball(){
    for(let i=1;i<2;i++){
        let fireball = new Fireball(550,random(100,600));
        arrFireball.push(fireball);
    }
}
newFireball();

function drawArrFireball(){
    arrFireball.forEach(fireball => fireball.draw())
} 

function updateArrFireball(){
    arrFireball.forEach(fireball =>{
        fireball.cX += fireball.dx;
    })
    if(arrFireball[0].cX <= -( arrFireball[0].cW + 10)){
        arrFireball.splice(0,1);
        let fireball = new Fireball(random(530,550),random(100,600));
        arrFireball.push(fireball);
    }
}

//Score;
let score = new Score(0,340,391);
let maxScore = new Score(0,0,0);

function result(){
    let result = score.value;
    ctx.font = "34px Time new roman";
    ctx.fillText(result, 350, 305);
    ctx.fillText(maxScore.value,350,360);
}

function drawBonk(x,y){
    let bonk = new Bonk(x,y);
    bonk.draw();
}
//Medal
let medal = new Medal(0);

//xử lí click chuột
canvas.addEventListener('click',function(event){
    switch(game){
        case 'start':
            game = 'play';
            swoosh.play();
            break;
        case 'play':
            bird.v = -10;
            wing.play();
            break;
        case 'end':
            if(
                event.offsetX > canvas.width/2 - 50 &&
                event.offsetX < canvas.width/2 + 50 &&
                event.offsetY > 420 &&
                event.offsetY < 490
            ){  
                swoosh.play();
                score.value = 0;
                arrPipes = [];
                newPipes();
                arrFireball = [];
                newFireball();
                bird.v = 0;
                bird.cY = canvas.height/2-12;
                game = 'start';
            }
            break;
    }
});


//draw
function draw(){
    bg.draw();
    if(game == 'start'){
        startGame.draw();
    }
    drawArrPipe(); 
    drawArrGround();
    drawArrFireball();
    if(game == 'play'){
        score.draw();
    }
    bird.draw();
    if(game == 'end'){
        endGame.draw();
        result();
        medal.draw();
    }
}

function update(){
    if(game == 'play'){
        updateArrPipe();
        updateArrGround();
        updateArrFireball();
    }
    bird.update();
    medal.update();
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width,canvas.height);
    frame++;
    draw();
    update();
}

animate();
