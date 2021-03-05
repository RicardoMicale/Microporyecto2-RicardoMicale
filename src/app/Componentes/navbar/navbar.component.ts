import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Servicios/Authentication.service';
import firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: firebase.User = null;
  constructor(public authService: AuthenticationService) {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user;
    })
  }

  ngOnInit(): void {
  }

}
