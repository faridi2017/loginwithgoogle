import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
login_info;
  constructor(private router: Router) { 
this.login_info = JSON.parse(sessionStorage.getItem('login_info'));
console.log('login info',this.login_info);

  }

  ngOnInit() {
  }
  goto_one_module(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
