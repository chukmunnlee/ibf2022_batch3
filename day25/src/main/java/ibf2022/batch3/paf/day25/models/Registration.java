package ibf2022.batch3.paf.day25.models;

public class Registration {

    private String name;
    private String email;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    @Override
    public String toString() {
        return "Registration [name=" + name + ", email=" + email + "]";
    }
}
