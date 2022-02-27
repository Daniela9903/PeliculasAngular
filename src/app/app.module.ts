import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';
import { CalificarPeliculaComponent } from './components/calificar-pelicula/calificar-pelicula.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AgregarPeliComponent } from './components/agregar-peli/agregar-peli.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    ListadoPeliculasComponent,
    CalificarPeliculaComponent,
    LoginComponent,
    AgregarPeliComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
