
public class IPhone extends Phone implements Ringable {
    public IPhone(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        super(versionNumber, batteryPercentage, carrier, ringTone);
    }
    @Override
    public String ring() {
        return "iPhone " + this.getVersionNumber() + " from " + this.getCarrier() + ": " + this.getRingTone();
        
    }
    @Override
    public String unlock() {
    	return "iPhone " + this.getVersionNumber() + " unlocked via facial recognition!";
    }
    @Override
    public void displayInfo() {
    	System.out.println("Phone information: iPhone " + this.getVersionNumber() + " from " + this.getCarrier());
    }
}