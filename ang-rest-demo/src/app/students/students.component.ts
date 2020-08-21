import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  this.apiService.getStudents().subscribe((data)=>{
    this.students=data;
  });  
  }

}
