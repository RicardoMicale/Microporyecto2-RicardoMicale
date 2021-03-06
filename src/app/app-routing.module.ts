import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './Componentes/auth/auth.component';
import { LoginComponent } from './Componentes/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './Componentes/profile/profile.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ListaComponent } from './Componentes/lista/lista.component';
import { DetallesComponent } from './Componentes/detalles/detalles.component';
import { CrearReservaComponent } from './Componentes/crear-reserva/crear-reserva.component';
import { FavoritosComponent } from './Componentes/favoritos/favoritos.component';
import { TarjetaComponent } from './Componentes/tarjeta/tarjeta.component';
import { DetallesChildComponent } from './Componentes/detalles-child/detalles-child.component';

import { GuardGuard } from './Guard/guard.guard';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'detalles/:id', component: DetallesComponent, children: [
    {path: 'detallesChild/:id', component: DetallesChildComponent}
  ]},
  {path: 'reserva', pathMatch: 'full', component: CrearReservaComponent, canActivate: [GuardGuard]},
  {path: 'favoritos',pathMatch: 'full', component: FavoritosComponent, canActivate: [GuardGuard]},
  {path: 'lista',pathMatch:'full', component: ListaComponent, canActivate: [GuardGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
