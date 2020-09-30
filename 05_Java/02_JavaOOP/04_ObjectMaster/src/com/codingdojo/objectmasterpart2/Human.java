package com.codingdojo.objectmasterpart2;


public class Human {
	//Add the strength, stealth, and intelligence attributes with a default of 3.
	//Add the health attribute with a default of 100
	private String name;
	private int strength;
	private int stealth;
	private int intelligence;
	private int health;
	
	public Human(String name) {
		this.name = name;
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
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public int getStrength() {
		return strength;
	}

	public void setStrength(int strength) {
		this.strength = strength;
	}

	public int getStealth() {
		return stealth;
	}

	public void setStealth(int stealth) {
		this.stealth = stealth;
	}

	public int getIntelligence() {
		return intelligence;
	}

	public void setIntelligence(int intelligence) {
		this.intelligence = intelligence;
	}

	public int getHealth() {
		return health;
	}

	public void setHealth(int health) {
		this.health = health;
	}
	
}