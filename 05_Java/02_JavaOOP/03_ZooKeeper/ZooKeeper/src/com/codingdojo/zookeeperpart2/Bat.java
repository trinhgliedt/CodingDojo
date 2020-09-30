package com.codingdojo.zookeeperpart2;

import com.codingdojo.zookeeperpart1.Mammal;

//Create a Bat class that can fly(), eatHumans(), and attackTown() and has a default energy level of 300.
public class Bat extends Mammal{
	public Bat() {
		this.setEnergy(300);
	}
	//For the fly() method, print the sound a bat taking off and decrease its energy by 50.
	public void fly() {
		System.out.println("Echoooooooooolocation");
		this.setEnergy(-50);
		this.displayEnergy();
	}
	//For the eatHumans() method, print the so- well, never mind, just increase its energy by 25.
	public void eatHumans()  {
		this.setEnergy(25);
		this.displayEnergy();
	}
	// For the attackTown() method, print the sound of a town on fire and decrease its energy by 100.
	public void attackTown() {
		System.out.println("OMG this huge bat is burning my town!!!");
		this.setEnergy(-100);
		this.displayEnergy();
	}
}
