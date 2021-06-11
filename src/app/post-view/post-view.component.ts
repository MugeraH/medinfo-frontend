import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/postService/posts.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
})
export class PostViewComponent implements OnInit {
  posts;
  constructor(private postService: PostsService) {}

getPosts(){
   this.postService.getAllPosts().subscribe(
     (data) => {
     this.posts = data

     
     },
     (error) => {
       console.log(error);
     }
   );

}

  ngOnInit(): void {
    this.getPosts();
  }
}
