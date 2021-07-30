import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/userService/user.service';
import { AuthService } from '../services/authService/auth.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  myForm: FormGroup;
  user;
  constructor(
    private userService: UserService,
    private router: ActivatedRoute,
    private redirect: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.getUser();

    this.myForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      profile_picture: new FormControl(''),
      bio: new FormControl(''),
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    const data = {
      ...this.user,
      firstname: this.f.firstname.value,
      lastname: this.f.lastname.value,
      profile_picture: this.f.profile_picture.value,
      bio: this.f.bio.value,
    };
    let id = this.user.id;
    console.log(data);

    this.userService.updateUser(id, data).subscribe(
      (response) => {
        console.log(response);

        this.toastr.success('User profile successfully updates');
        this.redirect.navigate(['profile']);
        // if (this.user.is_admin) {
        //   this.redirect.navigate(['admin']);
        // } else {
        //   this.redirect.navigate(['home']);
        // }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUser() {
    this.authService.getUser().subscribe(
      (data) => {
        if (data) {
          this.user = data;
          // console.log(this.user);
        }
      },
      (error) => {
        console.log(error);
        this.toastr.error('Encountered an error please check credentials');
      }
    );
  }
}
