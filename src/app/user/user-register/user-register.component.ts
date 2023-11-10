import { Component } from '@angular/core';
import { UserRegistrationRequest } from '../requests/user-registration-request';
import { AuthUserService } from '../service/auth-user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  user: UserRegistrationRequest = new UserRegistrationRequest();

  constructor(private authService: AuthUserService) { }

  ngOnInit() {
  }

  userRegister() {
    console.log(this.user);
    this.authService.registerUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
  }
}
