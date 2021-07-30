import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/postService/posts.service';
import { AuthService } from '../services/authService/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  user;
  user_id;
  myForm: FormGroup;
  post;
  posts;
  noData: boolean = false;
  constructor(
    private postService: PostsService,
    private authService: AuthService,
    private redirect: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user_id = this.route.snapshot.paramMap.get('id');
    this.myForm = new FormGroup({
      post: new FormControl(''),
    });
    this.getUser();

    this.getUserPosts(this.user_id);
    console.log(this.posts);
  }

  get f() {
    return this.myForm.controls;
  }
  onSubmit() {
    console.log(this.user);

    const data = {
      post: this.f.post.value,
      user: this.user.id,
    };

    this.postService.addPost(data).subscribe(
      (response) => {
        console.log(response);

        this.toastr.success('New Post saved successfully');
        this.redirect.navigate(['home']);
        this.post = '';
      },
      (error) => {
        console.log(error);
      }
    );
  }
  viewReply(id: any) {
    this.redirect.navigate(['/post_reply', id]);
  }

  getUserPosts(id: any) {
    this.postService.getUserPost(id).subscribe(
      (data) => {
        this.posts = data;
        console.log(this.posts);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete() {}

  getUser() {
    this.authService.getUser().subscribe(
      (data) => {
        if (data) {
          this.user = data;

          console.log(this.user);
        }
      },
      (error) => {
        console.log(error);
        this.toastr.error('Encountered an error ');
      }
    );
  }
}
