package com.codingdojo.objectmasterpart1;

public class Human {
	//Add the strength, stealth, and intelligence attributes with a default of 3.
	//Add the health attribute with a default of 100
	private int strength;
	private int stealth;
	private int intelligence;
	private int health;
	
	public Human() {
		strength = 3;
		stealth = 3;
		intelligence = 3;
		health = 100;
	}
	
	public void attack(Human theAttacked) {
		if (this.health < 0) {return;}
		theAttacked.health -= this.health;
	}
	
	public void getStat() {
		System.out.println("Strength: " + strength + ", Stealth: " + stealth + ", intelligence: " + intelligence + ", health: " + health);
	}
}
