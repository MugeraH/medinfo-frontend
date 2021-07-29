import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/authService/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user;
  myForm: FormGroup;
  isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService,
    private router: ActivatedRoute,
    private redirect: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  get f() {
    return this.myForm.controls;
  }



  onSubmit() {
    const data = {
      email: this.f.email.value,
      password: this.f.password.value,
    };

    this.authService.userLogin(data).subscribe(
   
      (response) => {
        console.log(response);
        this.redirect.navigate(['home']);
      
      },
      (error) => {
        this.toastr.error('Login unsuccessfull');
        this.toastr.info('Please check username and password');
      }
    );
  }
}
