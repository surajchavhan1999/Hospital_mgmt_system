import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Route, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {
  appointment: Appointment = new Appointment();

  constructor(private appointmentService: AppointmentService, private router:Router) {}

  saveAppointment() {
    this.appointmentService.createAppointment(this.appointment).subscribe({
      next: (data) => {
        console.log('Appointment saved successfully:', data);
        this.goToAppointment();
      },
      error: (err) => {
        console.error('Error occurred while saving appointment:', err);
        // Optionally display user-friendly message or take other actions
        alert('Failed to save appointment. Please try again.');
      }
    });
  }
  

  onSubmit() {
    if (this.appointment.name && this.appointment.age && this.appointment.symptoms && this.appointment.number) {
      this.saveAppointment();
    } else {
      alert('Please fill in all fields.');
    }
  }

  goToAppointment() {
    this.router.navigate([`/appointmentlist`]);
  }
}
