import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent {
    medicine: Medicine = new Medicine();

    constructor(private medicineService: MedicineService, private router: Router) {}

    saveMedicine() {
        this.medicineService.createMedicine(this.medicine).subscribe(
            data => {
                console.log(this.medicine);
                this.goToMedicine();
            },
            error => console.log(error)
        );
    }

    onSubmit() {
        this.saveMedicine();
    }

    goToMedicine() {
        this.router.navigate(['/view-medicine']);
    }
}
