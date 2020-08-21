import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BooksComponent } from './books/books.component';
import { StudentsComponent } from  './students/students.component';
import { AddstudentComponent } from  './addstudent/addstudent.component';
import { StudentsManipulationComponent } from './students-manipulation/students-manipulation.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path:'books', component: BooksComponent},
  {path:'users', component: UsersComponent},
  {path:'students', component: StudentsComponent},
  {path:'addstudent', component: AddstudentComponent},
  {path:'dashboard', component: StudentsManipulationComponent},
  {path:'update/:studentNumber', component:UpdateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
