import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrugsService } from '../services/drugsService/drugs.service';

@Component({
  selector: 'app-view-drug',
  templateUrl: './view-drug.component.html',
  styleUrls: ['./view-drug.component.css'],
})
export class ViewDrugComponent implements OnInit {
  id: any;
  drug;
  constructor(
    private drugsService: DrugsService,
    private router: ActivatedRoute
  ) {}

  getDrug() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.drugsService.getDrugDetail(this.id).subscribe((data) => {
      this.drug = data;
    });
  }

  ngOnInit(): void {
    this.getDrug();
  }
}
