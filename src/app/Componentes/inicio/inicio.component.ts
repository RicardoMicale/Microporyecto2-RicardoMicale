import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/Servicios/config.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  apiKey: string = 'b52712245cbce606c4f237cbfa3a5342';
  URL = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=1`;
  item: string;

  constructor(private movieService: ConfigService, private route: ActivatedRoute) { }

  movies: any;

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(datos => { //Carga todas las peliculas
      this.movies = datos.results;
      console.log(this.movies)
    });

    this.route.params.subscribe(params => {
      console.log(params);
      this.item = params['item'];
    });
  }

}
