
import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Route, Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']  // Corrected to 'styleUrls'
})
export class DocdashComponent implements OnInit {  // Implemented OnInit for lifecycle hook

  patients: Patient[] = [];

  constructor(private patientService: PatientService,private router:Router,private docauth:DocauthService) {}

  // Corrected method name to ngOnInit()
  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
    });
  }
  update(id:number){

    this.router.navigate(['update-patient/',id])

  }
  // delete(id:number){
  //  this.patientService.delete(id).subscribe(data=>{
  //   console.log('Patient deleted successfully!')
  //   this.getPatients() // Corrected method name to getPatients() for refreshing the list after deletion.  
   
  //  })
  // }
  delete(id: number): void {
    const confirmDeletion = window.confirm('Are you sure you want to delete this patient?');
  
    if (confirmDeletion) {
      this.patientService.delete(id).subscribe(data => {
        console.log('Patient deleted successfully!');
        this.getPatients(); // Refresh the list after deletion.
      });
    } else {
      console.log('Patient deletion cancelled.');
    }
  }
  view(id:number){
    this.router.navigate([`view-patient`,id])

  }
  logout(){
    this.docauth.logout();
    this.router.navigate(['home']);
    
  }
}
