package nl.willemhustinx.fit.rest;

import nl.willemhustinx.fit.model.Exercise;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Path("/exercise")
public class RestExercise {

    List<Exercise> list;

    public RestExercise(){
        list = new ArrayList<>();

        list.add(new Exercise(1, "Bench press", new Date()));
        list.add(new Exercise(2, "Push-Ups", new Date()));
        list.add(new Exercise(3, "Pull-Ups", new Date()));
        list.add(new Exercise(4, "Squat", new Date()));
    }

    @GET @Produces(MediaType.APPLICATION_JSON)
    public List<Exercise> getExercises() {

        return list;

    }


    @GET
    @Path("/{id:[0-9][0-9]*}")
    @Produces(MediaType.APPLICATION_JSON)
    public Exercise getExerciseById(@PathParam("id") long id) {

        Exercise e = null;

        for (Exercise ex : list) {
            if (ex.getId() == id){
                e = ex;
            }
        }

        if(e == null){
            throw new WebApplicationException(Response.Status.NOT_FOUND);
        }

        return e;
    }

}
