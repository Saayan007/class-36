class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  /*async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref("playerCount"). once("values");
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }*/
  play(){
    form.hide();
  textSize(30);
text("GAME START",120,100);
Player.getPlayerinfo();

if(allplayers!=undefined){
var display_position=130;
for(var i in allplayers){
  if(i==="player"+player.index){
fill("red")
  }
  else{
    fill("black")
  }
display_position+=20;
textSize(15)
text(allplayers[i].name+":"+allplayers[i].distance,120,display_position)
}
 
}

 if(keyDown(UP_ARROW)&& player.index!=null){
player.distance=+50;
player.update();
 }
}
}