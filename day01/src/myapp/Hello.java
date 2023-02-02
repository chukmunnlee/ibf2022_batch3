package myapp;

import java.io.Console;

public class Hello {
    
    // entry point
    public static void main(String[] args) {
        //Get the console
        // declare a variable <Type> <name>
        Console cons = System.console();

        // Prompt the user for an input
        String input = cons.readLine("What is your name? ");
        String phone = cons.readLine("Your contact number? ");
        String strAge = cons.readLine("How old are you? ");

        input = input.trim();

        int age = Integer.parseInt(strAge);
        boolean greaterThan30 = age >= 30;

        // Print the input
        System.out.printf("Hello '%s'. Your phone is %s\n", input.toUpperCase(), phone);
        System.out.printf("You are %s years old!\n", strAge);
        System.out.printf("Greater than 50? %b\n", age > 50);

        //if (age >= 30) {
        if (greaterThan30) {
            // then is mandatory
            System.out.printf("Hello sir %s\n", input);
        } else {
            System.out.printf("Hello %s\n", input);
        }

        switch (input.trim().toLowerCase()) {
            case "fred":
                System.out.printf("Yabadaboo!!");
                break;

            case "barney":
                System.out.printf("hello fred");

            default:
                System.out.printf("You are not fred or barney");
        }

        while(age > 0) {
            System.out.printf("---- name: %s, age: %d\n", input, age);
            age = age - 1;
        }
    }

}
