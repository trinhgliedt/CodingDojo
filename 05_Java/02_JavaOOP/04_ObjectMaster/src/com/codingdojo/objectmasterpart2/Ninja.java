package com.codingdojo.objectmasterpart2;

public class Ninja extends Human{
	//Ninja: Set default stealth to 10
	public Ninja(String name) {
		super(name);
		this.setStealth(10);
	}
	//Ninja: Add a method steal(Human) that takes the amount of stealth the ninja has, removes it from the other human's health, and adds it to the ninja's
	public void steal(Human target) {
		this.setHealth(this.getStealth());
		target.setHealth(-this.getStealth());
		System.out.println(this.getName() + " has stolen " + this.getStealth() + " health from " + target.getName());
	}
	//Ninja: Add a method runAway() that decreases their health by 10
	public void runAway() {
		this.setHealth(-10);
		System.out.println("Hmm, where did " + this.getName() + " go?");
	}
}
