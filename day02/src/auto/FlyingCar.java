package auto;

public class FlyingCar extends Car {

    // Members
    private float altitue = 0f;

    // Constructor
    //public FlyingCar() { }
    public FlyingCar(String registration) {
        this.setRegistration(registration);
    }

    // Getters and setters
    public float getAltitue() { return this.altitue; }
    public void setAltitue(float altitue) { this.altitue = altitue; }

    // methods
    public void climb(float feet) {
        if (this.altitue < 100) {
            this.altitue = Math.min(this.altitue + feet, 100f);
        }
    }
    // default to climb 5ft
    // overloading
    public void climb() {
        this.climb(5);
    }

    // annotation
    @Override()
    public String getRegistration() {
        // s1234a -> Fs1234a
        return "F" + super.getRegistration();
    }

    @Override
    public void start() {
        super.start();
        this.altitue = 5;
    }
    
}
