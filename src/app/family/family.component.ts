import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent {
  questionnaireForm!: FormGroup;
  modalReference: any;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) {
    this.initializeForm();
  }

  initializeForm() {
    this.questionnaireForm = this.fb.group({
      members: this.fb.array([]),
    });
  }

  get members() {
    return this.questionnaireForm.get('members') as FormArray;
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
        education: [''],
      })
    );
  }

  removeMember(index: number) {
    this.members.removeAt(index);
  }

  openModal(modalRef: any) {
    this.modalReference = this.modalService.open(modalRef, { size: "md", centered: false });
    // this.initializeForm();
  }

  onSubmit() {
    // Open the modal on form submission
    // this.openModal(content);
    console.log(this.questionnaireForm.value);
  }
}
