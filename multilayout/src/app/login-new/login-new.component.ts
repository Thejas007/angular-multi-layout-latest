import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.scss']
})
export class LoginNewComponent implements OnInit {
  form = {
    type: 'local',
    username: '',
    password: '',
    rememberMe: false,
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToDashboard(){
    this.router.navigateByUrl('/clr-intelligence-instances');
  }
}
