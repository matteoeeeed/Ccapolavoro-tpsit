var myGamePiece;
var imagine1;
var imagine2;
var imagine3;
var imagine4;
var imagine5;
var imagine6;
var imagine7;
var imagine8;
var imagine9;
var imagine10;
var imagine11;
var imagine12;
var imagine13;
var imagine14;
var imagine15;
var imagine16;
var imagine17;
var imagine18;
var imagine19;
var imagine20;
var imagine21;
var imagine22;
var testovita;
var testopunti;
var testopunti2;
var testopunti3;
var suono;
var suono1;
var suono2;
var suono3;
var suono4;
var suono5;
var suono6;
var suono7;
var suono8;
var suono9;
var suono10;
var suono11;
var suono12;
var suono13;
var suono14;
var musica;
var musica2;
var nemici1 = [];
var nemici2 = [];
var nemici3 = [];
var nemici4 = [];
var nemici5 = [];
var nemici6 = [];
var nemici7 = [];
var nemici8 = [];
var nemici9 = [];
var nemici10 = [];
var nemici11 = [];
var nemici12 = [];
var nemici12i = [];
var nemici122 = [];
var nemici1222 = [];
var nemici13 = [];
var nemici13i = [];
var nemici133 = [];
var nemici1333 = [];
var nemici14 = [];
var nemici15 = [];
var nemici16 = [];
var nemici17 = [];
var nemici18 = [];
var nemici19 = [];
var nemici20 = [];
var nemici21 = [];
var nemici22 = [];
var nemici23 = [];
var nemici24 = [];
var nemici25 = [];
var nemici26 = [];
var nemicibb = [];
var nemici27 = [];
var nemici28 = [];
var nemici29 = [];
var nemici30 = [];
var nemici31 = [];
var nemici32 = [];
var ballmario;
var moneta = [];
var fungo = [];
var fungo2 = [];
var fungo3 = [];
var tubo1 = [];
var tubo2 = [];
var cannoneb = [];
var cannoneb2 = [];
var monetap;

function startGame() {
    myGamePiece = new component(100, 80, "img/ms1.png", 64, 129,"image");
    ballmario = new component(100, 80, "img/firem.png", 74, 129,"image");
    monetap= new component(70, 70, "img/c3.png", 524, 1,"image");
    imagine1 = new component(170, 80, "img/g2.png", 64, 129,"image");
    imagine2 = new component(10233, 80, "img/g3.png", 64, 129,"image");
    imagine3 = new component(100, 80, "img/g4.png", 64, 129,"image");
    imagine4 = new component(100, 80, "img/c1.png", 64, 129,"image");
    imagine5 = new component(100, 80, "img/c2.png", 64, 129,"image");
    imagine6 = new component(100, 80, "img/c3.png", 64, 129,"image");
    imagine7 = new component(100, 80, "img/c4.png", 64, 129,"image");
    imagine8 = new component(100, 80, "img/c5.png", 64, 129,"image");
    imagine9 = new component(100, 80, "img/c6.png", 64, 129,"image");
    imagine10 = new component(400, 80, "img/c7.png", 64, 129,"image");
    imagine11 = new component(80, 100, "img/k2.png", 64, 129,"image");
    imagine12 = new component(50, 50, "img/k3.png", 64, 129,"image");
    imagine13 = new component(50, 50, "img/k4.png", 64, 129,"image");
    imagine14 = new component(50, 50, "img/p1.png", 64, 129,"image");
    imagine15 = new component(50, 50, "img/p2.png", 64, 129,"image");
    imagine16 = new component(50, 50, "img/p3.png", 64, 129,"image");
    imagine17 = new component(50, 50, "img/k11.png", 64, 129,"image");
    imagine18 = new component(50, 50, "img/k22.png", 64, 129,"image");
    imagine19 = new component(50, 50, "img/kr1.png", 64, 129,"image");
    imagine20 = new component(50, 50, "img/kr2.png", 64, 129,"image");
    imagine21 = new component(50, 50, "img/kr4.png", 64, 129,"image");
    imagine22 = new component(50, 50, "img/kr3.png", 64, 129,"image");
    suono = new sound('musica/r.wav');
    suono1 = new sound('musica/c.wav');
    suono2 = new sound('musica/mg.wav');
    suono3 = new sound('musica/1.wav');
    suono4 = new sound('musica/2.wav');
    suono5 = new sound('musica/3.wav');
    suono6 = new sound('musica/d1.wav');
    suono7 = new sound('musica/d2.wav');
    suono8 = new sound('musica/d3.wav');
    suono9 = new sound('musica/p.wav');
    suono10 = new sound('musica/ppp.wav');
    suono11 = new sound('musica/tt.wav');
    suono12 = new sound('musica/bb.wav');
    suono13 = new sound('musica/fire.wav');
    suono14 = new sound('musica/up.wav');
    suono15 = new sound('musica/mc.mp3');
    musica = new sound('musica/m18.mp3');
    testovita = new component('50px','Consolas','yellow',42,43,'text');
    testopunti = new component('50px','Consolas','white',1200,43,'text');
    testopunti2 = new component('50px','Consolas','white',620,43,'text');
    testopunti3 = new component('50px','Consolas','white',20,943,'text');
    myBackground = new component(2000, 1400, "img/lava.png", 0, 0, "background");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 2000;
        this.canvas.height = 960;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.punti = 0;
        this.vitaMario=1000;
        this.monetar = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");            
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

setInterval(costume,10);
function costume(){
num=Math.floor((Math.random() * 5) + 1);

if(num==3){
    myGamePiece.image.src="img/ms22.png";
    ballmario.image.src="img/firem.png";
}
if(num==4){
    myGamePiece.image.src="img/ms22.png";
    ballmario.image.src="img/fire2m.png";
}
if(num==1){
    ballmario.image.src="img/fire3m.png";
}

if(num==2){
    ballmario.image.src="img/fire4m.png";
}

if (myGameArea.keys && myGameArea.keys[37]) {
    num = Math.floor((Math.random() * 2) + 5); 
    if (num == 5) {
        myGamePiece.image.src = "img/ms7.png";
    } else if (num == 6) {
        myGamePiece.image.src = "img/ms6.png";
    }
}

 if (myGameArea.keys && myGameArea.keys[32]) {
      suono.play();
        if(num==1){
            myGamePiece.image.src="img/ms3.png";
        }
        if(num==2){
            myGamePiece.image.src="img/ms4.png";
        }
        if(num==3){
            myGamePiece.image.src="img/ms5.png";
        }

            if(num==4){
                myGamePiece.image.src="img/ms8.png";
            }
            if(num==5){
                myGamePiece.image.src="img/ms9.png";
            }
            if(num==6){
                myGamePiece.image.src="img/ms8.png";
            }
        }
    }

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
           
        }
        
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
   
        }
    
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
                this.image.src = color;
        if (type == "background") {
            ctx.drawImage(this.image, 
                this.x + this.width, 
                this.y,
                this.width, this.height);
        }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
  
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    
    }    

    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
 
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGameArea.frameNo += 1;
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;    
    myBackground.speedX = 0;
    myBackground.newPos();    
    myBackground.update();
    musica.play();
   
    if (myGameArea.keys && myGameArea.keys[37]){
        myGamePiece.speedX = -22;  
    }

    if (myGameArea.keys && myGameArea.keys[39]) {
        myGamePiece.speedX = 22;
    }

    if (myGameArea.keys && myGameArea.keys[38]) {
        myGamePiece.speedY = -20; 
    }
    
    if (myGameArea.keys && myGameArea.keys[40]) {
        myGamePiece.speedY = 20; 
    }
 
    if(myGamePiece.x>1980){
        myGamePiece.speedX = -22; 
    }
    if(myGamePiece.x<10){
        myGamePiece.speedX = 22; 
    }
    if(myGamePiece.y>970){
        myGamePiece.speedY = -22; 
    }
    if(myGamePiece.y<10){
        myGamePiece.speedY = 22; 
    }

    //zona clonazione
    if(myGameArea.frameNo>0){
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        num=Math.floor(Math.random()*970)+10;
        x = myGameArea.canvas.width;
        y = myGameArea.canvas.height - num;
        nemici1.push(new component(120, 140, "img/g1.png", x, y, "image"));
        }
    }

    if(myGameArea.frameNo>0){
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        num=Math.floor(Math.random()*970)+10;
        x = myGameArea.canvas.width - 2300;
        y = myGameArea.canvas.height - num;
        nemici2.push(new component(120, 140, "img/g3.png", x, y, "image"));
    }
    }

    if(myGameArea.frameNo>0){
    if (myGameArea.frameNo == 1 || everyinterval(300)) {
        num=Math.floor(Math.random()*970)+10;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        nemici3.push(new component(120, 160, "img/k1.png", x, y, "image"));
    }
}

