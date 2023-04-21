import { AuthServiceService } from './auth-service.service';
import { ModuleCard } from './module-card/module-card.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PreAssessmentComponent } from './pre-assessment/pre-assessment.component';
import { PostAssesmentComponent } from './post-assesment/post-assesment.component';
import { DeveloperToolsComponent } from './developer-tools/developer-tools.component';
import { ProgressComponent } from './progress/progress.component';
import { MatTableModule } from '@angular/material/table' 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    PreAssessmentComponent,
    PostAssesmentComponent,
    DeveloperToolsComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    ModuleCard,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],

  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
