import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/authService/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user;
  constructor(
    private toastr: ToastrService,
    private authService: AuthService
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
        this.toastr.error('Encountered an error please check credentials');
      }
    );
  }
}
