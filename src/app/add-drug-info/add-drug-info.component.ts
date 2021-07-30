import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DrugsService } from '../services/drugsService/drugs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-drug-info',
  templateUrl: './add-drug-info.component.html',
  styleUrls: ['./add-drug-info.component.css'],
})
export class AddDrugInfoComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private addDrugService: DrugsService,
    private router: ActivatedRoute,
    private redirect: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      drug_name: new FormControl(''),
      type: new FormControl(''),
      description: new FormControl(''),
      usage_information: new FormControl(''),
      side_effects: new FormControl(''),
      overCounter: new FormControl(false),
      sa_alcohol: new FormControl(''),
      sa_pregnant: new FormControl(''),
      sa_breastFeed: new FormControl(''),
      sa_driving: new FormControl(''),
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    const data = {
      drug_name: this.f.drug_name.value,
      type: this.f.type.value,
      description: this.f.description.value,
      usage_information: this.f.usage_information.value,
      side_effects: this.f.side_effects.value,
      overCounter: this.f.overCounter.value,
      safety_advice_alcohol: this.f.sa_alcohol.value,
      safety_advice_pregnancy: this.f.sa_pregnant.value,
      safety_advice_breast_feeding: this.f.sa_breastFeed.value,
      safety_advice_driving: this.f.sa_driving.value,
    };

    this.addDrugService.addDrug(data).subscribe(
      (response) => {
        console.log(response);

        this.toastr.success('New Drug saved successfully');
        this.redirect.navigate(['/admin']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
