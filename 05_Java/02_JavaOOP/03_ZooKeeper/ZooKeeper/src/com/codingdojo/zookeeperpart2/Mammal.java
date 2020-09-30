package com.codingdojo.zookeeperpart2;
// Create a Mammal class that has an energyLevel and displayEnergy() method. The displayEnergy() method should show the animals energy level as well as return it.
public class Mammal {
	private int energyLevel;
	
	public int displayEnergy() {
		System.out.println("Energy level: " + energyLevel);
		return energyLevel;
	}
	public void setEnergy(int number) {
		energyLevel += number;
	}
}
