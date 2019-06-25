import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DbmovieService {
  API_KEY= 'a13b713c8527c9f9d0ed08581ad261b7';
  
  getMoviesid(movieInput){
    return this.HttpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=fr&query=${movieInput}`)
  }
  constructor(private HttpClient: HttpClient) {
    
  }
}
