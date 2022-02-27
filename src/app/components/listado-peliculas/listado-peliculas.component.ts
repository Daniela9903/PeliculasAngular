import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
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
