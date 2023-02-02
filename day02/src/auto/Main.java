package auto;

public class Main {

    public static void main(String[] args) {

        // Instantiate an instance of Car
        Car myCar = new Car();

        myCar.setMake("Toyota");
        myCar.setRegistration("s1234d");
        myCar.comments = "This is my car";

        System.out.printf("myCar make: %s, registration: %s\n"
                , myCar.getMake(), myCar.getRegistration());
        System.out.printf("comments: %s\n", myCar.comments);

        myCar.start();

        Car myOtherCar = new Car();
        myOtherCar.setMake("Honda");
        myOtherCar.setRegistration("s2345d");
        System.out.printf("myOtherCar make: %s, registration: %s\n"
                , myOtherCar.getMake(), myOtherCar.getRegistration());
        System.out.printf("myOtherCar service: %b\n", myOtherCar.needToService());

        FlyingCar myFlyingCar = new FlyingCar("s2345x");
        myFlyingCar.setRegistration("s6789a");
        System.out.printf("myFlyingCar registration: %s\n", myFlyingCar.getRegistration());

        // FlyingCar is a Car
        Car c = new FlyingCar("s5678p");
        // ElectricCar is a Car
        c = new ElectricCar();

        if (c instanceof FlyingCar) {
            // Cast it to FlyingCart
            myFlyingCar = (FlyingCar)c;
            System.out.printf("c is a flying car");
            myFlyingCar.climb(4f);

        } else if (c instanceof ElectricCar) {
            ElectricCar ec = (ElectricCar)c;
            System.out.println("c is a electric car");

        } else {
            System.out.println("c is a car");
        } 

        // Cast c into something it is not
        myFlyingCar = (FlyingCar)c;

        
    }
    
}
