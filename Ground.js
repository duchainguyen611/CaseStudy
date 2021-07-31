class Ground {
    constructor(cX,cY){
        this.cX = cX;
        this.cY = cY;
        this.sX = 295;
        this.sY = 0;
        this.sW = 170;
        this.sH = 55;
        this.cW = 215;
        this.cH = 143;
        this.dx = -2;
    }
    draw(){
        ctx.beginPath();
        ctx.drawImage(sprites,this.sX,this.sY,this.sW,this.sH,this.cX,this.cY,this.cW,this.cH);
    }
}
