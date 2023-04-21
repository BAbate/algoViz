import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface studentProgress{
  index: string,
  fullName: string,
  course: string, 
  progress: string,
  completedCourse:string
}


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit{
  completed :boolean = true;
  panelOpenState : boolean = false;

  students: any[]= [];
  studentProgress : studentProgress[] =[];
  displayedColumns: string[] = ['index', 'fullName', 'course', 'progress','completedCourse'];
  constructor( private http:HttpClient){
  }

 
 async ngOnInit(){
       await this.http.get<any[]>('./../assets/course_progress.json').subscribe(data=> {
         this.studentProgress = data;
       });
       console.log(this.studentProgress);
  }
}
