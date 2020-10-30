//Create variables here

var dog, doggy, happyDog, database, foodS, foodStock, uA;

var feed, addFood;

var fedTime, lastFed;

var foodObj;


function preload()
{
  //load images here
  dog = loadAnimation("images/dogImg1.png");
  happyDog = loadAnimation("images/dogImg.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();

  feed = createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);


  doggy = createSprite(200,200,20,20);
  doggy.addAnimation("dog",dog);
  doggy.addAnimation("happyDog", happyDog);

  doggy.scale = 0.1; 

  foodStock = database.ref('Food');
 foodStock.on("value", readStock);

  
}


function draw() {  
  background(46,139,87);


Food.display();

fedTime = database.ref('Feed')

  

   
  
  textSize(16);
  fill("red");
stroke("green");
  text("Food Remaining: " + foodS, 250,125);
  

  drawSprites();
  //add styles here
  

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1; 
}

  database.ref('/').update({
    Food : x
  })
}



