import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent {
  questionnaireForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
    ) {
    this.initializeForm();
  }

  initializeForm() {
    this.questionnaireForm = this.fb.group({
      employments: this.fb.array([]),
    });
  }

  get employments() {
    return (this.questionnaireForm.get('employments') as FormArray);
  }

  addEmployment() {
    this.employments.push(
      this.fb.group({
        startDate: [''],
        endDate: [''],
        company: [''],
        position: [''],
      })
    );
    this.cdr.detectChanges();

  }
  

  removeEmployment(index: number) {
    this.employments.removeAt(index);
  }
  onSubmit() {
    console.log(this.questionnaireForm.value);
  }
}


