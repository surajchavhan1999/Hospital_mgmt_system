import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';  // Verify path
import { Appointment } from '../appointment';  // Verify path

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe(
      (data: Appointment[]) => {
        this.appointments = data;
      },
      (error) => {
        console.error('Error fetching appointments:', error);
        // Optionally provide user feedback here
      }
    );
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.appointmentService.deleteAppointment(id).subscribe(
        () => {
          console.log('Appointment deleted successfully!');
          this.getAppointments(); // Refresh the list of appointments
        },
        (error) => {
          console.error('Error deleting appointment:', error);
          // Optionally provide user feedback here
        }
      );
    } else {
      // Optional: You can remove this line if not needed
      console.log('Deletion canceled');
    }
  }
}
