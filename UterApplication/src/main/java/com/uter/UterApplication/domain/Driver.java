package com.uter.UterApplication.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
public class Driver {

    @Id
    @Column(name="id",unique=true,nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="name",length = 60,nullable = false)
    private String name;

    @Column(name="lastname",length = 60)
    private String lastName;

    @Column(name="license",length = 1)
    private String license;


    @OneToMany(fetch=FetchType.LAZY,mappedBy = "driver")
    @JsonIgnore
    Set<Trip> trips;

    Driver(){

    }

    Driver(Long id,String name,String lastName,String license){
        this.id=id;
        this.name=name;
        this.lastName=lastName;
        this.license=license;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Driver)) return false;
        Driver driver = (Driver) o;
        return getId() == driver.getId() &&
                getName().equals(driver.getName()) &&
                getLastName().equals(driver.getLastName()) &&
                getLicense().equals(driver.getLicense());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getLastName(), getLicense());
    }
}
