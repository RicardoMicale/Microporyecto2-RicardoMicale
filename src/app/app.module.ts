import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { AuthComponent } from './Componentes/auth/auth.component';
import { LoginComponent } from './Componentes/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './Componentes/profile/profile.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ListaComponent } from './Componentes/lista/lista.component';
import { DetallesComponent } from './Componentes/detalles/detalles.component';
import { CrearReservaComponent } from './Componentes/crear-reserva/crear-reserva.component';
import { FavoritosComponent } from './Componentes/favoritos/favoritos.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'profile', component: ProfileComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    ProfileComponent,
    NavbarComponent,
    InicioComponent,
    ListaComponent,
    DetallesComponent,
    CrearReservaComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }
