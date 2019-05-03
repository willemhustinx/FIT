import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {

  exercise: Exercise;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: ExerciseService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getExercise();
  }

  getExercise(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.exerciseService.getExercise(id)
      .subscribe(exercise => this.exercise = exercise);
  }

  goBack(): void {
    this.location.back();
  }

}
