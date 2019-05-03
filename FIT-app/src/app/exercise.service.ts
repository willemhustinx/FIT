import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Exercise } from './exercise';
import { EXERCISES } from './mock-exercise';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })


@Injectable({
  providedIn: 'root',
})
export class ExerciseService {

  private exercisesUrl = 'http://localhost:8080/FIT/rest/exercise';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  /** GET exercises from the server */
  getExercises (): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.exercisesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Exercise[]>('getExercises', []))
      );
  }

  /** GET exercise by id. Will 404 if id not found */
  getExercise(id: number): Observable<Exercise> {
    const url = `${this.exercisesUrl}/${id}`;
    return this.http.get<Exercise>(url).pipe(
      tap(_ => this.log(`fetched exercise id=${id}`)),
      catchError(this.handleError<Exercise>(`getExercise id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ExerciseService: ${message}`);
  }
}
