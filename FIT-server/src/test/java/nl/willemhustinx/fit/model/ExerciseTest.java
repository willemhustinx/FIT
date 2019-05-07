package nl.willemhustinx.fit.model;

import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class ExerciseTest {

    private final Exercise e = new Exercise(1, "Pullup", new Date());

    @Test
    void testName() {
        String expected = "Pullup";
        String actual = e.getName();
        assertEquals(expected, actual);
    }

    @Test
    void getId() {
        long expected = 1;
        long actual = e.getId();
        assertEquals(expected, actual);
    }
}
