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
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    const data = {
      username: this.f.username.value,
      password: this.f.password.value,
    };

    this.authService.userLogin(data).subscribe(
      (response) => {
        // this.toastr.success('Login successfull');
        this.redirect.navigate(['home']);
        this.isAuthenticated = true;
        console.log(response);
      },
      (error) => {
        this.toastr.error('Login unsuccessfull');
        this.toastr.info('Please check username and password');
      }
    );
  }
}
