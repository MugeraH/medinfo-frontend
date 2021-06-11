import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { IllnessService } from '../services/illnessSerivce/illness.service';

@Component({
  selector: 'app-view-illness',
  templateUrl: './view-illness.component.html',
  styleUrls: ['./view-illness.component.css'],
})
export class ViewIllnessComponent implements OnInit {
  id:any;
  illness;
  constructor(
    private illnessService: IllnessService,
    private router: ActivatedRoute
  ) {}

  getIllness(){
  this.id = this.router.snapshot.paramMap.get('id');
    this.illnessService.getIllnessDetail(this.id).subscribe((data) => {
      this.illness = data;
    });

  }

  ngOnInit(): void {
     this.getIllness();
  }
}
