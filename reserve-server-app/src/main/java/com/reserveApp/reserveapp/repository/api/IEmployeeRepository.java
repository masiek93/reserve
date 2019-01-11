package com.reserveApp.reserveapp.repository.api;

import com.reserveApp.reserveapp.model.Employee;
import org.springframework.data.repository.CrudRepository;

public interface IEmployeeRepository extends CrudRepository<Employee, Integer> {
}
