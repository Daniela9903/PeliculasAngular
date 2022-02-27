import { NgModule } from '@angular/core';
import { PrincipalComponent } from '../components/principal/principal.component';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPeliculasComponent } from '../components/listado-peliculas/listado-peliculas.component';
import { CalificarPeliculaComponent } from '../components/calificar-pelicula/calificar-pelicula.component';
import { LoginComponent } from '../components/login/login.component';
import { AgregarPeliComponent } from '../components/agregar-peli/agregar-peli.component';


const routes : Routes = [
  {
    path:'home',
    component:PrincipalComponent 
  },
  
  { path:"listadoP",
    component:ListadoPeliculasComponent  },

  { path:"agregarP",
   component:AgregarPeliComponent  },

   { path:"calificarP",
   component:CalificarPeliculaComponent  },

   { path:"login",
   component:LoginComponent},


  { path:"**", redirectTo: "home"},//Ruta para direccionar siempre a home 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
