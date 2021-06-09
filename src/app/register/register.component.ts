import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { AuthService } from '../services/auth-serivce/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    // private authService: AuthService,
    private router: ActivatedRoute,
    private redirect: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    const data = {
      username: this.f.username.value,
      email: this.f.email.value,
      password: this.f.password.value,
    };

    // this.authService.userRegister(data).subscribe(
    //   (response) => {
    //     this.toastr.success('Registration successfull');
    //     this.redirect.navigate(['login']);
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.toastr.error('Registration unsuccessfull');
    //     this.toastr.info(error);
    //   }
    // );
  }
}
