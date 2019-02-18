import { Injectable } from '@angular/core';
import { Hero, Test } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';
  
  constructor(private http: HttpClient, private messageService: MessageService) { }


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(heroes => this.log(`Fetched Heroes`)),
      catchError(this.handleError('getHeroes', []))
    );
  }

  getTeams(): Observable<Test[]> {
    const teamsUrl = 'api/teams';
    return this.http.get<Test[]>(teamsUrl);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Fetched Hero w/ ID = ${id}`)),
      catchError(this.handleError<Hero>(`getHero id = ${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`Updated Hero w/ ID = ${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`Added Hero w/ Name = ${hero.name} and ID = ${hero.id}`)),
      catchError(this.handleError<any>('addHero'))
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url =`${this.heroesUrl}/${id}`;
    /*The new URL contains the id of the Hero that is to be deleted*/

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`Deleted Hero  ID = ${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of ([]);
    }

    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`Found Heroes Matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes',[]))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    }
  }
 

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
