import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IllnessService } from '../services/illnessSerivce/illness.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  search_term;
  myForm: FormGroup;
  illnesses;
  noData: boolean = false;
  constructor(
    private addIllnessService: IllnessService,
    private router: ActivatedRoute,
    private redirect: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      search_term: new FormControl(''),
    });
  }

  get f() {
    return this.myForm.controls;
  }
  onSubmit() {
    this.search_term = this.f.search_term.value;
    if (!this.search_term) {
      this.toastr.info('Please enter search term');
      return;
    }
    this.addIllnessService.getSearchIllness(this.search_term).subscribe(
      (data) => {
        console.log(data);
        if (data.length === 0) {
          this.noData = true;
        }
        this.illnesses = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  viewIllness(id: any) {
           this.redirect.navigate(['/hood', id]);
  }
}
