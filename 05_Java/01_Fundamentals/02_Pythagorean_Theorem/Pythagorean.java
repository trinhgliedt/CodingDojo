//The java.lang package is automatically imported and ready to use in every Java program. So no need to import.
// import java.lang.Math;
public class Pythagorean {
    public double calculateHypotenuse(int legA, int legB) {
        // the hypotenuse is the side across from the right angle. 
        // calculate the value of c given legA and legB
        return Math.sqrt(legA*legA + legB*legB);
    }
}