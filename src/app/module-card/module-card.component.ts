import { PreAssessmentComponent } from './../pre-assessment/pre-assessment.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-module-card',
  templateUrl: './module-card.component.html',
  styleUrls: ['./module-card.component.css']
})
export class ModuleCardComponent implements OnInit {
     completed :boolean = true;
     panelOpenState : boolean = false;

     users: any[]= [];

     constructor( private http:HttpClient, private sanitizer: DomSanitizer){
     }

     sanitizeUrl(url: string) {
      return this.sanitizer.bypassSecurityTrustUrl(url);
    }

    
     ngOnInit(){
          this.http.get<any[]>('./../assets/questions.json').subscribe(data=> {
            this.users = data;
            console.log(data[0].URL[0].difficulty);
          });
     }
}
