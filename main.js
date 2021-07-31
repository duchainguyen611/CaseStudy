let canvas = document.querySelector('.canvas');
let ctx = canvas.getContext('2d');

canvas.width="500"; 
canvas.height="700";

const sprites = new Image();
sprites.src = './image/sprites.png';

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
        arrGround.push(ground)
;    }
}
//bird
let bird = new Bird(150,canvas.height/2-12);

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
// function random(min,max){
//     return Math.ceil(Math.random()*(max-min)+min);
// }

//pipes
// let arrPipes = [];
// for(let i=0;i<3;i++){
//     let pipe = new Pipes(random(530,600)*i,random(-660,-300),200);
//     arrPipes.push(pipe);
// }

// function drawArrPipe(){
//     arrPipes.forEach(pipe => pipe.draw())
// } 

// function updateArrPipe(){
//     arrPipes.forEach(pipe =>{
//         pipe.cX += pipe.dx;
//     })
//     if(arrPipes[0].cX <= -90){
//         arrPipes.splice(0,1);
//         let pipe = new Pipes(arrPipes[arrPipes.length -1].cX + random(400,500), random(-600,-300),random(200,150));
//         arrPipes.push(pipe)
// ;    }
// }

canvas.addEventListener('click',function(){
    switch(game){
        case 'start':
            game = play;
            break;
        case 'play':
            console.log('Choigame');
            break;
        case 'end':
            console.log('Endgame');
            break;
    }
});

//draw
function draw(){
    console.log(game);
    bg.draw();
    if(game == 'start'){
        startGame.draw();
    }
    drawArrGround();
    // drawArrPipe();
    bird.draw();
}

function update(){
    if(game == 'play'){
        updateArrGround();
        // updateArrPipe();
    }
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width,canvas.height);
    frame++;
    draw();
    update();
}

animate();