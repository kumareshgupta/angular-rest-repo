import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  student:Student;// = new Student();
  
  submitted = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  submitForm(){
    this.submitted=true;
    this.apiService.addStudent(this.student).subscribe(data => console.log(data));
  }

}
