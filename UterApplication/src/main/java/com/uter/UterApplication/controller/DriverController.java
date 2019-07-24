package com.uter.UterApplication.controller;

import com.uter.UterApplication.domain.Driver;
import com.uter.UterApplication.domain.Vehicle;
import com.uter.UterApplication.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/rest/driver")
public class DriverController {

    @Autowired
    DriverRepository repository;

    @GetMapping(value="/all")
    public ResponseEntity getAll(){
        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping(value="/{id}")
    public ResponseEntity getById(@PathVariable Long id){
        Optional<Driver> foundDriver=repository.findById(id);

        if(foundDriver.isPresent()){
            return ResponseEntity.ok(foundDriver.get());
        }else{
            return ResponseEntity.badRequest().body("No driver with id "+id +"found");
        }

    }

    @PostMapping(value="/save")
    public ResponseEntity save(@RequestBody Driver driver){
       Driver saved= repository.save(driver);
       return ResponseEntity.ok(saved);
    }

    @PutMapping(value="/update/{id}")
    public ResponseEntity update(@PathVariable Long id,@RequestBody Driver driver){
        if (!repository.findById(id).isPresent()) {

            ResponseEntity.badRequest().body("No driver with id "+id +"found");
        }

        return ResponseEntity.ok(repository.save(driver));
    }

    @DeleteMapping(value="/delete/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        if (!repository.findById(id).isPresent()) {

            ResponseEntity.badRequest().body("No driver with id "+id +"found");
        }

        repository.deleteById(id);

        return ResponseEntity.ok().build();
    }


    @GetMapping(value="/availablesByDateAndLicense/{date}/{license}")
    public ResponseEntity findAvailable(@PathVariable
                                        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
                                        @PathVariable String license){
        List<Driver> driverList=repository.findDriverAvailableByDateAndLicense(license,java.sql.Date.valueOf(date));
        return ResponseEntity.ok(driverList);

    }


}
