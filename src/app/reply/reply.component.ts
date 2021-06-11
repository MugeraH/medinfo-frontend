import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplyService } from '../services/replyService/reply-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css'],
})
export class ReplyComponent implements OnInit {
  myForm: FormGroup;
  post;
  posts;
  noData: boolean = false;
  constructor(
    private replyService: ReplyService,
    private redirect: Router,
     private router: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      reply: new FormControl(''),
    });
  }

  get f() {
    return this.myForm.controls;
  }
  onSubmit() {
    const data = {
      post: this.f.post.value,
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
  getPost(id:any) {
    id = this.router.snapshot.paramMap.get('id');
  }
}
