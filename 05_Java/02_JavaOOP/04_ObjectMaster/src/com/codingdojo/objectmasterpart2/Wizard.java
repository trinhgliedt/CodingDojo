package com.codingdojo.objectmasterpart2;

public class Wizard extends Human{
	//Wizard: Set default health to 50
	// Wizard: Set default intelligence to 8
	public Wizard(String name) {
		super(name);
		this.setStealth(50);
		this.setIntelligence(8);
	}
	//Wizard: Add a method heal(Human) that heals the other human by the wizard's intelligence
	public void heal(Human patient) {
		patient.setHealth(this.getIntelligence());
		System.out.println(patient.getName() + " was healed! Current health is now " + patient.getHealth());
	}
	//Wizard: Add a method fireball(Human) that decreases the other human's health by the wizard's intelligence * 3
	public void fireball(Human target) {
		target.setHealth(-this.getIntelligence()*3);
		System.out.println(target.getName() + " was hit with a fireball! Current health is now " + target.getHealth());
	}
}