if(myGameArea.frameNo>0){
    if (myGameArea.frameNo == 1 || everyinterval(300)) {
        num=Math.floor(Math.random()*970)+10;
        x = myGameArea.canvas.width -2200;
        y = myGameArea.canvas.height - num;
        nemici5.push(new component(120, 160, "img/k11.png", x, y, "image"));
    }
}

if(myGameArea.frameNo>0){
    if (myGameArea.frameNo == 1 || everyinterval(400)) {
        num=Math.floor(Math.random()*970)+10;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        nemici6.push(new component(120, 160, "img/kr1.png", x, y, "image"));    
    }
}

    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        num=Math.floor(Math.random()*870)+10;
        num2=Math.floor(Math.random()*13)+1;
        x = myGameArea.canvas.width ;
        x2 = myGameArea.canvas.width -70;
        x3 = myGameArea.canvas.width -140;
        x4 = myGameArea.canvas.width -210; 
        x5 = myGameArea.canvas.width -280; 
        y = myGameArea.canvas.height - num;
        moneta.push(new component(70, 70, "img/c3.png", x, y, "image"));
        if(num2>5){
            moneta.push(new component(70, 70, "img/c3.png", x, y, "image"));
            moneta.push(new component(70, 70, "img/c3.png", x2, y, "image"));
            moneta.push(new component(70, 70, "img/c3.png", x3, y, "image"));
        }
        if(num2>8){
            moneta.push(new component(70, 70, "img/c3.png", x, y, "image"));
            moneta.push(new component(70, 70, "img/c3.png", x2, y, "image"));
            moneta.push(new component(70, 70, "img/c3.png", x3, y, "image"));
            moneta.push(new component(70, 70, "img/c3.png", x4, y, "image"));
            moneta.push(new component(70, 70, "img/c3.png", x5, y, "image"));
        }
    
    }

    if(myGameArea.frameNo>109999999){
    if (myGameArea.frameNo == 1 || everyinterval(1600)) {
        num=Math.floor(Math.random()*870)+10;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        fungo.push(new component(70, 70, "img/f1.png", x, y, "image"));
    }
    }

    if(myGameArea.frameNo>10099999990){
    if (myGameArea.frameNo == 1 || everyinterval(4000)) {
        num=Math.floor(Math.random()*870)+10;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        fungo2.push(new component(70, 70, "img/f2.png", x, y, "image"));
    }
    }

    if(myGameArea.frameNo>300999999990){
        if (myGameArea.frameNo == 1 || everyinterval(4600)) {
            num=Math.floor(Math.random()*870)+10;
            x = myGameArea.canvas.width ;
            y = myGameArea.canvas.height - num;
            fungo3.push(new component(70, 70, "img/f3.png", x, y, "image"));
        }
    }
    
 if(myGameArea.frameNo>900){
        if (myGameArea.frameNo == 1 || everyinterval(70)) {
            numd=Math.floor(Math.random()*18)+3;
            num=Math.floor(Math.random()*370)+10;
            x = myGameArea.canvas.width ;
            x2 = myGameArea.canvas.width+38 ;
            y = myGameArea.canvas.height - num;
            y2 = myGameArea.canvas.height - num-154;
            y3 = myGameArea.canvas.height - num-304;
            if(numd>12){
                nemici18.push(new component(120, 160, "img/ppp1.png", x, y2, "image"));
                nemici12.push(new component(50, 50, "img/fire.png", x2, y2, "image"));
                nemici122.push(new component(50, 50, "img/fire.png", x2, y2, "image"));
                nemici1222.push(new component(50, 50, "img/fire.png", x2, y2, "image"));
                tubo1.push(new component(130, 600, "img/tuborr1.png", x, y, "image"));
                suono13.play();
            }else if(numd>2){
                nemici32.push(new component(120, 160, "img/ppppp1.png", x, y2, "image"));
                nemici12i.push(new component(50, 50, "img/firei.png", x2, y2, "image"));
                tubo1.push(new component(130, 600, "img/tuboi1.png", x, y, "image"));
            }else if(numd>4){
                nemici32.push(new component(120, 160, "img/ppppp1.png", x, y2, "image"));
                nemici12i.push(new component(50, 50, "img/firei.png", x2, y2, "image"));
                tubo1.push(new component(130, 600, "img/tuboi1.png", x, y, "image"));
            }else if(numd>6){
                nemici27.push(new component(120, 160, "img/pppp1.png", x, y2, "image"));
                nemici12.push(new component(50, 50, "img/fire.png", x2, y2, "image"));
                nemici12.push(new component(50, 50, "img/fire.png", x2, y, "image"));
                nemici12.push(new component(50, 50, "img/fire.png", x2, y3, "image"));
                tubo1.push(new component(130, 600, "img/tubog1.png", x, y, "image"));
            }else{
                nemici32.push(new component(120, 160, "img/ppppp1.png", x, y2, "image"));
                nemici12i.push(new component(50, 50, "img/firei.png", x2, y2, "image"));
                tubo1.push(new component(130, 600, "img/tuboi1.png", x, y, "image"));
            }
        }
}

if(myGameArea.frameNo>900){
    if (myGameArea.frameNo == 1 || everyinterval(70)) {
        num=Math.floor(Math.random()*1000)+950;
        numd=Math.floor(Math.random()*13)+1;
        x = myGameArea.canvas.width ;
        x2 = myGameArea.canvas.width+38 ;
        y = myGameArea.canvas.height - num;
        y2 = myGameArea.canvas.height - num+588;
        y3 = myGameArea.canvas.height - num+680;
        y4 = myGameArea.canvas.height - num+770;
        if(numd>12){
            nemici19.push(new component(120, 160, "img/ppp4.png", x, y2, "image"));
            nemici13.push(new component(50, 50, "img/fire.png", x2, y2, "image"));
            nemici133.push(new component(50, 50, "img/fire.png", x2, y2, "image"));
            nemici1333.push(new component(50, 50, "img/fire.png", x2, y2, "image"));
            tubo2.push(new component(130, 600, "img/tuborr2.png", x, y, "image"));
            suono13.play();
        }else if(numd>9){
            nemici28.push(new component(120, 160, "img/p1.png", x, y2, "image"));
            nemici13.push(new component(50, 50, "img/fire.png", x2, y2, "image"));
            nemici13.push(new component(50, 50, "img/fire.png", x2, y3, "image"));
            nemici13.push(new component(50, 50, "img/fire.png", x2, y4, "image"));
            tubo1.push(new component(130, 600, "img/tubog2.png", x, y, "image")); 
        }else if(numd>4){
            nemici10.push(new component(120, 160, "img/pp1.png", x, y2, "image"));
            nemici13.push(new component(50, 50, "img/fire.png", x2, y2, "image"));
            tubo2.push(new component(130, 600, "img/tubor2.png", x, y, "image"));
        }else{    
            nemici8.push(new component(120, 160, "img/p1.png", x, y2, "image"));
            tubo2.push(new component(130, 600, "img/tubo2.png", x, y, "image"));
        }
    }
}

if(myGameArea.frameNo>10){
    if (myGameArea.frameNo == 1 || everyinterval(380)) {
        num=Math.floor(Math.random()*370)+100;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        suono12.play();
        cannoneb.push(new component(120, 600, "img/cbill.png", x, y, "image"));
        nemici9.push(new component(150, 100, "img/bill.png", x, y, "image"));
    }
}

if(myGameArea.frameNo>1){
    if (myGameArea.frameNo == 1 || everyinterval(280)) {
        num=Math.floor(Math.random()*1100)+1000;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        y2 = myGameArea.canvas.height - num + 500;
        suono12.play();
        cannoneb.push(new component(120, 600, "img/cbill2.png", x, y, "image"));
        nemici9.push(new component(150, 100, "img/bill.png", x, y2, "image"));
    }
}

if(myGameArea.frameNo>9){
    if (myGameArea.frameNo == 1 || everyinterval(300)) {
        num=Math.floor(Math.random()*370)+100;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        suono12.play();
        cannoneb.push(new component(120, 600, "img/cbillr.png", x, y, "image"));
        nemici20.push(new component(150, 100, "img/billr.png", x, y, "image"));
    }
}

