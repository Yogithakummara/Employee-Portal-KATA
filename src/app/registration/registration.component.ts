import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegistrationService} from './registration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  title: string = 'Welcome to Employee Portal';
  employeeForm: FormGroup;
  employee: any;
  constructor(private router: Router, public fb: FormBuilder, private registrationService: RegistrationService) {
    this.employeeForm = fb.group({
      materialRegisterFormFirstName: ['', Validators.required],
      materialRegisterFormLastName: ['', Validators.required],
      materialRegisterFormGender: ['', Validators.required],
      materialRegisterFormDateofBirth: ['', Validators.required],
      materialRegisterFormDepartment: ['', Validators.required],
    });
   }

  ngOnInit() {

  }
submit()
{
  this.employee = {};
  this.employee.Firstname = this.employeeForm.get('materialRegisterFormFirstName').value;
  this.employee.Lastname = this.employeeForm.get('materialRegisterFormLastName').value;
  this.employee.Gender = this.employeeForm.get('materialRegisterFormGender').value;
  this.employee.Dateofbirth = this.employeeForm.get('materialRegisterFormDateofBirth').value;
  this.employee.Department = this.employeeForm.get('materialRegisterFormDepartment').value;
  this.registrationService.registerEmployee(this.employee).subscribe(() => {
  });
  this.router.navigate(['/employees']);
}

}
