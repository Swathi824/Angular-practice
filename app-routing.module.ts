import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { SubmitComponent } from './components/submit/submit.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'login',component:LoginComponent},
  {path: 'student-details',component:StudentDetailsComponent},
  {path: 'submit',component:SubmitComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
