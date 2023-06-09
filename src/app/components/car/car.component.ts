import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails: CarDetail[];
  brands: Brand[] = [];
  colors: Color[] = [];
  carImages:CarImage[]=[];
  filterText = '';
  baseUrl = 'https://localhost:44347/Uploads/Images/';
  imageOfPath:string;
  brandFilter: number = 0;
  colorFilter: number = 0;
  cardetailFilter = '';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private colorService: ColorService,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId'] && params['brandId']) {
        console.log("sadfasdasdasdasdasd");
        this.getCarByBrandIdAndColorId(params['colorId'], params['brandId']);
      } else if (params['brandId']) {
        this.getCarByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCars();
      }
      this.getBrands(); 
      this.getColors();
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      console.log(response.data);
      this.carDetails = response.data;
    });
  }
  
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }


  getCarByBrandId(brandId: number) {
    this.brandService.getCarByBrandId(brandId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getCarByBrandIdAndColorId(colorId: number, brandId: number) {
    console.log("sdfsdfdsfsdf");
    this.carService
      .getCarByBrandIdAndColorId(colorId, brandId)
      .subscribe((response) => {
        this.carDetails = response.data;
      });
  }

  image(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      const imagePath=response.data[0].imagePath
      this.imageOfPath= this.baseUrl+imagePath;
      console.log(this.imageOfPath)
    })
    return this.imageOfPath
    
  }
}
