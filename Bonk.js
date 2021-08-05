class Bonk{
    constructor(cX,cY){
        this.cX = cX;
        this.cY = cY;
        this.cW = 80;
        this.cH = 80;
    }
    draw(){
        ctx.beginPath();
        ctx.drawImage(boom,this.cX,this.cY,this.cW,this.cH);
    }
    delete(){
        ctx.clearRect(x, y, width, height);   
    }
}