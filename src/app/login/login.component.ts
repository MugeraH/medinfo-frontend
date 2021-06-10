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

  getUser() {
    this.authService.getUser().subscribe(
      (data) => {
        if (data) {
          this.user = data;
          this.toastr.success('Login successfull');
          console.log(this.user);
          if (this.user.is_admin) {
            this.redirect.navigate(['admin']);
          } else {
            this.redirect.navigate(['home']);
          }
        }
      },
      (error) => {
        console.log(error);
        this.toastr.error('Encountered an error please check credentials');
      }
    );
  }

  onSubmit() {
    const data = {
      email: this.f.email.value,
      password: this.f.password.value,
    };

    this.authService.userLogin(data).subscribe(
      (response) => {
        console.log(response);

        this.isAuthenticated = true;
        // this.getUser();
        this.redirect.navigate(['home']);
      },
      (error) => {
        this.toastr.error('Login unsuccessfull');
        this.toastr.info('Please check username and password');
      }
    );
  }
}
