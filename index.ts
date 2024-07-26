#! /usr/bin/env node

import { input, select } from "@inquirer/prompts";


// class of player
class Player {
    name: string;
    Fuel: number = 100
    constructor(name: string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.Fuel -25
        this.Fuel = fuel
    }
    fuelIncrease(){
        this.Fuel = 100
    }
}

// Class Of Opponent
class Opponent {
    name: string;
    Fuel: number = 100
    constructor(name: string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.Fuel -25
        this.Fuel = fuel
    }
}

// player name
let player = await input({message: 'Enter Your Name: '})


//  selection of opponent
const opponent = await select({
    message: 'Select Your Opponent',
    choices: [
      {
        name: "Skeleton",
        value: "Skeleton",
      },
      {
        name: 'Assassian',
        value: 'Assassian',
      },
      {
        name: 'Zombie',
        value: 'Zombie',
      },
      
    ],
  });


// data gathering
let player_1 = new Player(player);
let opponent_1 = new Opponent(opponent);

do{

// opponenet skeleton
  if(opponent == "Skeleton"){
    let ask = await select({message: 'Which action you want to perform Select it', 
      choices: [
        {
          name: "Attack",
          value: "Attack"
        },
        {
          name: "Drink Portion",
          value: "Drink Portion"
        },
        {
          name: "Run For Your Life....",
          value: "Run For Your Life...."
        },
      ]
    })
    if(ask == "Attack") {
      let num = Math.floor(Math.random() * 2)
      if(num > 0) {
        player_1.fuelDecrease()
                console.log(`${player_1.name} fuel is ${player_1.Fuel}`);
                console.log(`${opponent_1.name} fuel is ${opponent_1.Fuel}`);
                if(player_1.Fuel<=0){
                  console.log('GAME OVER......!!!!!!');
                  process.exit();
                  
              }
      }
      if(num <= 0){
        opponent_1.fuelDecrease()
        console.log(`${player_1.name} fuel is ${player_1.Fuel}`);
        console.log(`${opponent_1.name} fuel is ${opponent_1.Fuel}`);
        if(opponent_1.Fuel<=0){
            console.log(`HURRAH!!!!   You Won the Game`);
            process.exit()
            
        }
     }
  }
    if(ask == "Drink Portion"){
      player_1.fuelIncrease()
      console.log(`You Drink Health Portion, YOur Fuel is ${player_1.Fuel}`);
      
  }
  if(ask == "Run For Your Life...."){
    console.log(`GAME OVER...... TRY AGAIN!!!!!!!!!`);
    process.exit()
    
}
  }
  //  OPPPNENT Assassian
  if(opponent == 'Assassian'){
    console.log(`${player_1.name} vs ${opponent_1.name}`);
    let ask = await select({message: 'Which action you want to perform Select it', 
      choices: [
        {
          name: "Attack",
          value: "Attack"
        },
        {
          name: "Drink Portion",
          value: "Drink Portion"
        },
        {
          name: "Run For Your Life....",
          value: "Run For Your Life...."
        },
      ]
    })
    if(ask == "Attack"){
      let num = Math.floor(Math.random() * 2)
      if(num > 0) {
          player_1.fuelDecrease()
          console.log(`${player_1.name} fuel is ${player_1.Fuel}`);
          console.log(`${opponent_1.name} fuel is ${opponent_1.Fuel}`);
          if(player_1.Fuel<=0){
              console.log('GAME OVER......!!!!!!');
              process.exit();
              
          }
          
      }
      if(num <= 0){
          opponent_1.fuelDecrease()
          console.log(`${player_1.name} fuel is ${player_1.Fuel}`);
          console.log(`${opponent_1.name} fuel is ${opponent_1.Fuel}`);
          if(opponent_1.Fuel<=0){
              console.log(`HURRAH!!!!   You Won the Game`);
              process.exit()
              
          }
      }
  }
  if(ask == "Drink Portion"){
    player_1.fuelIncrease()
    console.log(`You Drink Health Portion, YOur Fuel is ${player_1.Fuel}`);
    
}
if(ask =="Run For Your Life...."){
    console.log(`GAME OVER...... TRY AGAIN!!!!!!!!!`);
    process.exit()
    
      }  
  }
  // OPPONENT ZOMBIE
  if(opponent == "Zombie"){
    console.log(`${player_1.name} vs ${opponent_1.name}`);
    let ask = await select({message: 'Which action you want to perform Select it', 
      choices: [
        {
          name: "Attack",
          value: "Attack"
        },
        {
          name: "Drink Portion",
          value: "Drink Portion"
        },
        {
          name: "Run For Your Life....",
          value: "Run For Your Life...."
        },
      ]
    })
    if(ask == "Attack"){
      let num = Math.floor(Math.random() * 2)
          if(num > 0) {
              player_1.fuelDecrease()
              console.log(`${player_1.name} fuel is ${player_1.Fuel}`);
              console.log(`${opponent_1.name} fuel is ${opponent_1.Fuel}`);
              if(player_1.Fuel<=0){
                  console.log('GAME OVER......!!!!!!');
                  process.exit();
                  
              }
      }   
      if(num <= 0){
          opponent_1.fuelDecrease()
          console.log(`${player_1.name} fuel is ${player_1.Fuel}`);
          console.log(`${opponent_1.name} fuel is ${opponent_1.Fuel}`);
          if(opponent_1.Fuel<=0){
              console.log(`HURRAH!!!!   You Won the Game`);
              process.exit()
              
          }
      }
  }
  if(ask == "Drink Portion"){
      player_1.fuelIncrease()
      console.log(`You Drink Health Portion, YOur Fuel is ${player_1.Fuel}`);
      
  }
  if(ask =="Run For Your Life...."){
      console.log(`GAME OVER...... TRY AGAIN!!!!!!!!!`);
      process.exit()
     }
  
  }
}
while(true)
