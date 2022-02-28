import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  URL: string ='http://localhost:5000/peliculas';

  constructor(private http:HttpClient) { }

  getLista(){
    return this.http.get(this.URL);
    
  }

  creatPelicula(peliculas: any): Observable<any>{
    return this.http.post(this.URL, peliculas);
  }



}
