package com.reserveApp.reserveapp.repository.api;

import com.reserveApp.reserveapp.model.Service;
import org.springframework.data.repository.CrudRepository;

public interface IServiceRepository extends CrudRepository<Service, Integer> {
}
