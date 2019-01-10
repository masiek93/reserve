package com.reserveApp.reserveapp.model;

import javax.persistence.*;

@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    @OneToOne
    private Service service;
    @OneToOne
    private Client client;
    @OneToOne
    private Employee employee;

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}
