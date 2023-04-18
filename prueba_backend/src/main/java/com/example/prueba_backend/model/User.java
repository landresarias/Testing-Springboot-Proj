package com.example.prueba_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="fullname", length = 180)
    private String fullname;
    @Column(name="email", length = 180)
    private String email;
    public User() { }
        public User(String parFullname, String parEmail){
            super();
            this.fullname = parFullname;
            this.email = parEmail;
        }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getFullname(){
        return fullname;
    }
    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
    public String getEmail(){
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
}
