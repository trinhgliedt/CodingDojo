package com.calculatorpart1;

public class CalculatorTest {

	public static void main(String[] args) {
		Calculator o = new Calculator();
		o.setOperandOne(10.5);
		o.setOperation("-");
		o.setOperandTwo(5.2);
		o.performOperation();
		System.out.println(o.getResult());

	}

}
