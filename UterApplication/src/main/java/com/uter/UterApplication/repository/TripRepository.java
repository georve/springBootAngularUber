package com.uter.UterApplication.repository;

import com.uter.UterApplication.domain.Driver;
import com.uter.UterApplication.domain.Trip;
import com.uter.UterApplication.domain.Vehicle;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface TripRepository extends CrudRepository<Trip,Long> {

    @Query(value="Select T.vehicle from Trip T where T.dateTrip =:tripDate")
    List<Vehicle> findVehiclesByDate(@Param("tripDate") Date date);

    @Query(value="Select T.driver from Trip T where T.dateTrip =:tripDate")
    List<Driver> findDriverByDate(@Param("tripDate") Date date);
}
