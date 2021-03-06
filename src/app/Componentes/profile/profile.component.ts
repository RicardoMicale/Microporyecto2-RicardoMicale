import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/Servicios/Authentication.service';
import { ConfigService } from 'src/app/Servicios/config.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router, ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { routes } from 'src/app/app.module';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  item: string;

  constructor(
    public authService: AuthenticationService,
    private movieService: ConfigService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  user: any;
  movies: Observable<any>;
  apiKey = this.movieService.apiKey;
  URL: string;
  searchword: string = '';
  pageNum: number = 1;

  ngOnInit(): void {
    this.user = this.authService.currentUserId;
    this.movieService.getAllMovies().subscribe(datos => { //Carga todas las peliculas
      this.movies = datos.results;
      console.log(this.movies)
    });

    this.route.params.subscribe(params => {
      console.log(params);
      this.item = params['item'];
    });
  }

  cambiarPag() {
    this.movieService.getNewPage(this.pageNum).subscribe(datos => {
      this.movies = datos.results;
    })
  }

  update() {
    this.movieService.search(this.searchword).subscribe(datos => {
      this.movies = datos.results;
    });
  }

  nextPage() {
    this.pageNum++;
  }

  prevPage() {
    this.pageNum--;
  }
}
