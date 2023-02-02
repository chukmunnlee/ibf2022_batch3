package myapp;

public class MultiArrMain {

    public static void main(String[] args) {
        String[][] names = new String[2][3];
        names[0][0] = "a";
        names[0][1] = "b";
        names[0][2] = "c";
        names[1][0] = "d";
        names[1][1] = "e";
        names[1][2] = "f";

        int i = 0;
        while (i < names.length) {
            int j = 0;
            while (j < names[i].length) {
                System.out.printf(">>[i=%d][j=%d] %s\n",i, j, names[i][j]);
                j += 1;
            }
            i += 1;
        }
    }
}
