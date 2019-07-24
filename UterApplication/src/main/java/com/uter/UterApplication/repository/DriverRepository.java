package com.uter.UterApplication.repository;

import com.uter.UterApplication.domain.Driver;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface DriverRepository extends CrudRepository<Driver,Long> {

    @Query(value="Select b from Driver b where b.license =:license and " +
            "b.id NOT IN (SELECT t.driver from Trip t where t.dateTrip =:tripDate)")
    List<Driver> findDriverAvailableByDateAndLicense(@Param("license") String license, @Param("tripDate") Date date);

}
