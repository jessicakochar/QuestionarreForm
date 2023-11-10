import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent {
  questionnaireForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    // private modalService: NgbModal,
    ) {
    this.initializeForm();
  }

  initializeForm() {
    this.questionnaireForm = this.fb.group({
      members: this.fb.array([]),
    });
  }

  get members() {
    return (this.questionnaireForm.get('members') as FormArray);
  }

  addMember() {
    this.members.push(
      this.fb.group({
        memberName: [''],
        memberContact: [''],
        relation: [''],
        occupation: [''],
        dob: [''],
        address: [''],
        city: [''],
        state: [''],
        education:[''],
      })
    );
    this.cdr.detectChanges();

  }


  

  removeMember(index: number) {
    this.members.removeAt(index);
  }
  onSubmit(content:any) {
    // this.modalService.open(content, { centered: true });
    console.log(this.questionnaireForm.value);
  }
}
