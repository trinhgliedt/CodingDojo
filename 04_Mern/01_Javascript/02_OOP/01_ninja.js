//Create a Ninja class
//add an attribute: name
// add a attribute: speed - give a default value of 3
// add an attribute: health
// add a attribute: strength - give a default value of 3
class Ninja{
    constructor(name, health, speed, strength){
    this.name = name;
    this.speed = 3;
    this.health = health;
    this.strength = 3;
    }
    // add a method: sayName() - This should log that Ninja's name to the console
    sayName(){
        console.log(this.name);
    }
    
    // add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
    showStats(){
        let stats = {
            "name": this.name,
            "strength": this.strength,
            "health": this.health,
        };
        console.log(stats);
    }
    
    // add a method: drinkSake() - This should add +10 Health to the Ninja
    drinkSake(){
        this.health += 10;
    }
} // close curly for Ninja class
    
    const ninja1 = new Ninja("Hyabusa");
    ninja1.sayName();
    ninja1.showStats();