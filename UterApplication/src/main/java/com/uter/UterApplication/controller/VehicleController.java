package com.uter.UterApplication.controller;

import com.uter.UterApplication.domain.Driver;
import com.uter.UterApplication.domain.Vehicle;
import com.uter.UterApplication.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/rest/vehicle")
public class VehicleController {

    @Autowired
    VehicleRepository repository;

    @GetMapping(value="/all")
    public ResponseEntity getAll(){
        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping(value="/{id}")
    public ResponseEntity getById(@PathVariable Long id){
        Optional<Vehicle> foundVehicle=repository.findById(id);

        if(foundVehicle.isPresent()){
            return ResponseEntity.ok(foundVehicle.get());
        }else{
            return ResponseEntity.badRequest().body("No driver with id "+id +"found");
        }

    }


    @PostMapping(value="/save")
    public ResponseEntity save(@RequestBody Vehicle vehicle){
        Vehicle saved= repository.save(vehicle);
        return ResponseEntity.ok(saved);
    }

    @PutMapping(value="/update/{id}")
    public ResponseEntity update(@PathVariable Long id,@RequestBody Vehicle vehicle){
        if (!repository.findById(id).isPresent()) {

            ResponseEntity.badRequest().body("No driver with id "+id +"found");
        }

        return ResponseEntity.ok(repository.save(vehicle));
    }

    @DeleteMapping(value="/delete/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        if (!repository.findById(id).isPresent()) {

            ResponseEntity.badRequest().body("No driver with id "+id +"found");
        }

        repository.deleteById(id);

        return ResponseEntity.ok().build();
    }


    @GetMapping(value="/availablesByDate/{date}")
    public ResponseEntity findAvailable(@PathVariable
                                        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date){
        List<Vehicle> vehicleList=repository.FindVehiclesAvailableByDate(java.sql.Date.valueOf(date));
        return ResponseEntity.ok(vehicleList);

    }


}
