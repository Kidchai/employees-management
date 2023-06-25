import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {

  id: number | 0 = 0;
  employee: any = {firstName: '', lastName: '', email: ''};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.getEmployee(this.id);
    }
  }

  getEmployee(id: number): void {
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
  }
  
  saveEmployee() {
    if (this.id) {
      this.updateEmployee();
    } else {
      this.createEmployee();
    }
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(() => this.router.navigate(['/employees']));
  }

  createEmployee(): void {
    this.employeeService.createEmployee(this.employee)
      .subscribe(() => this.router.navigate(['/employees']));
  }

  onSubmit() {
    this.saveEmployee();
  }
}

