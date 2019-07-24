package com.uter.UterApplication.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
public class Vehicle {

    @Id
    @Column(name="id",unique=true,nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="brand",length = 50)
    private String brand;

    @Column(name="model",length = 50)
    private String model;

    @Column(name="plate",length = 60,nullable=false)
    private String plate;


    @Column(name="license",length = 1)
    private String licenseRequired;

    @OneToMany(fetch=FetchType.LAZY,mappedBy = "vehicle")
    @JsonIgnore
    private Set<Trip> trips;

    Vehicle(){

    }

    Vehicle(long id,String brand,String model,String plate,String licenseRequired){
        this.id=id;
        this.brand=brand;
        this.model=model;
        this.plate=plate;
        this.licenseRequired=licenseRequired;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public String getLicenseRequired() {
        return licenseRequired;
    }

    public void setLicenseRequired(String licenseRequired) {
        this.licenseRequired = licenseRequired;
    }

    public Set<Trip> getTrips() {
        return trips;
    }

    public void setTrips(Set<Trip> trips) {
        this.trips = trips;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Vehicle)) return false;
        Vehicle vehicle = (Vehicle) o;
        return getId() == vehicle.getId() &&
                getBrand().equals(vehicle.getBrand()) &&
                getModel().equals(vehicle.getModel()) &&
                getPlate().equals(vehicle.getPlate()) &&
                getLicenseRequired().equals(vehicle.getLicenseRequired());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getBrand(), getModel(), getPlate(), getLicenseRequired());
    }
}
