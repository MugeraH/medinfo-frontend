import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IllnessService } from '../services/illnessSerivce/illness.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-illness-info',
  templateUrl: './add-illness-info.component.html',
  styleUrls: ['./add-illness-info.component.css'],
})
export class AddIllnessInfoComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private addIllnessService: IllnessService,
    private router: ActivatedRoute,
    private redirect: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.myForm = new FormGroup({
      illnessname: new FormControl(''),
      description: new FormControl(''),
      symptoms: new FormControl(''),
      recommendation: new FormControl(''),
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    const data = {
      illnessname: this.f.illnessname.value,
      description: this.f.description.value,
      symptoms: this.f.symptoms.value,
      recommendation: this.f.recommendation.value,
    };

    this.addIllnessService.addIllness(data).subscribe(
      (response) => {
        console.log(response);

        this.toastr.success('New Illness Infromation saved successfully');
        this.redirect.navigate(['/admin']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
