import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient'; // Ensure you import the Patient model
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class AdmindashComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService,private adminauthService:AdminauthService,private router:Router) {}

  ngOnInit(): void { // Corrected from 'ngOnInt'
    this.getPatients();
  }

  getPatients(): void { // Corrected method name and added return type
    this.patientService.getPatientList().subscribe(data => { // Corrected 'subscript' to 'subscribe'
      this.patients = data;
    }, error => {
      console.error('Error fetching patient data', error); // Added error handling
    });
  }
  delete(id:number){
    this.patientService.delete(id).subscribe(
      () => {
        console.log('Patient deleted successfully!');
        this.getPatients(); // Refresh the list of patients
      },
      (error) => {
        console.error('Error deleting patient:', error);
      }
    );
  }
  logout(){
    this.adminauthService.logout();
    this.router.navigate(['home'])

  }
}
