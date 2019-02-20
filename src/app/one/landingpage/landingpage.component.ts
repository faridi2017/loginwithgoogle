import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';

import { User } from 'src/app/modal/user';
import { ApiserviceService } from 'src/app/apiservice/apiservice.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  username: string;
  password: string;
  user_info: User;
  constructor(private router: Router,private socialAuthService: AuthService,private loginService: ApiserviceService) { 
    this.user_info = new User;
  }

  ngOnInit() {
  }
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        //console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
        sessionStorage.setItem('login_info', JSON.stringify(userData));

        this.router.navigate(["home"]);   
      }
    );
  }
  login() : void {
    this.loginService.login(this.user_info).subscribe((res: any)=> {
                  
      console.log('loginurl response', res);
   
     },error => {
      console.error("Error in login api!");
      alert('wrong user name or password');
      return throwError(error);  // Angular 6/RxJS 6
    });  

    }
  goto_two_module(){
    this.router.navigate(['home']);
  }
}