if(myGameArea.frameNo>9){
    if (myGameArea.frameNo == 1 || everyinterval(300)) {
        num=Math.floor(Math.random()*1100)+1000;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        y2 = myGameArea.canvas.height - num + 500;
        suono12.play();
        cannoneb.push(new component(120, 600, "img/cbillr2.png", x, y, "image"));
        nemici20.push(new component(150, 100, "img/billr.png", x, y2, "image"));
    }
   }


   if(myGameArea.frameNo>0){
    if (myGameArea.frameNo == 1 || everyinterval(606)) {
        num=Math.floor(Math.random()*470)+100;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        y2 = myGameArea.canvas.height - num+100;
        y3 = myGameArea.canvas.height - num+200;
        suono12.play();
        cannoneb.push(new component(170, 700, "img/cbillt.png", x, y, "image"));
        nemici9.push(new component(150, 100, "img/bill.png", x, y, "image"));
        nemici9.push(new component(150, 100, "img/bill.png", x, y2, "image"));
        nemici9.push(new component(150, 100, "img/bill.png", x, y3, "image"));
    }
   }

   if(myGameArea.frameNo>40){
    if (myGameArea.frameNo == 1 || everyinterval(780)) {
        num=Math.floor(Math.random()*470)+100;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        y2 = myGameArea.canvas.height - num+100;
        y3 = myGameArea.canvas.height - num+200;
        suono12.play();
        cannoneb.push(new component(170, 700, "img/cbillrt.png", x, y, "image"));
        nemici20.push(new component(150, 100, "img/billr.png", x, y, "image"));
        nemici20.push(new component(150, 100, "img/billr.png", x, y2, "image"));
        nemici20.push(new component(150, 100, "img/billr.png", x, y3, "image"));
    }
   }

   if(myGameArea.frameNo>8009){
    if (myGameArea.frameNo == 1 || everyinterval(20)) {
        num=Math.floor(Math.random()*1000)+100;
        x = myGameArea.canvas.width;
        y = myGameArea.canvas.height - num;
        suono12.play();
        nemici9.push(new component(150, 100, "img/bill.png", x, y, "image"));
        nemici20.push(new component(150, 100, "img/billr.png", x, y, "image"));
    }
   }


   if(myGameArea.frameNo>799){
    if (myGameArea.frameNo == 1 || everyinterval(506)) {
        num=Math.floor(Math.random()*1000)+100;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        suono12.play();
        nemici16.push(new component(600, 500, "img/billb.gif", x, y, "image"));
    }
   }

   if(myGameArea.frameNo>999000){
    if (myGameArea.frameNo == 1 || everyinterval(300)) {
        num=Math.floor(Math.random()*2370)+10;
        x = myGameArea.canvas.width -num;
        y = myGameArea.canvas.height - 1500;
        nemici7.push(new component(400, 480, "img/t2.png", x, y, "image"));
        suono11.play();
    }
}

if(myGameArea.frameNo>5009){
    if (myGameArea.frameNo == 1 || everyinterval(200)) {
        num=Math.floor(Math.random()*1999)+10;
        x = myGameArea.canvas.width - num;
        y = myGameArea.canvas.height;
        nemici14.push(new component(150, 160, "img/kh1.png", x, y, "image"));
        nemici15.push(new component(50, 50, "img/h1.png", x, y, "image"));
    }
}

if(myGameArea.frameNo<0){
if (myGameArea.frameNo == 1 || everyinterval(80)) {
    num=Math.floor(Math.random()*970)+10;
    x = myGameArea.canvas.width -2200;
    y = myGameArea.canvas.height - num;
    nemici17.push(new component(120, 160, "img/kr11.png", x, y, "image"));
}
}


if(myGameArea.frameNo>500){
    if (myGameArea.frameNo == 1 || everyinterval(400)) {
        n=Math.floor(Math.random()*5)+1;
        num=Math.floor(Math.random()*970)+10;
        x = myGameArea.canvas.width -1;
        x2 = myGameArea.canvas.width -121;
        x3 = myGameArea.canvas.width -241;
        y = myGameArea.canvas.height - num;
        nemici22.push(new component(60, 86, "img/s1.png", x, y, "image"));
        if(n>3){
            nemici22.push(new component(60, 86, "img/s1.png", x, y, "image"));
            nemici22.push(new component(60, 86, "img/s1.png", x2, y, "image"));
            nemici22.push(new component(60, 86, "img/s1.png", x3, y, "image"));
        }
    }
}

if(myGameArea.frameNo>3){
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        num=Math.floor(Math.random()*970)+10;
        x = myGameArea.canvas.width -2222;
        y = myGameArea.canvas.height - num;
        nemici23.push(new component(120, 130, "img/kp1.png", x, y, "image"));
    }
}


if(myGameArea.frameNo>0){
    if (myGameArea.frameNo == 1 || everyinterval(170)) {
        num=Math.floor(Math.random()*970)+10;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        nemici21.push(new component(120, 130, "img/kp1.png", x, y, "image"));
    }
}

if(myGameArea.frameNo>4000){
    if (myGameArea.frameNo == 1 || everyinterval(100)) {
        num=Math.floor(Math.random()*970)+10;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        y2 = myGameArea.canvas.height - num +50;
        nemici24.push(new component(150, 160, "img/kh1r.png", x, y, "image"));
        nemicibb.push(new component(50, 50, "img/fire2.png", x, y2, "image"));
    }
}

if(myGameArea.frameNo<300){
    if (myGameArea.frameNo == 1 || everyinterval(19920)) {
        num=Math.floor(Math.random()*970)+10;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        nemici25.push(new component(120, 160, "img/kg1.png", x, y, "image"));
    }
}

if(myGameArea.frameNo>300){
    if (myGameArea.frameNo == 1 || everyinterval(9970)) {
        num=Math.floor(Math.random()*970)+10;
        x = myGameArea.canvas.width -2222;
        y = myGameArea.canvas.height - num;
        nemici26.push(new component(120, 160, "img/kg11.png", x, y, "image"));
    }
}

if(myGameArea.frameNo>0){
    if (myGameArea.frameNo == 1 || everyinterval(9990)) {
        num=Math.floor(Math.random()*970)+10;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        nemici30.push(new component(120, 130, "img/kpv1.png", x, y, "image"));
    }
}

if(myGameArea.frameNo>0){
    if (myGameArea.frameNo == 1 || everyinterval(90)) {
        num=Math.floor(Math.random()*970)+10;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        nemici31.push(new component(120, 160, "img/kb1.png", x, y, "image"));
    }
}

