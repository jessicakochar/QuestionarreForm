import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  personalDetailsForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.personalDetailsForm = this.formBuilder.group({
      country: ['', Validators.required],
      category: ['', Validators.required],
      fullName: ['', Validators.required],
      date: ['', Validators.required],
      referredBy: [''],
      referenceContact: ['', Validators.pattern('^[0-9]{10}$')],
      dob: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      address: ['', Validators.required],
      contact: ['', Validators.pattern('^[0-9]{10}$')],
      alternateContact: ['', Validators.pattern('^[0-9]{10}$')],
      email: ['', Validators.email],
      relatives: [''],
      ieltsOverall: [''],
      ieltsListening: [''],
      ieltsReading: [''],
      ieltsWriting: [''],
      ieltsSpeaking: ['']
    });
  }

  async onSubmit(): Promise<void> {
    if (this.personalDetailsForm.valid) {
      const formData = this.personalDetailsForm.value;
  
      try {
        const user = await this.afAuth.currentUser;
  
        if (user !== null) {
          const personDetailsMap: any = {
            country: formData.country,
            category: formData.category,
            fullName: formData.fullName,
            date: formData.date,
            referredBy: formData.referredBy,
            referenceContact: formData.referenceContact,
            dob: formData.dob,
            maritalStatus: formData.maritalStatus,
            address: formData.address,
            contact: formData.contact,
            alternateContact: formData.alternateContact,
            email: formData.email,
            relatives: formData.relatives,
            ielts: {
              ieltsOA: formData.ieltsOverall,
              L: formData.ieltsListening,
              R: formData.ieltsReading,
              W: formData.ieltsWriting,
              S: formData.ieltsSpeaking
            }
          };
  
          await this.firestore.collection('person-details').doc(user.uid).set(personDetailsMap);
        } else {
          console.log('User is not authenticated');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      // Handle invalid form
      console.log('Form is invalid');
    }
  }
}  