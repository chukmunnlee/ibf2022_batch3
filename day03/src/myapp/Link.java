package myapp;

public class Link {

    public Link() {}

    public void hit(Hittable hittable) {
        System.out.println("Hiya....");
        hittable.hit(3);
    }
}
