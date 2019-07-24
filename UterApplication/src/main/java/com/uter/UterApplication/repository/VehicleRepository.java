package com.uter.UterApplication.repository;

import com.uter.UterApplication.domain.Vehicle;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface VehicleRepository extends CrudRepository<Vehicle,Long> {

    @Query(value="Select b from Vehicle b where b.id NOT IN (SELECT t.vehicle from Trip t where t.dateTrip =:tripDate)")
    List<Vehicle> FindVehiclesAvailableByDate(@Param("tripDate") Date date);


}
