import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

const localUrl = 'assets/data/books.json';
const baseUrl = 'https://jsonplaceholder.typicode.com';
const remoteUrl = 'http://localhost:8081/rest/students';

@Injectable()
export class ApiService {
    
  constructor(private httpClient: HttpClient) { }

  getBooks(){
    return this.httpClient.get(localUrl);
  }

  getUsers(){
    return this.httpClient.get(baseUrl+ '/users');
  }

  getStudents(){
    return this.httpClient.get(remoteUrl);
  }
  getStudent(studentNumber: number){
    return this.httpClient.get(remoteUrl +"/" + studentNumber);
  }
  
  addStudent(student: Student ){
    return this.httpClient.post(remoteUrl,student);

  }
  updateStudent(studentNumber:number, value:Student): Observable<Object>{
    return this.httpClient.put(remoteUrl+'/'+studentNumber, value);
  }

  getStudentsList():Observable<any> {
    return this.httpClient.get(remoteUrl);
  }
}
