import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import {WorkoutsComponent} from './workouts/workouts.component';
import {WorkoutDetailComponent} from './workout-detail/workout-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/exercises', pathMatch: 'full' },
  { path: 'exercise/:id', component: ExerciseDetailComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'workouts', component: WorkoutsComponent},
  { path: 'workout/:id', component: WorkoutDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
