import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/authService/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  user;
  myForm: FormGroup;
  isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService,
    private router: ActivatedRoute,
    private redirect: Router,
    private toastr: ToastrService
  ) {}

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

  ngOnInit(): void {
     this.getUser();
  }
}
