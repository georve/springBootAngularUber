package com.uter.UterApplication.controller;


import com.uter.UterApplication.domain.Driver;
import com.uter.UterApplication.domain.Trip;
import com.uter.UterApplication.domain.Vehicle;
import com.uter.UterApplication.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(value="/rest/tripManagement")
public class TripController {

    @Autowired
    TripRepository repository;

    @GetMapping(value="/all")
    public ResponseEntity getAll(){
        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping(value="/vehicles/{date}")
    public ResponseEntity getVehicles(@PathVariable
                                          @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date){
        return ResponseEntity.ok(repository.findVehiclesByDate(java.sql.Date.valueOf(date)));

    }

    @PostMapping(value="/save")
    public ResponseEntity save(@RequestBody Trip trip){
        //vehicle validation
        List<Vehicle> vehiclesSelected=repository.findVehiclesByDate(trip.getDateTrip());
        if(vehiclesSelected!=null && !vehiclesSelected.isEmpty()&&
                vehiclesSelected.contains(trip.getVehicle())){
            return ResponseEntity.badRequest().body("Vehicle with Plate "+trip.getVehicle().getPlate() +"is in another trip");
        }

        // Driver Validation
        List<Driver> driverSelected=repository.findDriverByDate(trip.getDateTrip());
        if(driverSelected!=null && !driverSelected.isEmpty() && driverSelected.contains(trip.getDriver())){
            return ResponseEntity.badRequest().body("Driver with Id "+trip.getDriver().getId() +"is in another trip");
        }


        Trip saved= repository.save(trip);
        return ResponseEntity.ok().build();
    }


}
