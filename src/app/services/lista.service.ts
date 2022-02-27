import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  URL: string ='http://localhost:5000/peliculas';

  constructor(private http:HttpClient) { }

  getLista(){
    return this.http.get(this.URL);
    
  }

}
