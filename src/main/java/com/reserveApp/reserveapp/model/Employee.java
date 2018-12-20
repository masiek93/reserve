package com.reserveApp.reserveapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String name;
    private String lastName;
    private String mail;
    private String password;
    private String type; // do zmiany na enum
    private String freeTerms;
    private String occupiedTerms;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getFreeTerms() {
        return freeTerms;
    }

    public void setFreeTerms(String freeTerms) {
        this.freeTerms = freeTerms;
    }

    public String getOccupiedTerms() {
        return occupiedTerms;
    }

    public void setOccupiedTerms(String occupiedTerms) {
        this.occupiedTerms = occupiedTerms;
    }
}
