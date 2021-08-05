class Medal {
    constructor(i){
        this.sX = [120,120,500];
        this.sY = [257,281,500];
        this.sW = 25;
        this.sH = 24;
        this.cX = canvas.width/2 - 105;
        this.cY = 280;
        this.cW = 80;
        this.cH = 80;
        this.i = i;
    }

    draw(){
        ctx.beginPath();
        ctx.drawImage(sprites,this.sX[this.i],this.sY[this.i],this.sW,this.sH,this.cX,this.cY,this.cW,this.cH);
    }

    update(){
        if(score.value == 0){
            this.i = 2;
        }else if(score.value >= maxScore.value){
            this.i = 1;
        }else if(score.value >0 && score.value < maxScore){
            this.i = 0;
        }else{
            this.i = 2;
        }
    }
}