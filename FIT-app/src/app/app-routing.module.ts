import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExercisesComponent }      from './exercises/exercises.component';
import { ExerciseDetailComponent }  from './exercise-detail/exercise-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/exercises', pathMatch: 'full' },
  { path: 'exercise/:id', component: ExerciseDetailComponent },
  { path: 'exercises', component: ExercisesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
