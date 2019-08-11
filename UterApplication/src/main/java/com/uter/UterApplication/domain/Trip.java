package com.uter.UterApplication.domain;

import javax.persistence.*;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
public class Trip {

    @Id
    @Column(name="id",unique=true,nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="date_trip")
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MMM-dd", timezone="UTC")
    @Temporal(TemporalType.DATE)
    private Date dateTrip;

    @ManyToOne
    @JoinColumn(name="vehicle_id")
    private Vehicle vehicle;

    @ManyToOne
    @JoinColumn(name="driver_id")
    private Driver driver;

    Trip(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateTrip() {
        return dateTrip;
    }

    public void setDateTrip(Date dateTrip) {
        this.dateTrip = dateTrip;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }
}
