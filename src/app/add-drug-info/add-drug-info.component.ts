import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IllnessService } from '../services/illnessSerivce/illness.service';
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
    private addIllnessService: IllnessService,
    private router: ActivatedRoute,
    private redirect: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.myForm = new FormGroup({
      business_name: new FormControl(''),
      business_email: new FormControl(''),
      about_business: new FormControl(''),
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    const data = {
      business_name: this.f.business_name.value,
      business_email: this.f.business_email.value,
      about_business: this.f.about_business.value,
      neighbourhood: this.router.snapshot.paramMap.get('id'),
    };

    // this.addIllnessService.addIllness(data).subscribe(
    //   (response) => {
    //     console.log(response);

    //     this.toastr.success('New Business saved successfully');
    //     this.redirect.navigate([
    //       '/hood',
    //       this.router.snapshot.paramMap.get('id'),
    //     ]);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
