import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Servicios/Authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  @Output() sendFormEvent = new EventEmitter();
  @Input() isRegister: boolean = false;

  constructor(private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router) { }


  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.authForm = this.fb.group({
      displayName: '',
      email: '',
      password: '',
    });
  }

  async googleLogin(){
    const user = await this.authService.loginGoogle();
    if (user) {
      this.router.navigate(['/profile']);
    }
  }

  async onSubmit(){
    const formValues = {
      displayName: this.authForm.get('displayName').value,
      email: this.authForm.get('email').value,
      password: this.authForm.get('password').value,
    };
    this.sendFormEvent.emit(formValues);
  }
}
