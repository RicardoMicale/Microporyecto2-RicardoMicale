import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/Servicios/config.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  id: number = 0;
  movies: any;
  movie: any;
  movieCount: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moviesService: ConfigService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
    })
    this.details();
  }

  details() {
    this.moviesService.getDetails(this.id).subscribe(datos => {
      console.log(datos);
      this.movie = datos;

    });
  }

  goToFav() {
    this.router.navigate['favoritos']
  }
}
