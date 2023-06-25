import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { EmployeesComponent } from './employees/employees.component';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddEditEmployeeComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
