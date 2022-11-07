package com.spring.ws.entity;

import javax.persistence.*;

@Entity
@Table(name="account_table")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    long id;
    String username;
    String password;

    public Account(){}

    public Account(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
