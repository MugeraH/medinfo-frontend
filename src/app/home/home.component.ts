import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authService/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user;

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

  viewPost() {
    let id = this.user.id;
    this.redirect.navigate(['/post', id]);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
