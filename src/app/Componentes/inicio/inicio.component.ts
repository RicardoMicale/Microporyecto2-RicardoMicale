import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/Servicios/config.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  apiKey: string = 'b52712245cbce606c4f237cbfa3a5342';
  URL = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=1`;

  constructor(private movieService: ConfigService) { }

  movies: any;

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(datos => { //Carga todas las peliculas
      this.movies = datos.results;
      console.log(this.movies)
    });
  }

}
