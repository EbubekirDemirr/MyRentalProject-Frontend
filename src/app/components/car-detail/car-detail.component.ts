import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  currentCarDetail: CarDetail;
  carImages: CarImage[] = [];
  baseUrl = 'https://localhost:44347/Uploads/Images/';
  filterText = '';
  rental: Rental;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailWithImagesByCarId(params['carId']);
      }
    });
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getCarDetailByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      console.log(response.data);
      this.carDetails = response.data;
    });
  }
  getCarDetailWithImagesByCarId(carId: number) {
    this.carService.getCarDetailWithImagesByCarId(carId).subscribe((response) => {
      console.log(response.data);
      this.carDetails = response.data;
    });
  }
}
