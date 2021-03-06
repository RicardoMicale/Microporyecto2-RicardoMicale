import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Servicios/Authentication.service';
import { ConfigService } from 'src/app/Servicios/config.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public authService: AuthenticationService, private movieService: ConfigService) { }

  user: any;
  movies: any;

  ngOnInit(): void {
    this.user = this.authService.currentUserId;
    this.movieService.getAllMovies().subscribe(datos => { //Carga todas las peliculas
      this.movies = datos.results;
      console.log(this.movies)
    });
  }




}
