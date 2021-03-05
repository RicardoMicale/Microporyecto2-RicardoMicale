import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Servicios/Authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  user: any;

  ngOnInit(): void {
    this.user = this.authService.currentUserId;
  }

}
