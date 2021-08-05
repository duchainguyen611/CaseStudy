class Bird {
    constructor(cX,cY){
        this.cX = cX;
        this.cY = cY;
        this.animate = [
            {sX:0,sY:485},
            {sX:28,sY:485},
            {sX:56,sY:485},
            {sX:28,sY:485},
        ]
        this.sW = 23;
        this.sH = 18;
        this.cW = 80;
        this.cH = 60;
        this.i = 0;
        this.v = 0;
        this.a = 0.5;
    }
    draw(){
        ctx.beginPath();
        if(game == 'start'){
            if(frame%35==0){
                this.i++
                if(this.i>3){
                    this.i=0;
                }
            }
        }
        if(game == 'play'){
            if(frame%16==0){
                this.i++;
                if(this.i>3){
                    this.i=0;
                }
            }
        }
        ctx.drawImage(sprites,this.animate[this.i].sX,this.animate[this.i].sY,this.sW,this.sH,this.cX,this.cY,this.cW,this.cH);
    }

    update(){
        if(game == 'play'){
            this.v = this.v + this.a;
            this.cY += this.v;
        }

        //va chạm đất
        if(this.cY + this.cH >= 680){
            this.v = 0;
            this.cY = 630;
            game = 'end';
        } 
    
        //va chạm ống
        if(this.cX + this.cW > arrPipes[0].cX + 20 && this.cX < arrPipes[0].cX + arrPipes[0].cW - 20 && 
            (this.cY < arrPipes[0].cY + arrPipes[0].cH -20 || this.cY + this.cH > arrPipes[0].cY + arrPipes[0].cH + arrPipes[0].space +10 ))
        {
            game = 'end';
        }

        //va chạm quả cầu lửa
        if(this.cX + this.cW > arrFireball[0].cX + 43 && this.cX < arrFireball[0].cX + arrFireball[0].cW -43 &&
            this.cY + this.cH > arrFireball[0].cY + 38 && this.cY +20 < arrFireball[0].cY + arrFireball[0].cH -38){
                drawBonk(this.cX,this.cY);
                game = 'end';
                endGame.draw();
            } 
        
        //ăn điểm
        if(this.cX == arrPipes[0].cX + 110 || this.cX == arrPipes[0].cX + 109)
        {
            score.value++;
            maxScore.value = Math.max(score.value,maxScore.value);
            point.play();
        }
    }
    
}

