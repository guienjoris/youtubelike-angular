import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'applications/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class DbmovieService {
  constructor(private HttpClient: HttpClient) {
    httpOptions.headers.append('Access-Control-Allow-Origin', '*"');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
    
  }
  API_KEY= 'a13b713c8527c9f9d0ed08581ad261b7';
  
  getMoviesid(movieInput){
    return this.HttpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=fr&query=${movieInput}`, httpOptions)
    
  }
  getMovie(id){
    return this.HttpClient.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=fr&api_key=a13b713c8527c9f9d0ed08581ad261b7`,httpOptions)
  }
  
}
