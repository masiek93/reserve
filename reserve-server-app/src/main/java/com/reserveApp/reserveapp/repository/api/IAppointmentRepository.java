package com.reserveApp.reserveapp.repository.api;

import com.reserveApp.reserveapp.model.Appointment;
import org.springframework.data.repository.CrudRepository;

public interface IAppointmentRepository extends CrudRepository<Appointment, Integer> {
}
