import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/postService/posts.service';
import { AuthService } from '../services/authService/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css'],
})
export class PostUpdateComponent implements OnInit {
  user;
  post_id;
  myForm: FormGroup;
  post;

  noData: boolean = false;
  constructor(
    private postService: PostsService,
    private authService: AuthService,
    private redirect: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.post_id = this.route.snapshot.paramMap.get('id');
    this.myForm = new FormGroup({
      post: new FormControl(''),
    });
    this.getUser();

    this.getPost(this.post_id);
  }

  get f() {
    return this.myForm.controls;
  }
  onSubmit() {
    let id = this.post.id;

    const data = {
      post: this.f.post.value,
      user: this.user.id,
    };

    this.postService.updatePost(id, data).subscribe(
      (response) => {
        console.log(response);

        this.toastr.success('Post update successfully');
        this.redirect.navigate(['post', this.user.id]);
        this.post = '';
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
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getPost(id: any) {
    this.postService.getPostDetail(id).subscribe(
      (data) => {
        this.post = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
