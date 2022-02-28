import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-calificar-pelicula',
  templateUrl: './calificar-pelicula.component.html',
  styleUrls: ['./calificar-pelicula.component.css']
})
export class CalificarPeliculaComponent implements OnInit {
  mensajes: any[] = [];
  constructor(private listaService:ListaService) { }

  ngOnInit(): void {
    this.listaService.getLista()
    .subscribe((posts: any) =>{
    console.log(posts);
    this.mensajes = posts;
  })
    
  }

}
