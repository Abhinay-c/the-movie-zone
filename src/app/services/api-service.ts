import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMovieDetails(
    title: string,
    id: string
  ): Observable<Movie> {
    let params = new HttpParams().set(`apikey`,env.API_KEY).set(`t`,title).set('i',id);
    return this.http.get<Movie>(`${env.BASE_URL}`,{params: params});
  }

}
