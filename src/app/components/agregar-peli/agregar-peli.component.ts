import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-agregar-peli',
  templateUrl: './agregar-peli.component.html',
  styleUrls: ['./agregar-peli.component.css']
})
export class AgregarPeliComponent implements OnInit {
 

  formulario = this.formBuilder.group({ //inicializar en 0 
    nombrePelicula:'',
    anioEstreno:'',
    genero:'',
    cal:'',
    sinopsis:''
  });
  constructor(private listaService:ListaService ,private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    
  }

  Guardar(){
    console.log(this.formulario.value)
    this.listaService.creatPelicula(this.formulario)
  }


}
