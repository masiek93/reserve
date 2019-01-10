package com.reserveApp.reserveapp.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Service {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String name;
    private String duration;
    private String price;
    private String description;
    @ManyToOne
    private Employee employee;
    @OneToMany
    private List<Appointment> appointment;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public List<Appointment> getAppointment() {
        return appointment;
    }

    public void setAppointment(List<Appointment> appointment) {
        this.appointment = appointment;
    }
}
