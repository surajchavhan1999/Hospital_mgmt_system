import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine'; // Ensure the Medicine model is imported
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css'], // Ensure this is 'styleUrls' (plural)
})
export class MedicinelistComponent implements OnInit {
  medicines: Medicine[] = []; // Correct the variable type to Medicine[]

  constructor(
    private medicineService: MedicineService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMedicines(); // Call the method on component initialization
  }

  getMedicines(): void {
    this.medicineService.getMedicines().subscribe(
      (data: Medicine[]) => {
        // Specify the type for 'data'
        this.medicines = data;
      },
      (error: any) => {
        // Specify the type for 'error'
        console.error('Error fetching medicines', error);
      }
    );
  }
  update(id: number) {
    this.router.navigate([`update-medicine`, id]);
  }
  delete(id:number){
    this.medicineService.delete(id).subscribe(data=>{
      console.log(data);
      this.getMedicines(); // Refresh the list of medicines
    })
  }
}
