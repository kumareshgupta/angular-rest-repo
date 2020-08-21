import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  studentNumber: number;
  student:any;

  constructor(private route: ActivatedRoute, private router: Router,private apiService: ApiService) { }

  ngOnInit() {
    this.student = new Student();
    console.log(this.route);
    this.studentNumber = this.route.snapshot.params['studentNumber'];
    this.apiService.getStudent(this.studentNumber)
      .subscribe(data=>{
      console.log(data);
      this.student = data;
    }, error=> console.log(error));
  }
  updateStudent(){
    this.apiService.updateStudent(this.studentNumber, this.student)
      .subscribe(data=> console.log(data), error=> console.log(error));
      this.student = new Student();
      this.gotoList();
  }

  onSubmit(){
    this.updateStudent();
  }

  gotoList(){
    this.router.navigate(['/students']);
  }

}

