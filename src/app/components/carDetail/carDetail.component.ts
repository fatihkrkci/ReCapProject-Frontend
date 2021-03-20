import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Image } from 'src/app/models/image';
import { CarService } from 'src/app/services/car.service';
import { ImageService } from 'src/app/services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-image',
  templateUrl: './carDetail.component.html',
  styleUrls: ['./carDetail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:Car[] = [];
  image:Image[] = [];
  dataLoaded = false;
  imageLoaded = false;
  imageBasePath = environment.baseUrl;

  constructor(
    private carService : CarService,
    private imageService : ImageService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["CarId"]){
        this.getCarDetail(params["CarId"])
        this.getCarImage(params["CarId"])
      } else{

      }
    })
  }

  getCarDetail(carId:number){
    this.carService.getCarByCarId(carId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarImage(carId:number){
    this.imageService.getImagesByCarId(carId).subscribe(response => {
      this.image = response.data
      this.imageLoaded = true
    })
  }

}
