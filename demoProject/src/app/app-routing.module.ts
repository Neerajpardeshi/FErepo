import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { AddAssessmentScoreComponent } from './add-assessment-score/add-assessment-score.component';
import { AssessmentScoreComponent } from './assessment-score/assessment-score.component';

import { GreetEmpComponent } from './greet-emp/greet-emp.component';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

import { RegisterComponent } from './register/register.component';

import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateScoreComponent } from './update-score/update-score.component';
import { UpdateComponent } from './update/update.component';



const routes: Routes = [

  {
    path:"registerEmp",
    component:RegisterComponent
  },
  
  {
    path:'allemps',
    component:GreetEmpComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'update',
    component:UpdateComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registerscore',
    component:AddAssessmentScoreComponent
  },
  {
    path:'viewallscores',
    component:AssessmentScoreComponent
  },
  {
    path:'updatescore',
    component:UpdateScoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
