package com.reserveApp.reserveapp.repository.api;

import com.reserveApp.reserveapp.model.Calendar;
import org.springframework.data.repository.CrudRepository;

public interface ICalendarRepository extends CrudRepository<Calendar, Integer> {
}
