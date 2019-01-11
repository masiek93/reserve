package com.reserveApp.reserveapp.repository.api;

import com.reserveApp.reserveapp.model.Client;
import org.springframework.data.repository.CrudRepository;

public interface IClientRepository extends CrudRepository<Client, Integer> {
}
