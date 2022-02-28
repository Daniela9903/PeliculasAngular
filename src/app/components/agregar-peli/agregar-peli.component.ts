import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';


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
  constructor(private listaService:ListaService , private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    
  }

  Guardar(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pelicula agragada',
      showConfirmButton: false,
      timer: 1500
    })
    console.log(this.formulario.value)
    this.listaService.creatPelicula(this.formulario.value).subscribe((res:any) =>{
      console.log(res)
    })
    
  }


}
