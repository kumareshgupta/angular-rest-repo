import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { UsersComponent } from './users/users.component';
import { BooksComponent } from './books/books.component';
import { StudentsComponent } from './students/students.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentsManipulationComponent } from './students-manipulation/students-manipulation.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BooksComponent,
    StudentsComponent,
    AddstudentComponent,
    UpdateStudentComponent,
    StudentsManipulationComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
