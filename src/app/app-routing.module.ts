import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';
import { FamilyComponent } from './family/family.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

const routes: Routes = [

   {path:"", component: HomeComponent},
   {path:"education", component: EducationComponent},
   {path:"employment", component: EmploymentComponent},
   {path:"family", component: FamilyComponent},
   {path:"personal-details", component: PersonalDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
