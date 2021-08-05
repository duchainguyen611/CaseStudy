const arrNumber = [
    {name: 0,sX: 492,sY: 60,sW: 17,sH: 18,cW: 60 ,cH: 60 },
    {name: 1,sX: 136,sY: 451,sW: 12,sH: 22,cW: 50 ,cH: 70 },
    {name: 2,sX: 290.5,sY: 156.5,sW: 15,sH: 22,cW: 50 ,cH: 70},
    {name: 3,sX: 305,sY: 156.5,sW: 14.5,sH: 22,cW: 50,cH: 70},
    {name: 4,sX: 320,sY: 156.5,sW: 13.5,sH: 22,cW: 50,cH: 70},
    {name: 5,sX: 333,sY: 156.5,sW: 14,sH: 21,cW: 50,cH: 70},
    {name: 6,sX: 290.5,sY: 180,sW: 15.1,sH: 22,cW: 50,cH: 70},
    {name: 7,sX: 305,sY: 180,sW: 14.5,sH: 22,cW: 50,cH: 70},
    {name: 8,sX: 320,sY: 180,sW: 13.5,sH: 22,cW: 50,cH: 70},
    {name: 9,sX: 333,sY: 180,sW: 14,sH: 22,cW: 50,cH: 70}
];

class Score{
    constructor(value,cX,cY){
        this.value = value;
        this.cX = cX;
        this.cY = cY;
    }
    draw(){
        if(this.value >= 10){
            this.split = (this.value.toString()).split('');
            arrNumber.forEach(number =>{
                if(this.split[0] == number.name){
                    ctx.drawImage(sprites,number.sX,number.sY,number.sW,number.sH,canvas.width/2 - 40,80,number.cW,number.cH);
                }
                if(this.split[1] == number.name){
                    ctx.drawImage(sprites,number.sX,number.sY,number.sW,number.sH,canvas.width/2 + 10,80,number.cW,number.cH);
                }
            })
        }else{
            this.split = this.value.toString();
            arrNumber.forEach(number =>{
                if(this.split[0] == number.name){
                    ctx.drawImage(sprites,number.sX,number.sY,number.sW,number.sH,canvas.width/2 - 30,80,number.cW,number.cH);
                }
            })
        }
    }
}