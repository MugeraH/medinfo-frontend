import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/postService/posts.service';


@Component({
  selector: 'app-post-reply',
  templateUrl: './post-reply.component.html',
  styleUrls: ['./post-reply.component.css'],
})
export class PostReplyComponent implements OnInit {
  post_replies;
  post;
  post_id;

  constructor(
    private postService: PostsService,

    private redirect: Router,
    private route: ActivatedRoute
  ) {}

  getPost(id) {
    this.postService.getPostDetail(id).subscribe(
      (data) => {
        this.post = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getPostReplies(id) {
    this.postService.getPostReply(id).subscribe(
      (data) => {
        this.post_replies = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.post_id = this.route.snapshot.paramMap.get('id');
    this.getPostReplies(this.post_id);
    this.getPost(this.post_id);
  }
}
