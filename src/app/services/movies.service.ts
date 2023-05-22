import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'f5d854b3c9eb5a28e250bdd8034fce7e';
  constructor(private http: HttpClient) {}
  getMovies() {
    return this.http.get(`${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}`);
  }
}
