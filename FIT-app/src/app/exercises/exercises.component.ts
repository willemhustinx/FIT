import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  selectedExercise: Exercise;

  exercises: Exercise[];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.getExercises();
  }

  onSelect(exercise: Exercise): void {
    this.selectedExercise = exercise;
  }

  getExercises(): void{
    this.exerciseService.getExercises()
      .subscribe(exercises => this.exercises = exercises)
  }

}
