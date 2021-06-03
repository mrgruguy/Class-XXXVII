class Form {
  constructor() {
  this.input = createInput("Name")
  
  this.button = createButton("play") 
  this.greeting = createElement("h2")  

  }

  hide(){
this.greeting.hide() 
this.button.hide() 
this.input.hide()  
                                               
  }
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(()=>{

      this.input.hide();
      this.button.hide();

     player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount
      player.update(name)
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)
    });

  }
async start(){
if(gameState === 0){
player = new Player()
var playerCountRef = await database.ref("playerCount").once("value")
if(playerCountRef.exists()){
  playerCount = playerCountRef.val()
player.getCount()


}
form = new Form()
form.display()
}     


}

play(){
 form.hide()
 textSize(30)     
 text("gameStart", 120, 100)
player.getPlayerInfo()

if(allPlayers !== undefined){
var display_position = 130
display_position += 20                   
textSize(15)
text(allPlayers[plr].name+"."+allPlayers[plr].distance, 120, display_position)



}







if(keyDown(UP_ARROW) && player.index !== null){
  player.distance+= 50
  player.update()
}
}

}

