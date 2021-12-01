package elte.meetonefriender.person;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

public class UserRegistrationDto {
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;
    private String cityName;


    public UserRegistrationDto(String firstName, String lastName, String username, String password, Date dateOfBirth, String cityName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.cityName = cityName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }
}