//movikentyi ball
if (myGameArea.keys && myGameArea.keys[88]) {
    ballmario.newPos();
    ballmario.update();
    ballmario.speedX = 26;
    ballmario.width +=3;
    ballmario.height +=3;
    suono15.play();

    if(ballmario.x>2000){
        this.ballmario.width =50;
        this.ballmario.height =50;
        ballmario.x=myGamePiece.x;
        ballmario.y=myGamePiece.y;
    }
}
//clonazione nemici
for (i = 0; i < nemici1.length; i += 1) {
       nemici1[i].x += -3;
       nemici1[i].update();
        let n = Math.floor(Math.random() * 2) + 1;
        if (n == 1) {
            nemici1[i].image.src = "img/g1.png";
        } 
        if (n == 2) {
            nemici1[i].image.src = "img/g2.png";
        } 
        if (myGamePiece.crashWith(nemici1[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {
            myGameArea.punti +=100;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici1[i].x -= 8888;
            }else{
                let n2 = Math.floor(Math.random() * 2) + 1;
                myGameArea.vitaMario -= 1;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }
        
        if (ballmario.crashWith(nemici1[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici1[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }

        if(nemici1[i].x<1){
            nemici1.splice(i, 1);
            i--; 
        }

}

for (i = 0; i < nemici2.length; i += 1) {
        nemici2[i].x += 3;
        nemici2[i].update();
        let n = Math.floor(Math.random() * 2) + 1;
        if (n == 1) {
            nemici2[i].image.src = "img/g3.png";
        } 
        if (n == 2) {
            nemici2[i].image.src = "img/g4.png";
        } 

        if (myGamePiece.crashWith(nemici2[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {
            myGameArea.punti +=100;
            nemici2[i].x += 8888;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            suono2.play();
            }else{
                myGameArea.vitaMario -= 1;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }
        if (ballmario.crashWith(nemici2[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici2[i].x += 8888;
            myGameArea.vitaMario += 1;
        }
        if(nemici2[i].x>2100){
            nemici2.splice(i, 1);
            i--; 
        }
}

for (let i = 0; i < nemici3.length; i += 1) {
        nemici3[i].x += -3;
        nemici3[i].update();
        let n = Math.floor(Math.random() * 2) + 1;
        if(nemici3[i].x<1700){
            nemici3[i].width=80;
            nemici3[i].height=80;
            nemici3[i].x += -22;
            if (n == 1) {
                nemici3[i].image.src = "img/k3.png";
            } else if (n == 2) {
                nemici3[i].image.src = "img/k4.png";
            }
        }else{
            if (n == 1) {
                nemici3[i].image.src = "img/k1.png";
            } else if (n == 2) {
                nemici3[i].image.src = "img/k2.png";
            }
        }
     
        if (myGamePiece.crashWith(nemici3[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {
            myGameArea.punti +=100;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
                nemici3[i].x -= 8888;
            }else{
                myGameArea.vitaMario -= 1;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
            if(nemici3[i].x<1700){
                myGameArea.vitaMario -= 10;
            }
        }
        if (ballmario.crashWith(nemici3[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici3[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }
        if(nemici3[i].x<1){
            nemici3.splice(i, 1);
            i--; 
        }
}


for (i = 0; i < nemici4.length; i += 1) {
        nemici4[i].x +=- 4;
        nemici4[i].update();
        suono10.play();
        let n = Math.floor(Math.random() * 2) + 1;
        if (n == 1) {
            nemici4[i].image.src = "img/p1.png";
        } 
        if (n == 2) {
            nemici4[i].image.src = "img/p2.png";
        } 
        if (n == 2) {
            nemici4[i].image.src = "img/p3.png";
        } 
        if (myGamePiece.crashWith(nemici4[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {  
            nemici4[i].x -= 8888;
            myGameArea.punti +=100;
            myGameArea.vitaMario -= 2;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
                }else{       
                myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }
        if (ballmario.crashWith(nemici4[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici4[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }
        if(nemici4[i].x<1){
            nemici4.splice(i, 1);
            i--; 
        }
}

for (let i = 0; i < nemici5.length; i += 1) {
        nemici5[i].x += 3;
        nemici5[i].update();
        let n = Math.floor(Math.random() * 2) + 1;
        if(nemici5[i].x>400){
            nemici5[i].width=80;
            nemici5[i].height=80;
            nemici5[i].x += 21;
            if (n == 1) {
                nemici5[i].image.src = "img/k3.png";
            } else if (n == 2) {
                nemici5[i].image.src = "img/k4.png";
            }
        }else{
            if (n == 1) {
                nemici5[i].image.src = "img/k11.png";
            } else if (n == 2) {
                nemici5[i].image.src = "img/k22.png";
            }
        }
        if (myGamePiece.crashWith(nemici5[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {
            myGameArea.punti +=100;
            nemici5[i].x += 8888;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
            }else{   
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
                myGameArea.vitaMario -= 1;
                if(nemici5[i].x>400){
                    myGameArea.vitaMario -= 10;
                }
            }
        }
        if (ballmario.crashWith(nemici5[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici5[i].x += 8888;
            myGameArea.vitaMario += 1;
        }
        if(nemici5[i].x>2300){
            nemici5.splice(i, 1);
            i--; 
        }
}
    
for (let i = 0; i < nemici6.length; i += 1) {
        var deltaX = myGamePiece.x - nemici6[i].x;
        var deltaY = myGamePiece.y - nemici6[i].y;
        var angle = Math.atan2(deltaY, deltaX);
        var speed = 5;
        nemici6[i].x += speed * Math.cos(angle);
        nemici6[i].y += speed * Math.sin(angle);
        nemici6[i].update();
        let n = Math.floor(Math.random() * 2) + 1;
        if(nemici6[i].x<1300){
            nemici6[i].width=80;
            nemici6[i].height=80;
            nemici6[i].x -= 31;
            if (n == 1) {
                nemici6[i].image.src = "img/kr3.png";
            } else if (n == 2) {
                nemici6[i].image.src = "img/kr4.png";
            }
        }else{
            if (n == 1) {
                nemici6[i].image.src = "img/kr2.png";
            } else if (n == 2) {
                nemici6[i].image.src = "img/kr1.png";
            }
        }

        if (myGamePiece.crashWith(nemici6[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {
            myGameArea.punti +=100;
            nemici6[i].x -= 8888;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
              
            }else{   
                myGameArea.vitaMario -= 1;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
            if(nemici6[i].x>1700){
                myGameArea.vitaMario -= 10;
            }
        }
        if (ballmario.crashWith(nemici6[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici6[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }
        if(nemici6[i].x<1){
            nemici6.splice(i, 1);
            i--; 
        }
}

for (i = 0; i < nemici7.length; i += 1) {
        if (myGamePiece.crashWith(nemici7[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
                myGameArea.vitaMario -= 12;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
        }
        if (ballmario.crashWith(nemici7[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici7[i].y += 8888;
            myGameArea.vitaMario += 1;
        }
    
        nemici7[i].y += 15;
        nemici7[i].update();
        if(nemici7[i].y>2000){
            nemici7.splice(i, 1);
            i--; 
        }
}

for (i = 0; i < nemici8.length; i += 1) {
        nemici8[i].x +=- 4;
        nemici8[i].update();
        suono10.play();
        let n = Math.floor(Math.random() * 2) + 1;
        if (n == 1) {
            nemici8[i].image.src = "img/p4.png";
        } 
        if (n == 2) {
            nemici8[i].image.src = "img/p5.png";
        } 
        if (n == 2) {
            nemici8[i].image.src = "img/p6.png";
        } 
    

        if (myGamePiece.crashWith(nemici8[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {  
            nemici8[i].x -= 8888;
            myGameArea.punti +=100;
            myGameArea.vitaMario -= 2;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
                }else{       
                myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }

        if (ballmario.crashWith(nemici8[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici8[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }

        if(nemici8[i].x<1){
            nemici8.splice(i, 1);
            i--; 
        }
}

for (i = 0; i < nemici9.length; i += 1) {
        nemici9[i].x +=- 17;
        nemici9[i].update();
        if (myGamePiece.crashWith(nemici9[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {  
            nemici9[i].x -= 8888;
            myGameArea.punti +=100;
            myGameArea.vitaMario -= 2;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
                }else{       
                myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }

        if (ballmario.crashWith(nemici9[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici9[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }
        if(nemici9[i].x<1){
            nemici9.splice(i, 1);
            i--; 
        }
}

for (i = 0; i < nemici10.length; i += 1) {
        nemici10[i].x +=- 4;
        nemici10[i].update();
        suono10.play();
        let n = Math.floor(Math.random() * 2) + 1;
        if (n == 1) {
            nemici10[i].image.src = "img/pp4.png";
        } 
        if (n == 2) {
            nemici10[i].image.src = "img/pp5.png";
        } 
        if (n == 2) {
            nemici10[i].image.src = "img/pp6.png";
        } 
    

        if (myGamePiece.crashWith(nemici10[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {  
            nemici10[i].x -= 8888;
            myGameArea.punti +=100;
            myGameArea.vitaMario -= 2;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
                }else{       
                myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }

        
        if (ballmario.crashWith(nemici10[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici10[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }

        if(nemici10[i].x<1){
            nemici10.splice(i, 1);
            i--; 
        }
}

for (i = 0; i < nemici11.length; i += 1) {
        nemici11[i].x +=- 4;
        nemici11[i].update();
        suono10.play();
        let n = Math.floor(Math.random() * 2) + 1;
        if (n == 1) {
            nemici11[i].image.src = "img/pp1.png";
        } 
        if (n == 2) {
            nemici11[i].image.src = "img/pp2.png";
        } 
        if (n == 2) {
            nemici11[i].image.src = "img/pp3.png";
        } 
        if (myGamePiece.crashWith(nemici11[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {  
            nemici11[i].x -= 8888;
            myGameArea.punti +=100;
            myGameArea.vitaMario -= 2;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
                }else{       
                myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }

        if (ballmario.crashWith(nemici11[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici11[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }

        if(nemici11[i].x<1){
            nemici11.splice(i, 1);
            i--; 
        }
  
}

for (i = 0; i < nemici12.length; i += 1) {
        nemici12[i].y +=- 3;
        nemici12[i].x +=- 4;
        nemici12[i].update();
        let n = Math.floor(Math.random() * 2) + 1;
        if (n == 1) {
            nemici12[i].image.src = "img/fire.png";
        } 
        if (n == 2) {
            nemici12[i].image.src = "img/fire2.png";
        } 
        if (n == 2) {
            nemici12[i].image.src = "img/fire3.png";
        } 
        if (myGamePiece.crashWith(nemici12[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {    
                myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }

        if (ballmario.crashWith(nemici12[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici12[i].x += 8888;
            myGameArea.vitaMario += 1;
        }

        if(nemici12[i].x<1){
            nemici12.splice(i, 1);
            i--; 
        }
}

for (i = 0; i < nemici13.length; i += 1) {
        nemici13[i].y += 3;
        nemici13[i].x +=- 4;
        nemici13[i].update();
        let n = Math.floor(Math.random() * 5) + 1;
        if (n == 1) {
            nemici13[i].image.src = "img/fire.png";
        } 
        if (n == 2) {
            nemici13[i].image.src = "img/fire2.png";
        } 
        if (n == 3) {
            nemici13[i].image.src = "img/fire3.png";
        } 
        if (n == 4) {
            nemici13[i].image.src = "img/fire4.png";
        } 
        if (myGamePiece.crashWith(nemici13[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
           myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
        }

        if (ballmario.crashWith(nemici13[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici13[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }


        if(nemici13[i].x<1){
            nemici13.splice(i, 1);
            i--; 
        }
}

for (i = 0; i < nemici133.length; i += 1) {
        nemici133[i].y += 3;
        nemici133[i].x +=- 6;
        nemici133[i].update();
        let n = Math.floor(Math.random() * 5) + 1;
        if (n == 1) {
            nemici133[i].image.src = "img/fire.png";
        } 
        if (n == 2) {
            nemici133[i].image.src = "img/fire2.png";
        } 
        if (n == 3) {
            nemici133[i].image.src = "img/fire3.png";
        } 
        if (n == 4) {
            nemici133[i].image.src = "img/fire4.png";
        } 
        if (myGamePiece.crashWith(nemici133[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
           myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
        }

        if (ballmario.crashWith(nemici133[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici133[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }

        if(nemici133[i].x<1){
            nemici133.splice(i, 1);
            i--; 
        }
}

for (i = 0; i < nemici1333.length; i += 1) {
        nemici1333[i].y += 3;
        nemici1333[i].x -= 2;
        nemici1333[i].update();
        let n = Math.floor(Math.random() * 5) + 1;
        if (n == 1) {
            nemici1333[i].image.src = "img/fire.png";
        } 
        if (n == 2) {
            nemici1333[i].image.src = "img/fire2.png";
        } 
        if (n == 3) {
            nemici1333[i].image.src = "img/fire3.png";
        } 
        if (n == 4) {
            nemici1333[i].image.src = "img/fire4.png";
        } 
        if (myGamePiece.crashWith(nemici1333[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
           myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
        }

        if(nemici1333[i].x<1){
            nemici1333.splice(i, 1);
            i--; 
        }

        if (ballmario.crashWith(nemici1333[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici1333[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }

}

for (i = 0; i < moneta.length; i += 1) {
        let n = Math.floor(Math.random() * 7) + 1;
        moneta[i].x += -4;
        moneta[i].update();
        if (n == 1) {
            moneta[i].image.src = "img/c1.png";
        } 
        if (n == 2) {
            moneta[i].image.src = "img/c2.png";
        } 
        if (n == 3) {
            moneta[i].image.src = "img/c3.png";
        } 
        if (n == 4) {
            moneta[i].image.src = "img/c4.png";
        } 
        if (n == 5) {
            moneta[i].image.src = "img/c5.png";
        } 
        if (myGamePiece.crashWith(moneta[i])) {
         myGameArea.monetar+=10;
         myGameArea.vitaMario += 1;
         suono1.play();
         moneta[i].x+=-555555;
        }
        if(moneta[i].x<1){
            moneta.splice(i, 1);
            i--; 
        }
    
}

for (let i = 0; i < nemici14.length; i += 1) {
        nemici14[i].y +=- 5;
        nemici14[i].update();
        let n = Math.floor(Math.random() * 4) + 1;

            if (n == 1) {
                nemici14[i].image.src = "img/kh1.png";
            }
            if(n == 2) {
                nemici14[i].image.src = "img/kh2.png";
            }
            if(n == 3) {
                nemici14[i].image.src = "img/kh3.png";
            }
            if(n == 4) {
                nemici14[i].image.src = "img/kh4.png";
            }
        
        if (myGamePiece.crashWith(nemici14[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {
            myGameArea.punti +=100;
            nemici14[i].x += 8888;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
            }else{   
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
                myGameArea.vitaMario -= 3;
            }
        }
        if (ballmario.crashWith(nemici14[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici14[i].x += 8888;
            myGameArea.vitaMario += 1;
        }

        if(nemici14[i].y>1000){
            nemici14.splice(i, 1);
            i--; 
        }
  
}

for (i = 0; i < nemici15.length; i += 1) {
        nemici15[i].y +=- 5;
        nemici15[i].x +=- 5;
        nemici15[i].update();
        let n = Math.floor(Math.random() * 5) + 1;
        if (n == 1) {
            nemici15[i].image.src = "img/h1.png";
        } 
        if (n == 2) {
            nemici15[i].image.src = "img/h2.png";
        } 
        if (n == 3) {
            nemici15[i].image.src = "img/h3.png";
        } 
        if (n == 4) {
            nemici15[i].image.src = "img/h4.png";
        } 
        if (myGamePiece.crashWith(nemici15[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
           myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
        }
        if (ballmario.crashWith(nemici15[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici15[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }
    }

for (i = 0; i < nemici16.length; i += 1) {
        nemici16[i].x +=- 17;
        nemici16[i].update();
        if (myGamePiece.crashWith(nemici16[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
                myGameArea.vitaMario -= 30;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
        }
        if (ballmario.crashWith(nemici16[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici16[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }
        if(nemici16[i].x<-500){
            nemici16.splice(i, 1);
            i--; 
        }
    }

for (let i = 0; i < nemici17.length; i += 1) {
        var deltaX = myGamePiece.x - nemici17[i].x;
        var deltaY = myGamePiece.y - nemici17[i].y;
        var angle = Math.atan2(deltaY, deltaX);
        var speed = 5;
        nemici17[i].x += speed * Math.cos(angle);
        nemici17[i].y += speed * Math.sin(angle);
        nemici17[i].update();
        let n = Math.floor(Math.random() * 2) + 1;
        if(nemici17[i].x>400){
            nemici17[i].width=80;
            nemici17[i].height=80;
            nemici17[i].x += 21;
            if (n == 1) {
                nemici17[i].image.src = "img/kr3.png";
            } else if (n == 2) {
                nemici17[i].image.src = "img/kr4.png";
            }
        }else{
            if (n == 1) {
                nemici17[i].image.src = "img/kr11.png";
            } else if (n == 2) {
                nemici17[i].image.src = "img/kr22.png";
            }
        }
        if (myGamePiece.crashWith(nemici17[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {
            myGameArea.punti +=100;
            nemici17[i].x += 8888;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
            }else{   
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
                myGameArea.vitaMario -= 1;
            }
        }
        if (ballmario.crashWith(nemici17[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici17[i].x += 8888;
            myGameArea.vitaMario += 1;
        }
        if(nemici17[i].x>2300){
            nemici17.splice(i, 1);
            i--; 
        }
    }

for (i = 0; i < nemici18.length; i += 1) {
        nemici18[i].x +=- 4;
        nemici18[i].update();
        suono10.play();
        let n = Math.floor(Math.random() * 2) + 1;
        if (n == 1) {
            nemici18[i].image.src = "img/ppp1.png";
        } 
        if (n == 2) {
            nemici18[i].image.src = "img/ppp2.png";
        } 
        if (n == 2) {
            nemici18[i].image.src = "img/ppp3.png";
        } 
    

        if (myGamePiece.crashWith(nemici18[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {  
            nemici18[i].x -= 8888;
            myGameArea.punti +=100;
            myGameArea.vitaMario -= 2;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
                }else{       
                myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }

        if (ballmario.crashWith(nemici18[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici18[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }

        if(nemici18[i].x<1){
            nemici18.splice(i, 1);
            i--; 
        }
    }

for (i = 0; i < nemici122.length; i += 1) {
        nemici122[i].y +=- 3;
        nemici122[i].x +=- 6;
        nemici122[i].update();
        let n = Math.floor(Math.random() * 2) + 1;
        if (n == 1) {
            nemici122[i].image.src = "img/fire.png";
        } 
        if (n == 2) {
            nemici122[i].image.src = "img/fire2.png";
        } 
        if (n == 2) {
            nemici122[i].image.src = "img/fire3.png";
        } 
        if (myGamePiece.crashWith(nemici122[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {    
                myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }

        if (ballmario.crashWith(nemici122[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici122[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }
        if(nemici122[i].x<1){
            nemici122.splice(i, 1);
            i--; 
        }
    }

for (i = 0; i < nemici1222.length; i += 1) {
        nemici1222[i].y +=- 3;
        nemici1222[i].x +=- 2;
        nemici1222[i].update();
        let n = Math.floor(Math.random() * 2) + 1;
        if (n == 1) {
            nemici1222[i].image.src = "img/fire.png";
        } 
        if (n == 2) {
            nemici1222[i].image.src = "img/fire2.png";
        } 
        if (n == 2) {
            nemici1222[i].image.src = "img/fire3.png";
        } 
        if (myGamePiece.crashWith(nemici1222[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {    
                myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }
        if (ballmario.crashWith(nemici1222[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici1222[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }

        if(nemici1222[i].x<1){
            nemici1222.splice(i, 1);
            i--; 
        }
    }

for (i = 0; i < nemici19.length; i += 1) {
        nemici19[i].x +=- 4;
        nemici19[i].update();
        suono10.play();
        let n = Math.floor(Math.random() * 2) + 1;
        if (n == 1) {
            nemici19[i].image.src = "img/ppp4.png";
        } 
        if (n == 2) {
            nemici19[i].image.src = "img/ppp5.png";
        } 
        if (n == 2) {
            nemici19[i].image.src = "img/ppp6.png";
        } 
    

        if (myGamePiece.crashWith(nemici19[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {  
            nemici19[i].x -= 8888;
            myGameArea.punti +=100;
            myGameArea.vitaMario -= 2;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
                }else{       
                myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }

        if (ballmario.crashWith(nemici19[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici19[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }
        if(nemici19[i].x<1){
            nemici19.splice(i, 1);
            i--; 
        }
    }

for (i = 0; i < nemici20.length; i += 1) {
        var deltaX = myGamePiece.x - nemici20[i].x;
        var deltaY = myGamePiece.y - nemici20[i].y;
        var angle = Math.atan2(deltaY, deltaX);
        var speed = 17;
        nemici20[i].x += speed * Math.cos(angle);
        nemici20[i].y += speed * Math.sin(angle);
        nemici20[i].update();
        if (myGamePiece.crashWith(nemici20[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {  
                nemici20[i].x -= 8888;
            myGameArea.punti +=100;
            myGameArea.vitaMario -= 2;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
                }else{       
                myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }
        if (ballmario.crashWith(nemici20[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici20[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }
        if(nemici20[i].x<1){
            nemici20.splice(i, 1);
            i--; 
        }
}

for (let i = 0; i < nemici21.length; i += 1) {
        nemici21[i].x += -3;
        nemici21[i].update();
        let n = Math.floor(Math.random() * 2) + 1;
        if(nemici21[i].x<1700){
            nemici21[i].width=80;
            nemici21[i].height=80;
            nemici21[i].x += -22;
            if (n == 1) {
                nemici21[i].image.src = "img/kp3.png";
            } else if (n == 2) {
                nemici21[i].image.src = "img/kp4.png";
            }
        }else{
            if (n == 1) {
                nemici21[i].image.src = "img/kp1.png";
            } else if (n == 2) {
                nemici21[i].image.src = "img/kp2.png";
            }
        }
     
        if (myGamePiece.crashWith(nemici21[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
       
                myGameArea.vitaMario -= 4;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
         
            if (ballmario.crashWith(nemici21[i])) {
                myGameArea.punti +=100;
                let n2 = Math.floor(Math.random() * 2) + 1;
                if(n2==1){
                    suono6.play();
                    }
                    if(n2==2){
                    suono7.play();
                    }
                    if(n2==3){
                    suono8.play();
                    }
                nemici21[i].x -= 8888;
                myGameArea.vitaMario += 1;
            }
            if(nemici21[i].x<1){
                nemici21.splice(i, 1);
                i--; 
            }
}
    
for (i = 0; i < nemici22.length; i += 1) {
        nemici22[i].x += -3;
        nemici22[i].update();
        let n = Math.floor(Math.random() * 3) + 1;
        if (n == 1) {
            nemici22[i].image.src = "img/s1.png";
        } 
        if (n == 2) {
            nemici22[i].image.src = "img/s2.png";
        } 
        if (n == 3) {
            nemici22[i].image.src = "img/s3.png";
        } 
        if (myGamePiece.crashWith(nemici22[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {
            myGameArea.punti +=100;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici22[i].x -= 8888;
            }else{
                let n2 = Math.floor(Math.random() * 2) + 1;
                myGameArea.vitaMario -= 1;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }
        if (ballmario.crashWith(nemici22[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici22[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }
        if(nemici22[i].x<1){
            nemici22.splice(i, 1);
            i--; 
        }
}

for (let i = 0; i < nemici23.length; i += 1) {
        nemici23[i].x += 5;
        nemici23[i].update();
        let n = Math.floor(Math.random() * 2) + 1;
        if(nemici23[i].x>500){
            nemici23[i].width=80;
            nemici23[i].height=80;
            nemici23[i].x += +22;
            if (n == 1) {
                nemici23[i].image.src = "img/kp3.png";
            } else if (n == 2) {
                nemici23[i].image.src = "img/kp4.png";
            }
        }else{
            if (n == 1) {
                nemici23[i].image.src = "img/kp11.png";
            } else if (n == 2) {
                nemici23[i].image.src = "img/kp22.png";
            }
        }
     
        if (myGamePiece.crashWith(nemici23[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;

                myGameArea.vitaMario -= 4;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            
        }
        if (ballmario.crashWith(nemici23[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici23[i].x += 8888;
            myGameArea.vitaMario += 1;
        }
        if(nemici23[i].x>2221){
            nemici23.splice(i, 1);
            i--; 
        }
    }

    
for (let i = 0; i < nemici24.length; i += 1) {
        nemici24[i].x +=- 5;
        nemici24[i].update();
        let n = Math.floor(Math.random() * 4) + 1;

            if (n == 1) {
                nemici24[i].image.src = "img/kh1r.png";
            }
            if(n == 2) {
                nemici24[i].image.src = "img/kh2r.png";
            }
            if(n == 3) {
                nemici24[i].image.src = "img/kh3r.png";
            }
            if(n == 4) {
                nemici24[i].image.src = "img/kh4r.png";
            }
        
        if (myGamePiece.crashWith(nemici24[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {
            myGameArea.punti +=100;
            nemici24[i].x += 8888;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
            }else{   
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
                myGameArea.vitaMario -= 1;
            }
        }

        if (ballmario.crashWith(nemici24[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici24[i].x += 8888;
            myGameArea.vitaMario += 1;
        }

        if(nemici24[i].x<1){
            nemici24.splice(i, 1);
            i--; 
        }
  
    }

for (i = 0; i < nemicibb.length; i += 1) {
        nemicibb[i].x +=- 13;
        nemicibb[i].update();
        let n = Math.floor(Math.random() * 5) + 1;
        if (n == 1) {
            nemicibb[i].image.src = "img/fire.png";
        } 
        if (n == 2) {
            nemicibb[i].image.src = "img/fire2.png";
        } 
        if (n == 3) {
            nemicibb[i].image.src = "img/fire3.png";
        } 
        if (n == 4) {
            nemicibb[i].image.src = "img/fire4.png";
        } 
        if (myGamePiece.crashWith(nemicibb[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
           myGameArea.vitaMario -= 9;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
        }

        if(nemicibb[i].x<1){
            nemicibb.splice(i, 1);
            i--; 
        }
    }


for (let i = 0; i < nemici25.length; i += 1) {
        var deltaX = myGamePiece.x - nemici25[i].x;
        var deltaY = myGamePiece.y - nemici25[i].y;
        var angle = Math.atan2(deltaY, deltaX);
        var speed = 5;
        nemici25[i].x += speed * Math.cos(angle);
        nemici25[i].y += speed * Math.sin(angle);
        nemici25[i].update();
        let n = Math.floor(Math.random() * 2) + 1;
        if(nemici25[i].x<1300){
            nemici25[i].width=80;
            nemici25[i].height=80;
            speed = speed+15;
            nemici25[i].x += speed * Math.cos(angle);
            nemici25[i].y += speed * Math.sin(angle);
            if (n == 1) {
                nemici25[i].image.src = "img/kg3.png";
            } else if (n == 2) {
                nemici25[i].image.src = "img/kg4.png";
            }
        }else{
            if (n == 1) {
                nemici25[i].image.src = "img/kg2.png";
            } else if (n == 2) {
                nemici25[i].image.src = "img/kg1.png";
            }
        }

        if (myGamePiece.crashWith(nemici25[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {
            myGameArea.punti +=100;
            nemici25[i].x -= 998888;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
              
            }else{   
                myGameArea.vitaMario -= 1;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
                if(nemici25[i].x>1200){
                    myGameArea.vitaMario -= 10;
                }
            }
        }
            if (ballmario.crashWith(nemici25[i])) {
                myGameArea.punti +=100;
                let n2 = Math.floor(Math.random() * 2) + 1;
                if(n2==1){
                    suono6.play();
                    }
                    if(n2==2){
                    suono7.play();
                    }
                    if(n2==3){
                    suono8.play();
                    }
                nemici25[i].x -= 889988;
                myGameArea.vitaMario += 1;
            }
        

        if(nemici25[i].x<1){
            nemici25.splice(i, 1);
            i--; 
        }
}

for (let i = 0; i < nemici26.length; i += 1) {
    var deltaX = myGamePiece.x - nemici26[i].x;
    var deltaY = myGamePiece.y - nemici26[i].y;
    var angle = Math.atan2(deltaY, deltaX);
    var speed = 5;
    nemici26[i].x += speed * Math.cos(angle);
    nemici26[i].y += speed * Math.sin(angle);
    nemici26[i].update();
    let n = Math.floor(Math.random() * 2) + 1;
    if(nemici26[i].x>400){
        nemici26[i].width=80;
        nemici26[i].height=80;
        speed = speed+15;
        nemici26[i].x += speed * Math.cos(angle);
        nemici26[i].y += speed * Math.sin(angle);
        if (n == 1) {
            nemici26[i].image.src = "img/kg3.png";
        } else if (n == 2) {
            nemici26[i].image.src = "img/kg4.png";
        }
    }else{
        if (n == 1) {
            nemici26[i].image.src = "img/kg22.png";
        } else if (n == 2) {
            nemici26[i].image.src = "img/kg11.png";
        }
    }

    if (myGamePiece.crashWith(nemici26[i])) {
        let n2 = Math.floor(Math.random() * 2) + 1;
        if (myGameArea.keys && myGameArea.keys[32]) {
        myGameArea.punti +=100;
        nemici26[i].x += 998888;
            if(n2==1){
            suono6.play();
            }
            if(n2==2){
            suono7.play();
            }
            if(n2==3){
            suono8.play();
            }
            suono2.play();
          
        }else{   
            myGameArea.vitaMario -= 1;
            if(n2==1){
            suono3.play();
            }
            if(n2==2){
            suono4.play();
            }
            if(n2==3){
            suono5.play();
            }
            if(nemici26[i].x>400){
                myGameArea.vitaMario -= 10;
            }
        }
   
    }

    if (ballmario.crashWith(nemici26[i])) {
        myGameArea.punti +=100;
        let n2 = Math.floor(Math.random() * 2) + 1;
        if(n2==1){
            suono6.play();
            }
            if(n2==2){
            suono7.play();
            }
            if(n2==3){
            suono8.play();
            }
        nemici26[i].x -= 8888;
        myGameArea.vitaMario += 1;
    }
    if(nemici26[i].x>2221){
        nemici26.splice(i, 1);
        i--; 
    }
}


for (i = 0; i < nemici27.length; i += 1) {
    nemici27[i].x +=- 4;
    nemici27[i].update();
    suono10.play();
    let n = Math.floor(Math.random() * 2) + 1;
    if (n == 1) {
        nemici27[i].image.src = "img/pppp1.png";
    } 
    if (n == 2) {
        nemici27[i].image.src = "img/pppp2.png";
    } 
    if (n == 2) {
        nemici27[i].image.src = "img/pppp3.png";
    } 
    if (myGamePiece.crashWith(nemici27[i])) {
        let n2 = Math.floor(Math.random() * 2) + 1;
        if (myGameArea.keys && myGameArea.keys[32]) {  
        nemici27[i].x -= 8888;
        myGameArea.punti +=100;
        myGameArea.vitaMario -= 2;
            if(n2==1){
            suono6.play();
            }
            if(n2==2){
            suono7.play();
            }
            if(n2==3){
            suono8.play();
            }
            suono2.play();
            }else{       
            myGameArea.vitaMario -= 9;
            if(n2==1){
            suono3.play();
            }
            if(n2==2){
            suono4.play();
            }
            if(n2==3){
            suono5.play();
            }
        }
    }
    if (ballmario.crashWith(nemici27[i])) {
        myGameArea.punti +=100;
        let n2 = Math.floor(Math.random() * 2) + 1;
        if(n2==1){
            suono6.play();
            }
            if(n2==2){
            suono7.play();
            }
            if(n2==3){
            suono8.play();
            }
        nemici27[i].x -= 8888;
        myGameArea.vitaMario += 1;
    }
    if(nemici27[i].x<1){
        nemici27.splice(i, 1);
        i--; 
    }
}

for (i = 0; i < nemici28.length; i += 1) {
    nemici28[i].x +=- 4;
    nemici28[i].update();
    suono10.play();
    let n = Math.floor(Math.random() * 2) + 1;
    if (n == 1) {
        nemici28[i].image.src = "img/pppp4.png";
    } 
    if (n == 2) {
        nemici28[i].image.src = "img/pppp5.png";
    } 
    if (n == 2) {
        nemici28[i].image.src = "img/pppp6.png";
    } 
    if (myGamePiece.crashWith(nemici28[i])) {
        let n2 = Math.floor(Math.random() * 2) + 1;
        if (myGameArea.keys && myGameArea.keys[32]) {  
        nemici28[i].x -= 8888;
        myGameArea.punti +=100;
        myGameArea.vitaMario -= 2;
            if(n2==1){
            suono6.play();
            }
            if(n2==2){
            suono7.play();
            }
            if(n2==3){
            suono8.play();
            }
            suono2.play();
            }else{       
            myGameArea.vitaMario -= 9;
            if(n2==1){
            suono3.play();
            }
            if(n2==2){
            suono4.play();
            }
            if(n2==3){
            suono5.play();
            }
        }
    }
    if (ballmario.crashWith(nemici28[i])) {
        myGameArea.punti +=100;
        let n2 = Math.floor(Math.random() * 2) + 1;
        if(n2==1){
            suono6.play();
            }
            if(n2==2){
            suono7.play();
            }
            if(n2==3){
            suono8.play();
            }
        nemici28[i].x -= 8888;
        myGameArea.vitaMario += 1;
    }
    if(nemici28[i].x<1){
        nemici28.splice(i, 1);
        i--; 
    }
}


for (i = 0; i < nemici29.length; i += 1) {
    nemici29[i].x += -21; 
    nemici29[i].y += -9; 
    nemici29[i].update();
     if (myGamePiece.crashWith(nemici29[i])) {
         let n2 = Math.floor(Math.random() * 2) + 1;
         if (myGameArea.keys && myGameArea.keys[32]) {
         myGameArea.punti +=100;
         if(n2==1){
             suono6.play();
             }
             if(n2==2){
             suono7.play();
             }
             if(n2==3){
             suono8.play();
             }
         nemici29[i].x -= 8888;
         }else{
             let n2 = Math.floor(Math.random() * 2) + 1;
             myGameArea.vitaMario -= 1;
             if(n2==1){
             suono3.play();
             }
             if(n2==2){
             suono4.play();
             }
             if(n2==3){
             suono5.play();
             }
         }
     }
     if(nemici29[i].x<1){
         nemici29.splice(i, 1);
         i--; 
     }
}


for (let i = 0; i < nemici30.length; i += 1) {
    var deltaX = myGamePiece.x - nemici30[i].x;
    var deltaY = myGamePiece.y - nemici30[i].y;
    var angle = Math.atan2(deltaY, deltaX);
    var speed = 8;
    nemici30[i].x += speed * Math.cos(angle);
    nemici30[i].y += speed * Math.sin(angle);
    nemici30[i].update();
    let n = Math.floor(Math.random() * 2) + 1;
    if(nemici30[i].x<1700){
        nemici30[i].width=80;
        nemici30[i].height=80;
        nemici30[i].x += -22;
        if (n == 1) {
            nemici30[i].image.src = "img/kpv3.png";
        } else if (n == 2) {
            nemici30[i].image.src = "img/kpv4.png";
        }
    }else{
        if (n == 1) {
            nemici30[i].image.src = "img/kpv1.png";
        } else if (n == 2) {
            nemici30[i].image.src = "img/kpv2.png";
        }
    }
 
    if (myGamePiece.crashWith(nemici30[i])) {
        let n2 = Math.floor(Math.random() * 2) + 1;
            myGameArea.vitaMario -= 4;
            if(n2==1){
            suono3.play();
            }
            if(n2==2){
            suono4.play();
            }
            if(n2==3){
            suono5.play();
            }
        }
   
        if (ballmario.crashWith(nemici30[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici30[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }
        if(nemici30[i].x<1){
            nemici30.splice(i, 1);
            i--; 
        }
    }


    for (let i = 0; i < nemici31.length; i += 1) {
        var deltaX = myGamePiece.x - nemici31[i].x;
        var deltaY = myGamePiece.y - nemici31[i].y;
        var angle = Math.atan2(deltaY, deltaX);
        var speed = 8;
        nemici31[i].x += speed * Math.cos(angle);
        nemici31[i].y += speed * Math.sin(angle);
        nemici31[i].update();
        let n = Math.floor(Math.random() * 2) + 1;
        if(nemici31[i].x<1300){
            nemici31[i].width=80;
            nemici31[i].height=80;
            nemici31[i].x -= 21;
            if (n == 1) {
                nemici31[i].image.src = "img/kb3.png";
            } else if (n == 2) {
                nemici31[i].image.src = "img/kb4.png";
            }
        }else{
            if (n == 1) {
                nemici31[i].image.src = "img/kb2.png";
            } else if (n == 2) {
                nemici31[i].image.src = "img/kb1.png";
            }
        }

        if (myGamePiece.crashWith(nemici31[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {
            myGameArea.punti +=100;
            nemici31[i].x -= 8888;
            myGamePiece.speedX -=15;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
                suono2.play();
              
            }else{   
                myGameArea.vitaMario -= 1;
                myGamePiece.speedX -=15;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
            if(nemici31[i].x>1700){
                myGameArea.vitaMario -= 10;
            }
        }
        if (ballmario.crashWith(nemici31[i])) {
            myGameArea.punti +=100;
            let n2 = Math.floor(Math.random() * 2) + 1;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici31[i].x -= 8888;
            myGameArea.vitaMario += 1;
        }
        if(nemici31[i].x<1){
            nemici31.splice(i, 1);
            i--; 
        }
}


for (i = 0; i < nemici32.length; i += 1) {
    nemici32[i].x +=- 4;
    nemici32[i].update();
    suono10.play();
    let n = Math.floor(Math.random() * 2) + 1;
    if (n == 1) {
        nemici32[i].image.src = "img/ppppp1.png";
    } 
    if (n == 2) {
        nemici32[i].image.src = "img/ppppp2.png";
    } 
    if (n == 2) {
        nemici32[i].image.src = "img/ppppp3.png";
    } 
    if (myGamePiece.crashWith(nemici32[i])) {
        let n2 = Math.floor(Math.random() * 2) + 1;
        if (myGameArea.keys && myGameArea.keys[32]) {  
        nemici32[i].x -= 8888;
        myGameArea.punti +=100;
        myGameArea.vitaMario -= 2;
            if(n2==1){
            suono6.play();
            }
            if(n2==2){
            suono7.play();
            }
            if(n2==3){
            suono8.play();
            }
            suono2.play();
            }else{       
            myGameArea.vitaMario -= 9;
            if(n2==1){
            suono3.play();
            }
            if(n2==2){
            suono4.play();
            }
            if(n2==3){
            suono5.play();
            }
        }
    }
    if (ballmario.crashWith(nemici32[i])) {
        myGameArea.punti +=100;
        let n2 = Math.floor(Math.random() * 2) + 1;
        if(n2==1){
            suono6.play();
            }
            if(n2==2){
            suono7.play();
            }
            if(n2==3){
            suono8.play();
            }
        nemici32[i].x -= 8888;
        myGameArea.vitaMario += 1;
    }
    if(nemici32[i].x<1){
        nemici32.splice(i, 1);
        i--; 
    }
}

for (i = 0; i < nemici12i.length; i += 1) {
    nemici12i[i].y +=- 3;
    nemici12i[i].x +=- 4;
    nemici12i[i].update();
    let n = Math.floor(Math.random() * 2) + 1;
    if (n == 1) {
        nemici12i[i].image.src = "img/firei.png";
    } 
    if (n == 2) {
        nemici12i[i].image.src = "img/firei2.png";
    } 
    if (n == 3) {
        nemici12i[i].image.src = "img/firei3.png";
    } 
    if (myGamePiece.crashWith(nemici12i[i])) {
        let n2 = Math.floor(Math.random() * 2) + 1;
        myGamePiece.speedX -=50;
        if (myGameArea.keys && myGameArea.keys[32]) {    
            myGameArea.vitaMario -= 12;
            
            if(n2==1){
            suono3.play();
            }
            if(n2==2){
            suono4.play();
            }
            if(n2==3){
            suono5.play();
            }
        }
    }

    if (ballmario.crashWith(nemici12i[i])) {
        myGameArea.punti +=100;
        let n2 = Math.floor(Math.random() * 2) + 1;
        if(n2==1){
            suono6.play();
            }
            if(n2==2){
            suono7.play();
            }
            if(n2==3){
            suono8.play();
            }
        nemici12i[i].x += 8888;
        myGameArea.vitaMario += 1;
    }

    if(nemici12i[i].x<1){
        nemici12i.splice(i, 1);
        i--; 
    }
}

    for (i = 0; i < fungo.length; i += 1) {
        fungo[i].x += -4;
        fungo[i].update();
        if (myGamePiece.crashWith(fungo[i])) {
         myGameArea.vitaMario += 100;
         suono9.play();
         fungo[i].x += -444443;
        }    
        if(fungo[i].x<1){
            fungo.splice(i, 1);
            i--; 
        }
    }

    for (i = 0; i < fungo2.length; i += 1) {
        fungo2[i].x += -4;
        fungo2[i].update();
        if (myGamePiece.crashWith(fungo2[i])) {
         myGameArea.vitaMario += 500;
         suono14.play();
         fungo2[i].x += -444443;
        }    
        if(fungo2[i].x<1){
            fungo2.splice(i, 1);
            i--; 
        }
    }

for (i = 0; i < fungo3.length; i += 1) {
        fungo3[i].x += -4;
        fungo3[i].update();
        if (myGamePiece.crashWith(fungo3[i])){
         myGameArea.vitaMario += 1000;
         suono14.play();
         fungo3[i].x += -444443;
        }    
        if(fungo3[i].x<1){
            fungo3.splice(i, 1);
            i--; 
        }
    }

for (i = 0; i < tubo1.length; i += 1) {
    tubo1[i].x += -4;
    tubo1[i].update();
    if (myGamePiece.crashWith(tubo1[i])) {
           myGamePiece.speedX=-99;
    }
    if(tubo1[i].x<1){
            tubo1.splice(i, 1);
            i--;     
    }
}

for (i = 0; i < tubo2.length; i += 1) {
    tubo2[i].x += -4;
    tubo2[i].update();
    if (myGamePiece.crashWith(tubo2[i])) {
           myGamePiece.speedX=-99;
    }
    if(tubo2[i].x<1){
            tubo2.splice(i, 1);
            i--;     
    }
}

for (i = 0; i < cannoneb.length; i += 1) {
    cannoneb[i].x += -4;
    cannoneb[i].update();
    if (myGamePiece.crashWith(cannoneb[i])) {
           myGamePiece.speedX=-99;
    }
    if(cannoneb[i].x<1){
        cannoneb.splice(i, 1);
            i--;     
    }
}

if(myGameArea.frameNo>9000){
    window.location.assign("win.html");
}

    if(myGameArea.vitaMario<0){
        window.location.assign("lose.html");
    }

    testovita.text="MARIO:"+myGameArea.vitaMario;
    testovita.update();
    testopunti.text="PUNTEGGIO:"+myGameArea.punti;
    testopunti.update();
    testopunti2.text="X:"+myGameArea.monetar;
    testopunti2.update();
    testopunti3.text="KM fino 9000:"+myGameArea.frameNo;
    testopunti3.update();
    monetap.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
 
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}