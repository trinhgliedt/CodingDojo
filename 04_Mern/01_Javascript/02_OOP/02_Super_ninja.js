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

//     Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.
// create a class Sensei that inherits from the Ninja class
//  add an attribute: wisdom - default to 10
//  create a method: speakWisdom()
//  create a method: drinkSake()

class Sensei extends Ninja{
    constructor(name, wisdom=10){
        super(name, 200, 10, 10);
        this.name = name;
        this.wisdom = wisdom;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("A wise message");
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"