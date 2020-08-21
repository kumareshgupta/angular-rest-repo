import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-manipulation',
  templateUrl: './students-manipulation.component.html',
  styleUrls: ['./students-manipulation.component.css']
})
export class StudentsManipulationComponent implements OnInit {

  students: Observable<Student[]>;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }
  
  loadData(){
    this.students = this.apiService.getStudentsList();
  }

  updateStudent(studentNumber:number){
    this.router.navigate(['update', studentNumber]);
  }

  getDetails(id:number){
    this.router.navigate(['details', id]);
  }
}
