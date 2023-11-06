import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm!: FormGroup;
  loader: boolean = false;
  errorMsg?: string;

  constructor(
    private fb: FormBuilder,
    private authService: AngularFireAuth,
    private router: Router 

  ) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  loginUser() {
    this.loader = true;
    let values: { email: string; password: string } = { ...this.loginForm.value };
  
    this.authService.signInWithEmailAndPassword(values.email, values.password)
      .then(
        () => {
          this.loader = false;
          this.router.navigate(['/personal-details']);
        },
        (err) => {
          this.loader = false;
          this.errorMsg = err.message; 
        }
      );
  }
  
  

}
