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
      description: new FormControl(''),
      usage_information: new FormControl(''),
      side_effects: new FormControl(''),
      overCounter: new FormControl(''),
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    const data = {
      drug_name: this.f.drug_name.value,
      description: this.f.description.value,
      usage_information: this.f.usage_information.value,
      side_effects: this.f.side_effects.value,
      overCounter: this.f.overCounter.value,
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
