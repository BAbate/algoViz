import { AuthGuardService } from './auth-guard.service';
import { ModuleCardComponent } from './module-card/module-card.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './progress/progress.component';



const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignUpComponent },
  {path:'module', component:ModuleCardComponent},
  {path:'progress', component:ProgressComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
