// education.component.ts
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  questionnaireForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
    ) {
    this.initializeForm();
  }

  initializeForm() {
    this.questionnaireForm = this.fb.group({
      educations: this.fb.array([]),
    });
  }

  get educations() {
    return (this.questionnaireForm.get('educations') as FormArray);
  }

  addEducation() {
    this.educations.push(
      this.fb.group({
        courseName: [''],
        universityName: [''],
        passingYear: [''],
        percentageGPA: [''],
      })
    );
    this.cdr.detectChanges();

  }
  

  removeEducation(index: number) {
    this.educations.removeAt(index);
  }
  onSubmit() {
    console.log(this.questionnaireForm.value);
  }
}
