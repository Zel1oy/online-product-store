import { Component } from '@angular/core';
import { UserLoginRequest } from '../requests/user-login-request';
import { AuthUserService } from '../service/auth-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user: UserLoginRequest = new UserLoginRequest();

  constructor(private authService: AuthUserService) { }

  ngOnInit() {
  }

  userLogin() {
    console.log(this.user);
    this.authService.loginUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
  }
}
