package com.codingdojo.zookeeperpart2;

import com.codingdojo.zookeeperpart1.Mammal;

//Create a separate class Gorilla that can throwSomething(), eatBananas(), and climb()
public class Gorilla extends Mammal{
	//For the throwSomething() method, have it print out a message indicating that the gorilla has thrown something, as well as decrease the energy level by 5
	public void throwSomething(String something) {
		System.out.println("The gorilla just threw " + something);
		this.setEnergy(-5);
		this.displayEnergy();
	}
	//For the eatBananas() method, have it print out a message indicating the gorilla's satisfaction and increase its energy by 10
	public void eatBananas() {
		System.out.println("Hmm... yummy banana!!!");
		this.setEnergy(10);
		this.displayEnergy();
	}
	//For the climb() method, have it print out a message indicating the gorilla has climbed a tree and decrease its energy by 10
	public void climb() {
		System.out.println("This gorilla just climbed a tree!");
		this.setEnergy(-10);
		this.displayEnergy();
	}
}
