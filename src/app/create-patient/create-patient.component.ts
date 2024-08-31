import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent {
  patient: Patient = new Patient();

  constructor(private patientService: PatientService, private router: Router) { }

  savePatient() {
    this.patientService.createPatient(this.patient).subscribe(
      (data) => {
        console.log('Patient saved successfully:', data);
        alert('Patient saved successfully!');
        this.resetForm();
        this.goToPatientList();
      },
      (error) => {
        console.error('Error saving patient:', error);
        alert('Error saving patient. Please try again.');
      }
    );
  }

  onSubmit() {
    this.savePatient();
  }

  resetForm() {
    this.patient = new Patient();
  }

  goToPatientList() {
    this.router.navigate(['/docdash']);
  }
}
