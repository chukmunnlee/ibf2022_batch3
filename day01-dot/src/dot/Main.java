package dot;

import java.io.Console;

public class Main {

    public static void main(String[] args) {

        // Get the console
        Console cons = System.console();

        // Number of equ and terms
        int eqnCount = Integer.parseInt(cons.readLine("Number of equations: "));
        int terms = Integer.parseInt(cons.readLine("Number of terms per equation: "));

        // Equation
        int[][] equation = new int[eqnCount][terms];
        int[] coefficient = new int[terms];
        int[] dot = new int[eqnCount];

        String input;
        String[] combs;

        // Read the equations
        int i = 0;
        int j = 0;
        int dotProd = 0;

        while (i < equation.length) {
            // Read a line
            input = cons.readLine("Equation (%d): ", i + 1);
            // Split the line by a single white space
            combs = input.split(" ");
            j = 0;
            // Convert the string into integer
            while (j < equation[i].length) {
                equation[i][j] = Integer.parseInt(combs[j]);
                j += 1;
            }
            i += 1;
        }

        // Read the coefficient
        input = cons.readLine("Coefficient: ");
        combs = input.split(" ");
        j = 0;
        while (j < coefficient.length) {
            coefficient[j] = Integer.parseInt(combs[j]);
            j++; // j += 1;
        }

        // Perform the dot product
        i = 0;
        while (i < equation.length) {
            j = 0;
            dotProd = 0;
            while (j < equation[i].length) {
                dotProd += equation[i][j] * coefficient[j];
                j++;
            }
            dot[i] = dotProd;
            i++;
        }

        System.out.println("Dot product");
        i = 0;
        while (i < dot.length) {
            System.out.printf("%d, ", dot[i]);
            i++;
        }
        System.out.println();
    }
}
