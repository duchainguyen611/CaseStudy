class Pipes {
    constructor(cX,cY,space){
        this.cX = cX;
        this.cY = cY;
        this.cW = 110;
        this.cH = 700;
        this.space = space;
        this.sXa = 54;
        this.sYa = 320;
        this.sXu = 83;
        this.sYu = 320;
        this.sW = 29;
        this.sH = 163;
        this.dx = -2;
    }

    draw(){
        ctx.beginPath();
        ctx.drawImage(sprites,this.sXa,this.sYa,this.sW,this.sH,this.cX,this.cY,this.cW,this.cH);
        ctx.drawImage(sprites,this.sXu,this.sYu,this.sW,this.sH,this.cX,this.cY + this.cH + this.space,this.cW,this.cH);
    }
}