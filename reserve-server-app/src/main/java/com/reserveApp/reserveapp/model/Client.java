package com.reserveApp.reserveapp.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Client {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String name;
    private String lastName;
    private String mail;
    private String password;
    @OneToMany
    private List<Appointment> appointment;

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

    public List<Appointment> getAppointment() {
        return appointment;
    }

    public void setAppointment(List<Appointment> appointment) {
        this.appointment = appointment;
    }
}
