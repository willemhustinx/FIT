package nl.willemhustinx.fit.model;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class Exercise {

    long id;
    String name;
    Date date;

    public Exercise() {

    }

    public Exercise(long id, String name, Date date) {
        this.id = id;
        this.name = name;
        this.date = date;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Exercise{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", date=" + date +
                '}';
    }
}
