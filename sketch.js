//Create variables here
var dog,happyDog,veryhappydog;
var database,foodS;
var fish=20;
function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png")
  veryhappydog=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  happyDog=createSprite(250,250,20,20);
  happyDog.addImage(dog);
  happyDog.scale=0.09;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock,);
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
database.ref('').update({
  Food:x
})
}

function readStock(data){
  foodStock=data.val();
  }
  

function draw() { 
 textSize(20);

 stroke("black");
  text("foodStock:"+fish,100,400);
  if(keyWentDown(UP_ARROW)){
    fish=fish-1;
       happyDog.addImage(veryhappydog);
       text("Dog is very HAPPY!",200,200);
       }


  text("note_presss up arrow to feed dog",300,400);
  
   
    
  drawSprites();
  //add styles here\

}
