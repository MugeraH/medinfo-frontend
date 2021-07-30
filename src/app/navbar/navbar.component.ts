import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/authService/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user;
  constructor(
    private authService: AuthService,
    private redirect: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.authService.getUser().subscribe(
      (data) => {
        if (data) {
          this.user = data;
        }
      },
      (error) => {
        console.log(error);
        // this.toastr.error('Encountered an error please check credentials');
      }
    );
  }
  logout(): void {
    this.authService.logout().subscribe(() => {
      this.toastr.success('Logout successfull');
      // this.redirect.navigate(['login']);

      // this.isAuthenticated = false;
    });
  }
}
