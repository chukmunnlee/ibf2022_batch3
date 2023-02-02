package workshop01;

import java.io.Console;
import java.util.Random;

public class Main {

    public static void main(String[] args) {

        // Create an instance of Random
        Random rand = new Random();
        // Generate a random number between 0 and 19
        int toGuess = rand.nextInt(20) + 1;

        System.out.printf("toGuess: %d\n", toGuess);

        // TODO continue from here

        Console cons = System.console();
        String input;
        int myGuess;
        int tries = 3;
        boolean win = false;

        while ((tries > 0) && (!win)) {

            input = cons.readLine("What is your guess? (%d)", tries);
            myGuess = Integer.parseInt(input);

            if (myGuess > toGuess) {
                System.out.println("Lower VVV");
            } else if (myGuess < toGuess) {
                System.out.println("Higher ^^^");
            } else {
                System.out.println("You win!");
                win = true;
            }

            //tries = tries - 1;
            tries -= 1;
        }    

        if (!win) {
            System.out.println("You lose!");
        }
    }

}