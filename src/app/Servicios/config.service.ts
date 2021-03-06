import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
//Servicio de peliculas (API)
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiKey: string = 'b52712245cbce606c4f237cbfa3a5342';

  URL = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any> {
    return this.http.get(this.URL);
  }

  getNewPage(pageNum: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&page=${pageNum}&include_adult=false`);
  }

  search(busqueda: string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${busqueda}&page=1&include_adult=false`);
  }

  getDetails(id: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}>&language=en-US`);
  }
}
