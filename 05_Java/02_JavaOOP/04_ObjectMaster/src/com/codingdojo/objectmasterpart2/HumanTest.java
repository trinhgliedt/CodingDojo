package com.codingdojo.objectmasterpart2;

public class HumanTest {

	public static void main(String[] args) {
		Ninja art = new Ninja("Art");
		Samurai ben = new Samurai("Ben");
		Samurai brit = new Samurai("Britney");
		Wizard albus = new Wizard("Albus");
		
		albus.heal(ben);
		albus.setIntelligence(40);
		albus.fireball(brit);
		art.steal(albus);
		art.runAway();
		ben.deathBlow(art);
		ben.meditate();
		System.out.println("Total number of Samurais: " + Samurai.getNumOfSamurais());
		

	}

}
