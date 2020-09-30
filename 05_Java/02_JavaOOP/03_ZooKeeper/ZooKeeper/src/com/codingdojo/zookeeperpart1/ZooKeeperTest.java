package com.codingdojo.zookeeperpart1;

public class ZooKeeperTest {
	public static void main (String[] args) {
		Gorilla bob = new Gorilla();
		bob.throwSomething("a stick");
		bob.throwSomething("a car");
		bob.throwSomething("a shoe");
		bob.eatBananas();
		bob.eatBananas();
		bob.climb();
//		System.out.println(Integer.toString(bob.displayEnergy()));
	}
}
