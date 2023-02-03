package myapp;

import java.util.LinkedList;
import java.util.List;


public class GameMain {

    // entry point
    public static void main(String[] args) {

        List<Hittable> enemies = new LinkedList<>();

        for (int i = 0; i < 3; i++) {
            enemies.add(new Troll());
        }
        enemies.add(new Tree());
        enemies.add(new Gnome());

        Hittable h = new Tree();

        if (h instanceof Tree) {
            Tree t = (Tree)h;
        }

        for (Hittable h: enemies) {
            System.out.printf(">>> %s\n", h);
        }

        // for (int i = 0; i < enemies.size(); i++) {
        //     System.out.printf("%d: %s\n", i, enemies.get(i));
        // }
        // for-each loop
        Link link = new Link();
        for (Hittable h: enemies) {
            link.hit(h);
            System.out.printf(">> %s\n", h);
        }

    }
    
}
