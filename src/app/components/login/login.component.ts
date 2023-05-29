import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public router: Router, public appService: AppService) {}

  login() {
   const isLoggedIn = this.appService.login();
   if(isLoggedIn) {
    this.router.navigateByUrl('/home')
   } else {
    console.log('Login failed...!')
   }
  }

}
