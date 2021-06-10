import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DrugsService } from '../services/drugsService/drugs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-drug',
  templateUrl: './search-drug.component.html',
  styleUrls: ['./search-drug.component.css'],
})
export class SearchDrugComponent implements OnInit {
  search_term;
  myForm: FormGroup;
  Drugs;
  noData: boolean = false;
  constructor(
    private drugsService: DrugsService,
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
    this.drugsService.getSearchDrugs(this.search_term).subscribe(
      (data) => {
        console.log(data);
        if (data.length === 0) {
          this.noData = true;
        }
        this.Drugs = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  viewDrug(id: any) {
    this.redirect.navigate(['/viewDrug', id]);
  }
}
