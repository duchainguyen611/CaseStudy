class Fireball{
    constructor(cX,cY){
        this.cX = cX;
        this.cY = cY;
        this.cW = 200;
        this.cH = 100;
        this.dx = -5;
    }
    draw(){
        ctx.beginPath();
        ctx.drawImage(obstacle,this.cX,this.cY,this.cW,this.cH);
    }
}