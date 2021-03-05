import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Servicios/Authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  async loginCallBack(formValues: { email: string, password: string}) {
    try{
      if(formValues) {
        const user = await this.authService.loginEmail(
          formValues.email,
          formValues.password
        );
        if(user) {
          //cambiar
          this.router.navigate(['./posts'])
        }
      }

    } catch(err) {
      console.log(err);
    }
  }
}
