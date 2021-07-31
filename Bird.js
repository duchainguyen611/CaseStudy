class Bird {
    constructor(cX,cY){
        this.cX = cX;
        this.cY = cY;
        this.animate = [
            {sX:0,sY:485},
            {sX:25,sY:485},
            {sX:50,sY:485},
            {sX:25,sY:485},
        ]
        this.sW = 26;
        this.sH = 20;
        this.cW = 52;
        this.cH = 40;
        this.i = 0;
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
        if(game = 'play'){
            if(frame%16==0){
                this.i++;
                if(this.i>3){
                    this.i=0;
                }
            }
        }
        ctx.drawImage(sprites,this.animate[this.i].sX,this.animate[this.i].sY,this.sW,this.sH,this.cX,this.cY,this.cW,this.cH);
    }
}