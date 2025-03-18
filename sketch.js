let dY = 3 
let x = 0
let posY = 100
let imagenFondo
let sonidoFondo

function setup() {
 createCanvas(3000, 1100);
}

function preload()
{
  imagenFondo = loadImage('./images/fondo.jpg')
}


function draw() {
  // put drawing code here
  background(255);
  image(imagenFondo,x,0);
  image(imagenFondo,x + imagenFondo.width, 0)
  x = x - 25
  dY = dY+2
  posY = posY + dY
  if(x <= 0 -imagenFondo.width){
    x=0;
  }
 
  strokeWeight(0)
  //1350
  fill(0)
  rect(850,100,125,25);   
  //parte de arriba       
  square(375,125,25);     
 rect(375,125,475,25);    
 fill(255,0,0);          
 rect(850,125,125,25);    
 fill(0);                 
 rect(975,125,50,25);     
 //Segunda capa 
 fill(255,0,0);          
 rect(425,150,600,25);   
 fill(0);                
 square(1025,150,25);     
 //3 capa
 fill(255,0,0);           
 rect(350,175,275,25);   
 fill(251,255,1);       
 rect(625,175,150,25);    
 fill(0);                
 square(775,175,25);      
 square(800,175,25);      
 fill(255,0,0);          
 fill(255,0,0);          
 rect(825,175,225,25);    
 fill(0);                
 square(1050,175,25);   
fill(251,255,1);         
 rect(450,200,100,25);   
 fill(0);               
 square(550,200,25);     
 square(575,200,25);    
 fill(251,255,1);        
 square(600,200,25);     
 square(625,200,25);     
 fill(0);                
 rect(650,200,100,25);   
 fill(251,255,1);        
 rect(750,200,75,25);    
 fill(0);                
 square(825,200,25);     
 fill(255,0,0);          
 rect(850,200,200,25);   
 fill(0);                
 square(1050,200,25);   
//5 capa                 
fill(251,255,1);       
rect(375,225,100,25); 
fill(255,0,0);        
rect(475,225,50,25);  
fill(251,255,1);    
rect(525,225,100,25);
fill(255,0,0);  
rect(625,225,125,25); 
fill(0);              
rect(750,225,50,25);  
fill(251,255,1);      
rect(800,225,50,25);  
fill(0);              
square(850,225,25);   
fill(255,0,0);        
rect(875,225,200,25); 
fill(0);              
square(1075,225,25);  
//6 Capa
square(1075,250,25)
fill(255,0,0)
rect(900,250,175,25)
fill(0)
square(875,250,25)
fill(251,255,1)
rect(825,250,50,25)
fill(0)
rect(325,250,500,25)
//Capa 7
fill(255,0,0)
rect(350,275,450,25)
fill(0)
square(800,275,25)
fill(251,255,1)
rect(825,275,50,25)
fill(0)
square(875,275,25)
fill(255,0,0)
rect(900,275,50,25)
fill(0)
rect(950,275,50,25)
fill(255,0,0)
rect(1000,275,75,25)
fill(0)
square(1075,275,25)
//capa 8
square(1050,300,25)
fill(255,0,0)
square(1025,300,25)
fill(0)
square(1000,300,25)
fill(0,188,212)
square(975,300,25)
fill(255)
square(950,300,25)
fill(255,0,0)
rect(900,300,50,25)
fill(0)
square(875,300,25)
fill(251,255,1)
square(850,300,25)
fill(0)
square(825,300,25)
fill(255,0,0)
square(800,300,25)
fill(0)
rect(400,300,400,25)
//Capa 9
fill(255,0,0)
rect (325,325,300,25)
fill(0)
rect(625,325,200,25)
fill(255,0,0)
square(825,325,25)
fill(0)
square(850,325,25)
fill(255,0,0)
rect (875,325,50,25)
fill(255,205,148)
rect(925,325,125,25)
fill(0)
square(1050,325,25)
//10 Cap
square(1075,350,25)
fill(255,205,148)
rect(925,350,150,25)
fill(255,0,0)
rect(850,350,75,25)
fill(0)
square(825,350,25)
fill(255,0,0)
rect(625,350,200,25)
fill(0)
rect(575,350,50,25)
fill(251,255,1)
rect(450,350,125,25)
fill(0)
rect(300,350,150,25)
fill(251,255,1)
rect(200,350,100,25)
//11 cap
rect(275,375,75,25)
fill(255,0,0)
rect(350,375,50,25)
fill(251,255,1)
rect(400,375,75,25)
fill(255,0,0)
rect(475,375,75,25)
fill(0)
square(550,375,25)
fill(251,255,1)
square(575,375,25)
fill(0)
square(600,375,25)
fill(255,0,0)
rect(625,375,225,25)
fill(0)
square(850,375,25)
fill(255,0,0)
rect(875,375,75,25)
fill(255,205,148)
square(950,375,25)
fill(0)
rect(975,375,50,25)
fill(255,205,148)
square(1025,375,25)
fill(0)
square(1050,375,25)
//capa 12

square(1025,400,25)
fill(255,0,0)
rect(925,400,100,25)
fill(0)
rect(875,400,50,25)
fill(255,0,0)
rect(650,400,225,25)
fill(0)
square(625,400,25)
fill(251,255,1)
square(600,400,25)
fill(0)
square(575,400,25)
fill(255,0,0)
square(550,400,25)
fill(0)
square(525,400,25)
fill(255,0,0)
rect(425,400,100,25)
fill(251,255,1)
rect(325,400,100,25)
// Capa 13
fill(0)
rect(275,425,250,25)
fill(255,0,0)
rect(525,425,50,25)
fill(0)
square(575,425,25)
fill(251,255,1)
square(600,425,25)
fill(0)
rect(625,425,100,25)
fill(255,0,0)
rect(725,425,200,25)
fill(0)
rect(925,425,100,25)
rect(1175,425,50,25)

//Capa 14
square(1150,450,25)
fill(255,0,0)
rect(1175,450,50,25)
fill(0)
rect(1225,450,50,25)
square(975,450,25)
fill(255,0,0)
rect(900,450,75,25)
fill(0)
rect(850,450,50,25)
fill(255,0,0)
rect(775,450,75,25)
fill(0)
rect(725,450,50,25)
fill(255,0,0)
rect(625,450,100,25)
fill(0)
square(600,450,25)
fill(255,0,0)
rect(475,450,125,25)
fill(0)
square(450,450,25)

//Capa 15
square(450,475,25)
fill(255,0,0)
rect(475,475,100,25)
fill(0)
square(575,475,25)
fill(255,0,0)
rect(600,475,225,25)
fill(0)
square(825,475,25)
fill(251,255,1)
square(850,475,25)
fill(255)
square(875,475,25)
fill(0)
square(900,475,25)
fill(255,0,0)
rect(925,475,75,25)
fill(0)
square(1000,475,25)

square(1150,475,25)
fill(255,0,0)
square(1175,475,25)
fill(0)
square(1200,475,25)
fill(255,0,0)
rect(1225,475,50,25)
fill(0)
square(1275,475,25)

//Capa 16
square(1150,500,25)
fill(255,0,0)
square(1175,500,25)
fill(0)
square(1200,500,25)
fill(255,0,0)
rect(1225,500,50,25)
fill(0)
square(1275,500,25)

square(1025,500,25) 
fill(255,0,0)
rect(950,500,75,25)
fill(0)
square(925,500,25)
fill(255)
square(900,500,25)
fill(251,255,1)
square(875,500,25)
fill(255)
rect(825,500,50,25)
fill(0)
square(800,500,25)
fill(255,0,0)
rect(750,500,50,25)
fill(0)
rect(575,500,175,25)
fill(255,0,0)
square(550,500,25)
fill(0)
square(525,500,25)
fill(255,0,0)
rect(475,500,50,25)
fill(0)
rect(325,500,150,25)

//Capa 17
square(450,525,25)
fill(255,0,0)
square(475,525,25)
fill(0)
square(500,525,25)
fill(255,0,0)
rect(525,525,50,25)
fill(0)
square(575,525,25)
fill(255,0,0)
rect(600,525,200,25)
fill(0)
square(800,525,25)
fill(255)
square(825,525,25)
fill(251,255,1)
square(850,525,25)
fill(255)
rect(875,525,50,25)
fill(0)
square(925,525,25)
fill(255,0,0)
square(950,525,25)
fill(0)
square(975,525,25)
fill(255,0,0)
rect(1000,525,50,25)
fill(0)
square(1050,525,25)
rect(1100,525,50,25)
fill(255,0,0)
rect(1150,525,75,25)
fill(0)
square(1225,525,25)
fill(255,0,0)
square(1250,525,25)
fill(0)
square(1275,525,25)
//Capa 18

square(1250,550,25)
fill(255,0,0)
rect(1150,550,100,25)
fill(0)
square(1125,550,25)
fill(251,255,1)
square(1100,550,25)
fill(0)
square(1075,550,25)
fill(255,0,0)
rect(975,550,100,25)
fill(0)
square(950,550,25)
fill(255,0,0)
square(925,550,25)
fill(0)
square(900,550,25)
fill(251,255,1)
square(875,550,25)
fill(255)
square(850,550,25)
fill(0)
square(825,550,25)
fill(255,0,0)
rect(750,550,75,25)
fill(0)
rect(275,550,475,25)

//capa 19
fill(255,0,0)
rect(425,575,75,25)
fill(251,255,1)
rect(500,575,100,25)
fill(255,0,0)
rect(600,575,250,25)
fill(0)
rect(850,575,50,25)
fill(255,0,0)
rect(900,575,50,25)
fill(0)
square(950,575,25)
fill(255,0,0)
rect(975,575,125,25)
fill(0)
square(1100,575,25)
fill(251,255,1)
square(1125,575,25)
fill(0)
square(1150,575,25)
fill(255,0,0)
square(1175,575,25)
fill(0)
rect(1200,575,50,25)

//Capa 20
rect(1150,600,50,25)
fill(251,255,1)
square(1125,600,25)
fill(0)
square(1100,600,25)
fill(255,0,0)
rect(1000,600,100,25)
fill(0)
square(975,600,25)
square(925,600,25)
fill(255,0,0)
rect(775,600,150,25)
fill(0)
rect(650,600,125,25)
fill(251,255,1)
rect(575,600,75,25)
fill(0)
rect(525,600,50,25)
fill(251,255,1)
rect(475,600,50,25)
fill(0)
rect(425,600,50,25)
fill(251,255,1)
rect(350,600,75,25)
// capa 21
fill(255,0,0)
square(375,625,25)
fill(251,255,1)
rect(400,625,100,25)
fill(255,0,0)
rect(500,625,125,25)
fill(251,255,1)
rect(625,625,75,25)
fill(255,0,0)
rect(700,625,50,25)
fill(251,255,1)
rect(750,625,50,25)
fill(0)
rect(800,625,50,25)
fill(255,0,0)
square(850,625,25)
fill(0)
rect(875,625,75,25)
square(1000,625,25)
fill(255,0,0)
rect(1025,625,75,25)
fill(0)
rect(1100,625,50,25)
//capa 22
rect(1025,650,75,25)
rect(925,650,50,25)
fill(251,255,1)
rect(875,650,50,25)
fill(0)
square(850,650,25)
fill(251,255,1)
rect(800,650,50,25)
fill(0)
square(775,650,25)
fill(251,255,1)
rect(675,650,100,25)
fill(0)
rect(400,650,275,25)
//capa 23
fill(255,0,0)
rect(325,675,475,25)
fill(0)
rect(800,675,50,25)
fill(251,255,1)
square(850,675,25)
fill(0)
rect(875,675,50,25)
fill(255,0,0)
rect(925,675,50,25)
fill(0)
rect(975,675,50,25)
//Capa 24
square(1025,700,25)
fill(255,0,0)
rect(875,700,150,25)
fill(0)
square(850,700,25)
fill(255,0,0)
rect(675,700,175,25)
fill(0)
rect(425,700,250,25)
//capa 25
fill(255,0,0)
rect(400,725,400,25)
fill(0)
square(800,725,25)
fill(255,0,0)
rect(825,725,75,25)
fill(0)
square(900,725,25)
fill(255,0,0)
rect(925,725,125,25)
fill(0)
square(1050,725,25)
//capa 26
square(1075,750,25)
fill(255,0,0)
rect(900,750,175,25)
fill(0)
square(875,750,25)
fill(255,0,0)
rect(825,750,50,25)
fill(0)
square(800,750,25)
fill(255,0,0)
rect(650,750,150,25)
fill(0)
rect(300,750,350,25)

//capa 27
fill(255,0,0)
rect(350,775,425,25)
fill(0)
rect(775,775,125,25)
fill(255,0,0)
rect(900,775,50,25)
fill(0)
square(950,775,25)
fill(255,0,0)
rect(975,775,100,25)
fill(0)
square(1075,775,25)

//capa 28
square(1075,800,25)
fill(255,0,0)
rect(950,800,125,25)
fill(0)
rect(875,800,75,25)
square(750,800,25)
fill(255,0,0)
rect(600,800,150,25)
fill(0)
rect(250,800,350,25)

//Capa 29
fill(255,0,0)
rect(300,825,425,25)
fill(0)
square(725,825,25)
rect(825,825,75,25)
fill(251,255,1)
rect(900,825,50,25)
fill(0)
square(950,825,25)
fill(255,0,0)
rect(975,825,100,25)
fill(0)
square(1075,825,25)
// Capa 30

square(1050,850,25)
fill(255,0,0)
rect(975,850,75,25)
fill(0)
square(950,850,25)
fill(251,255,1)
rect(825,850,125,25)
fill(0)
square(800,850,25)
square(700,850,25)
fill(255,0,0)
rect(650,850,50,25)
fill(0)
square(625,850,25)
fill(255,0,0)
rect(525,850,100,25)
fill(0)
rect(225,850,300,25)
//Capa 31
fill(255,89,0)
rect(200,875,250,25)
fill(251,255,1)
rect(450,875,75,25)
fill(0)
square(525,875,25)
fill(255,0,0)
rect(550,875,100,25)
fill(0)
rect(650,875,50,25)
square(800,875,25)
fill(251,255,1)
rect(825,875,150,25)
fill(0)
rect(975,875,75,25)

//Capa 32
rect(900,900,75,25)
fill(251,255,1)
rect(800,900,100,25)
fill(0)
square(775,900,25)
rect(600,900,50,25)
fill(255,0,0)
rect(550,900,50,25)
fill(0)
square(525,900,25)
fill(251,255,1)
rect(200,900,325,25)

//Capa 33
fill(255,89,0)
rect(225,925,200,25)
fill(251,255,1)
rect(425,925,125,25)
fill(0)
rect(550,925,50,25)
square(775,925,25)
fill(251,255,1)
rect(800,925,75,25)
fill(0)
square(875,925,25)

//Capa 34
square(850,950,25)
fill(251,255,1)
rect(800,950,50,25)
fill(0)
square(775,950,25)
rect(475,950,75,25)
fill(251,255,1)
rect(250,950,225,25)

//Capa 35
fill(255,89,0)
rect(200,975,150,25)
fill(251,255,1)
rect(350,975,75,25)
fill(0)
rect(425,975,50,25)
square(775,975,25)
fill(251,255,1)
square(800,975,25)
fill(0)
square(825,975,25)

//Capa 36
square(800,1000,25)
square(400,1000,25)
fill(251,255,1)
rect(225,1000,175,25)

//Capa 37
fill(255,89,0)
rect(250,1025,75,25)
fill(251,255,1)
rect(325,1025,50,25)
fill(0)
square(375,1025,25)
 
drawreverse()
}

