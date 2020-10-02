

public class Galaxy extends Phone implements Ringable {
    public Galaxy(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        super(versionNumber, batteryPercentage, carrier, ringTone);
    }
    @Override
    public String ring() {
        return "Galaxy " + this.getVersionNumber() + " from " + this.getCarrier() + ": " + this.getRingTone();
        
    }
    @Override
    public String unlock() {
        return "Galaxy " + this.getVersionNumber() + " unlocked via finger print!";
    }
    @Override
    public void displayInfo() {
    	System.out.println("Phone information: Galaxy " + this.getVersionNumber() + " from " + this.getCarrier());
    }
}
//