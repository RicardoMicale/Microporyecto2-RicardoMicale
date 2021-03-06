import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/Servicios/config.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  constructor(private movieService: ConfigService) { }

  allMovies: Observable<any>;

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.allMovies = this.movieService.getAllMovies();
  }

}
