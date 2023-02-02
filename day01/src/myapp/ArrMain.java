package myapp;

public class ArrMain {

    public static void main(String[] args) {

        String[] names = new String[3];
        names[0] = "apple";
        names[1] = "orange";
        names[2] = "pear";

        System.out.printf("Array size: %d\n", names.length);
        int i = 0;
        while (i < names.length) {
            System.out.printf("[%d] %s\n", i, names[i]);
            i += 1;
        }
    }
    
}
