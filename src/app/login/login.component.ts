import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router: Router;

  constructor(routerC: Router, private client: CommonServiceService) {
    this.router = routerC;
  }

  userName: string = '';
  passWord: string = '';
  ngOnInit(): void {

  }
  verifyLogin() {
    console.log('userName', this.userName);
    console.log('pwd', this.passWord);
    this.client.login(this.userName, this.passWord).subscribe(res => {
      if (res) {
        this.router.navigate(['dashboard', this.userName]);
      } else {
        alert('Incorrect username or password');
      }
    })
    // if (this.userName === 'akshay' && this.passWord === '12345678') {
    //   console.log('loggedin');
    //   this.router.navigate(['dashboard', this.userName]);
    // }

  }
  checkData() {
    if (!!this.userName && !!this.passWord) {
      return false;
    } else {
      return true;
    }
  }

}
