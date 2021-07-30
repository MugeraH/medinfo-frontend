import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/authService/auth.service';
import { ReplyService } from '../services/replyService/reply-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { PostsService } from '../services/postService/posts.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css'],
})
export class ReplyComponent implements OnInit {
  myForm: FormGroup;
  post;
  user;
  replies;
  post_id;
  noData: boolean = false;
  constructor(
    private replyService: ReplyService,
    private redirect: Router,
    private router: ActivatedRoute,
    private authService: AuthService,
    private toastr: ToastrService,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.post_id = this.router.snapshot.paramMap.get('id');
    console.log(this.post_id);

    this.getUser();
    this.getPost(this.post_id);
    this.getPostReplies(this.post_id);

    this.myForm = new FormGroup({
      reply: new FormControl(''),
    });
  }

  get f() {
    return this.myForm.controls;
  }
  onSubmit() {
    const data = {
      reply: this.f.reply.value,
      post: this.post_id,
      user: this.user.id,
    };

    this.replyService.addReply(data).subscribe(
      (response) => {
        console.log(response);

        this.toastr.success('New Reply saved successfully');
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
        // this.toastr.error('Encountered an error please check credentials');
      }
    );
  }
  getPost(id: any) {
    this.postService.getPostDetail(id).subscribe(
      (data) => {
        this.post = data;
        console.log(this.post);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getPostReplies(id: any) {
    this.postService.getPostReply(id).subscribe(
      (data) => {
        this.replies = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete(id) {
    this.replyService.deleteReply(id).subscribe(
      (response) => {
        this.toastr.success('Reply deleted successfully');
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
