import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/postService/posts.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  myForm: FormGroup;
  post;
  posts;
  noData: boolean = false;
  constructor(
    private postService: PostsService,

    private redirect: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      post: new FormControl(''),
    });
  }

  get f() {
    return this.myForm.controls;
  }
  onSubmit() {
    const data = {
       post: this.f.post.value,
  
    };

    this.postService.addPost(data).subscribe(
      (response) => {
        console.log(response);

        this.toastr.success('New Post saved successfully');
      
      },
      (error) => {
        console.log(error);
      }
    );
  }
  viewReply(){}

  // getUserPosts(id: any) {
  //      this.postService.addPost(data).subscribe(
  //        (response) => {
  //          console.log(response);

  //          this.toastr.success('New Post saved successfully');
  //        },
  //        (error) => {
  //          console.log(error);
  //        }
  //      );
  // }

  delete(){
    
  }
}
