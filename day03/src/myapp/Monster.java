package myapp;

public class Monster {

    // members
    String name;
    int health;

    // constructor
    public Monster() { }

    // getters/setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getHealth() { return health; }
    public void setHealth(int health) { this.health = health; }

    public boolean isDead() {
        return this.health <= 0;
    }

    // methods
    public void hit(int damage) {
        this.health -= damage;
    }

    @Override
    public String toString() {
        return "Monster{name=%s, health=%d}".formatted(name, health);
    }
}