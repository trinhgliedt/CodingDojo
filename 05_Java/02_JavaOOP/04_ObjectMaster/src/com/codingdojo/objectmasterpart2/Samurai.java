package com.codingdojo.objectmasterpart2;

public class Samurai extends Human{
	private static int counter;
	//Samurai: Set a default health of 200
	public Samurai(String name) {
		super(name);
		this.setHealth(200);
		counter++;
	}
	//Samurai: Add a method deathBlow(Human) that kills the other human, but reduces the Samurai's health by half
	public void deathBlow(Human target) {
		System.out.println("Before deathblow: " + this.getName() + " health is" + this.getHealth());
		target.setHealth(0);
		this.setHealth(this.getHealth()/2);
		System.out.println(target.getName() + " was killed!! " + this.getName() + " health is now " + this.getHealth());
	}
	//Samurai: Add a method meditate() that heals the Samurai for half of their current health.
	public void meditate() {
		this.setHealth(this.getHealth()+this.getHealth()/2);
		System.out.println(this.getName() + " meditated and health has increased to " + this.getHealth());
	}
	
	//Samurai: Add a method howMany() that returns the total current number of Samurai.
	public static int getNumOfSamurais() {
        return counter;
    }
	
}