function drawreverse ()
{
  fill(0)
  rect(2200,100,125,25)
//parte de arriba
square(1725,125,25);
rect(1725,125,475,25);
   fill(255,185,0);
rect(2200,125,125,25);
      fill(0);
rect(2325,125,50,25);

  fill(255,185,0);
rect(1775,150,600,25);
    fill(0);
square(2375,150,25);
//3 capa
    fill(255,185,0);
rect(1700,175,375,25);
  fill(255,0,0);
rect(1975,175,150,25);
         fill(0)
square(2125,175,25);
square(2150,175,25);
     fill(255,185,0);
rect(2175,175,225,25);
         fill(0);
square(2400,175,25);
//Cuarta capa
  fill(255,0,0);
rect(1800,200,100,25);
         fill(0);
square(1900,200,25);
square(1925,200,25);
fill(255,0,0);
square(1950,200,25);
square(1975,200,25);
       fill(0);
rect(2000,200,100,25);
 fill(255,0,0);
rect(2100,200,75,25);
        fill(0);
square(2175,200,25);
fill(255,185,0);
rect(2200,200,200,25);
fill(0);
square(2400,200,25);
          // 5 capa
fill(255,0,0);
rect(1725,225,100,25);
fill(255,185,0);
rect(1825,225,50,25);
fill(255,0,0);
rect(1875,225,100,25);
fill(255,185,0);
rect(1975,225,125,25);
   fill(0);
rect(2100,225,50,25);
fill(255,0,0);
rect(2150,225,50,25);
       fill(0);
square(2200,225,25);
fill(255,185,0);
rect(2225,225,200,25);
      fill(0);
square(2425,225,25);
//6 capa
square(2425,250,25);
fill(255,185,0);
rect(2250,250,175,25);
fill(0);
square(2225,250,25);
fill(255,0,0);
rect(2175,250,50,25);
fill(0);
rect(1675,250,500,25);
//7 capa
fill(255,185,0);
rect(1700,275,450,25);
fill(0);
square(2150,275,25);
fill(255,0,0);
rect(2175,275,50,25);
fill(0);
square(2225,275,25);
fill(255,185,0);
rect(2250,275,50,25);
fill(0);
rect(2300,275,50,25);
fill(255,185,0);
rect(2350,275,75,25);
fill(0);
square(2425,275,25);
//8 capa
square(2400,300,25);
fill(255,185,0);
square(2375,300,25);
fill(0);
square(2350,300,25);
fill(255,0,0);
square(2325,300,25);
fill(30, 30, 30);
square(2300,300,25);
fill(255,185,0);
rect(2250,300,50,25);
fill(0);
square(2225,300,25);
fill(255,0,0);
square(2200,300,25);
fill(0);
square(2175,300,25);
fill(255,185,0);
square(2150,300,25);
fill(0);
rect(1750,300,400,25)
//9 capa
fill(255,185,0);
rect(1675,325,300,25);
fill(0);
rect(1975,325,200,25);
fill(255,185,0);
square(2175,325,25);
fill(0);
square(2200,325,25);
fill(255,185,0);
rect(2225,325,50,25);
fill(255,205,148);
rect(2275,325,125,25);
fill(0);
square(2400,325,25);
//10 Cap //////////////////////////////////////
square(2425,350,25)
fill(255,205,148)
rect(2275,350,150,25)
fill(255,185,0)
rect(2200,350,75,25)
fill(0)
square(2175,350,25)
fill(255,185,0)
rect(1975,350,200,25)
fill(0)
rect(1925,350,50,25)
fill(255,0,0)
rect(1800,350,125,25)
fill(0)
rect(1650,350,150,25)
fill(255,0,0)
rect(1550,350,100,25)
//11 cap
rect(1625,375,75,25)
fill(255,185,0)
rect(1700,375,50,25)
fill(255,0,0)
rect(1750,375,75,25)
fill(255,185,0)
rect(1825,375,75,25)
fill(0)
square(1900,375,25)
fill(255,0,0)
square(1925,375,25)
fill(0)
square(1950,375,25)
fill(255,185,0)
rect(1975,375,225,25)
fill(0)
square(2200,375,25)
fill(255,185,0)
rect(2225,375,75,25)
fill(255,205,148)
square(2300,375,25)
fill(0)
rect(2325,375,50,25)
fill(255,205,148)
square(2375,375,25)
fill(0)
square(2400,375,25)
//capa 12

square(2375,400,25)
fill(255,185,0)
rect(2275,400,100,25)
fill(0)
rect(2225,400,50,25)
fill(255,185,0)
rect(2000,400,225,25)
fill(0)
square(1975,400,25)
fill(255,0,0)
square(1950,400,25)
fill(0)
square(1925,400,25)
fill(255,185,0)
square(1900,400,25)
fill(0)
square(1875,400,25)
fill(255,185,0)
rect(1775,400,100,25)
fill(255,0,0)
rect(1675,400,100,25)
// Capa 13
fill(0)
rect(1625,425,250,25)
fill(255,185,0)
rect(1875,425,50,25)
fill(0)
square(1925,425,25)
fill(255,0,0)
square(1950,425,25)
fill(0)
rect(1975,425,100,25)
fill(255,185,0)
rect(2075,425,200,25)
fill(0)
rect(2275,425,100,25)
rect(2525,425,50,25)

//Capa 14
square(2500,450,25)
fill(255,185,0)
rect(2525,450,50,25)
fill(0)
rect(2575,450,50,25)
square(2325,450,25)
fill(255,185,0)
rect(2250,450,75,25)
fill(0)
rect(2200,450,50,25)
fill(255,185,0)
rect(2125,450,75,25)
fill(0)
rect(2075,450,50,25)
fill(255,185,0)
rect(1975,450,100,25)
fill(0)
square(1950,450,25)
fill(255,185,0)
rect(1825,450,125,25)
fill(0)
square(1800,450,25)

//Capa 15
square(1800,475,25)
fill(255,185,0)
rect(1825,475,100,25)
fill(0)
square(1925,475,25)
fill(255,185,0)
rect(1950,475,225,25)
fill(0)
square(2175,475,25)
fill(30, 30, 30)
square(2200,475,25)
fill(255,0,0)
square(2225,475,25)
fill(0)
square(2250,475,25)
fill(255,185,0)
rect(2275,475,75,25)
fill(0)
square(2350,475,25)
square(2500,475,25)
fill(255,185,0)
square(2525,475,25)
fill(0)
square(2550,475,25)
fill(255,185,0)
rect(2575,475,50,25)
fill(0)
square(2625,475,25)

//Capa 16
square(2500,500,25)
fill(255,185,0)
square(2525,500,25)
fill(0)
square(2550,500,25)
fill(255,185,0)
rect(2575,500,50,25)
fill(0)
square(2625,500,25)

square(2375,500,25) 
fill(255,185,0)
rect(2300,500,75,25)
fill(0)
square(2275,500,25)
fill(255)
square(2250,500,25)
fill(30, 30, 30)
rect(2225,500,50,25)
fill(255,0,0)
square(2200,500,25)
fill(30,30,30)
square(2175,500,25)
fill(0)
square(2150,500,25)
fill(255,185,0)
rect(2100,500,50,25)
fill(0)
rect(1925,500,175,25)
fill(255,185,0)
square(1900,500,25)
fill(0)
square(1875,500,25)
fill(255,185,0)
rect(1825,500,50,25)
fill(0)
rect(1675,500,150,25)

//Capa 17
square(1800,525,25)
fill(255,185,0)
square(1825,525,25)
fill(0)
square(1850,525,25)
fill(255,185,0)
rect(1875,525,50,25)
fill(0)
square(1925,525,25)
fill(255,185,0)
rect(1950,525,200,25)
fill(0)
square(2150,525,25)
fill(30,30,30)
square(2250,525,25)
fill(255,0,0)
square(2225,525,25)
fill(30, 30, 30)
rect(2175,525,50,25)
fill(0)
square(2275,525,25)
fill(255,185,0)
square(2300,525,25)
fill(0)
square(2325,525,25)
fill(255,185,0)
rect(2350,525,50,25)
fill(0)
square(2400,525,25)
rect(2450,525,50,25)
fill(255,185,0)
rect(2500,525,75,25)
fill(0)
square(2575,525,25)
fill(255,185,0)
square(2600,525,25)
fill(0)
square(2625,525,25)
//Capa 18

square(2600,550,25)
fill(255,185,0)
rect(2500,550,100,25)
fill(0)
square(2475,550,25)
fill(255,0,0)
square(2450,550,25)
fill(0)
square(2425,550,25)
fill(255,185,0)
rect(2325,550,100,25)
fill(0)
square(2300,550,25)
fill(255,185,0)
square(2275,550,25)
fill(0)
square(2250,550,25)
fill(30,30,30)
square(2225,550,25)
fill(255,0,0)
square(2200,550,25)
fill(0)
square(2175,550,25)
fill(255,185,0)
rect(2100,550,75,25)
fill(0)
rect(1625,550,475,25)

//capa 19
fill(255,185,0)
rect(1775,575,75,25)
fill(255,0,0)
rect(1850,575,100,25)
fill(255,185,0)
rect(1950,575,250,25)
fill(0)
rect(2200,575,50,25)
fill(255,185,0)
rect(2250,575,50,25)
fill(0)
square(2300,575,25)
fill(255,185,0)
rect(2325,575,125,25)
fill(0)
square(2450,575,25)
fill(255,0,0)
square(2475,575,25)
fill(0)
square(2500,575,25)
fill(255,185,0)
square(2525,575,25)
fill(0)
rect(2550,575,50,25)

//Capa 20
rect(2500,600,50,25)
fill(255,0,0)
square(2475,600,25)
fill(0)
square(2450,600,25)
fill(255,185,0)
rect(2350,600,100,25)
fill(0)
square(2325,600,25)
square(2300,600,25)
fill(255,185,0)
rect(2150,600,150,25)
fill(0)
rect(2025,600,125,25)
fill(255,0,0)
rect(1950,600,75,25)
fill(0)
rect(1900,600,50,25)
fill(255,0,0)
rect(1850,600,50,25)
fill(0)
rect(1800,600,50,25)
fill(255,0,0)
rect(1725,600,75,25)

// capa 21
fill(255,185,0)
square(1725,625,25)
fill(255,0,0)
rect(1750,625,100,25)
fill(255,185,0)
rect(1850,625,125,25)
fill(255,0,0)
rect(1975,625,75,25)
fill(255,185,0)
rect(2050,625,50,25)
fill(255,0,0)
rect(2100,625,50,25)
fill(0)
rect(2150,625,50,25)
fill(255,185,0)
square(2200,625,25)
fill(0)
rect(2225,625,75,25)
square(2350,625,25)
fill(255,185,0)
rect(2375,625,75,25)
fill(0)
rect(2450,625,50,25)

//capa 22
rect(2375,650,75,25)
rect(2275,650,50,25)
fill(255,0,0)
rect(2225,650,50,25)
fill(0)
square(2200,650,25)
fill(255,0,0)
rect(2150,650,50,25)
fill(0)
square(2125,650,25)
fill(255,0,0)
rect(2025,650,100,25)
fill(0)
rect(1750,650,275,25)

//capa 23
fill(255,185,0)
rect(1675,675,475,25)
fill(0)
rect(2150,675,50,25)
fill(255,0,0)
square(2200,675,25)
fill(0)
rect(2225,675,50,25)
fill(255,185,0)
rect(2275,675,50,25)
fill(0)
rect(2325,675,50,25)

//Capa 24
square(2375,700,25)
fill(255,185,0)
rect(2225,700,150,25)
fill(0)
square(2200,700,25)
fill(255,185,0)
rect(2025,700,175,25)
fill(0)
rect(1775,700,250,25)

//capa 25
fill(255,185,0)
rect(1750,725,400,25)
fill(0)
square(2150,725,25)
fill(255,185,0)
rect(2175,725,75,25)
fill(0)
square(2250,725,25)
fill(255,185,0)
rect(2275,725,125,25)
fill(0)
square(2400,725,25)

//capa 26
square(2425,750,25)
fill(255,185,0)
rect(2250,750,175,25)
fill(0)
square(2225,750,25)
fill(255,185,0)
rect(2175,750,50,25)
fill(0)
square(2150,750,25)
fill(255,185,0)
rect(2000,750,150,25)
fill(0)
rect(1650,750,350,25)

//capa 27
fill(255,185,0)
rect(1700,775,425,25)
fill(0)
rect(2125,775,125,25)
fill(255,185,0)
rect(2250,775,50,25)
fill(0)
square(2300,775,25)
fill(255,185,0)
rect(2325,775,100,25)
fill(0)
square(2425,775,25)

//capa 28
square(2425,800,25)
fill(255,185,0)
rect(2300,800,125,25)
fill(0)
rect(2225,800,75,25)
square(2100,800,25)
fill(255,185,0)
rect(1950,800,150,25)
fill(0)
rect(1600,800,350,25)

//Capa 29
fill(255,185,0)
rect(1650,825,425,25)
fill(0)
square(2075,825,25)
rect(2175,825,75,25)
fill(255,0,0)
rect(2250,825,50,25)
fill(0)
square(2300,825,25)
fill(255,185,0)
rect(2325,825,100,25)
fill(0)
square(2425,825,25)
// Capa 30

square(2400,850,25)
fill(255,185,0)
rect(2325,850,75,25)
fill(0)
square(2300,850,25)
fill(255,0,0)
rect(2175,850,125,25)
fill(0)
square(2150,850,25)
square(2050,850,25)
fill(255,185,0)
rect(2000,850,50,25)
fill(0)
square(1975,850,25)
fill(255,185,0)
rect(1875,850,100,25)
fill(0)
rect(1575,850,300,25)

//Capa 31
fill(255,185,0)
rect(1550,875,250,25)
fill(255,0,0)
rect(1800,875,75,25)
fill(0)
square(1875,875,25)
fill(255,185,0)
rect(1900,875,100,25)
fill(0)
rect(2000,875,50,25)
square(2150,875,25)
fill(255,0,0)
rect(2175,875,150,25)
fill(0)
rect(2325,875,75,25)

//Capa 32
rect(2250,900,75,25)
fill(255,0,0)
rect(2150,900,100,25)
fill(0)
square(2125,900,25)
rect(1950,900,50,25)
fill(255,185,0)
rect(1900,900,50,25)
fill(0)
square(1875,900,25)
fill(255,0,0)
rect(1550,900,325,25)

//Capa 33
fill(255,185,0)
rect(1575,925,200,25)
fill(255,0,0)
rect(1775,925,125,25)
fill(0)
rect(1900,925,50,25)
square(2125,925,25)
fill(255,0,0)
rect(2150,925,75,25)
fill(0)
square(2225,925,25)

//Capa 34
square(2200,950,25)
fill(255,0,0)
rect(2150,950,50,25)
fill(0)
square(2125,950,25)
rect(1825,950,75,25)
fill(255,0,0)
rect(1600,950,225,25)

//Capa 35
fill(255,185,0)
rect(1550,975,150,25)
fill(255,0,0)
rect(1700,975,75,25)
fill(0)
rect(1775,975,50,25)
square(2125,975,25)
fill(255,0,0)
square(2150,975,25)
fill(0)
square(2175,975,25)

//Capa 36
square(2150,1000,25)
square(1750,1000,25)
fill(255,0,0)
rect(1575,1000,175,25)

//Capa 37
fill(255,185,0)
rect(1600,1025,75,25)
fill(255,0,0)
rect(1675,1025,50,25)
fill(0)
square(1725,1025,25)
}