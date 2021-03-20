import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  colors: Color[] = [];
  brands: Brand[] = [];
  cars: Car[] = [];
  dataLoaded = false;
  filterText = "";
  colorFilter: number = 0;
  brandFilter: number =0 ;

  constructor(private carService:CarService, private brandService:BrandService, private colorService:ColorService) {}

  ngOnInit(): void {
    this.getCars();
    this.getBrands();
    this.getColors();
    this.setFilters();
  }

  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response =>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response =>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
      this.dataLoaded = true;
    })
  }

  getColors() {
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
      this.dataLoaded = true;
    })
  }

  setFilters(){
    if(this.brandFilter != 0 && this.colorFilter == 0){
      console.log("Brand seçili ama marka seçili değil");
    }

    if(this.brandFilter == 0 && this.colorFilter != 0){
      console.log("Brand seçili değil ama marka seçili");
    }

    if(this.brandFilter != 0 && this.colorFilter != 0){
      console.log("Her ikisi de seçili");
    }
  }

  getDefaultSelectBrand(){
    if(this.brandFilter == 0){
      return true;
    }else{
      return false;
    }
  }

  getDefaultSelectColor(){
    if(this.colorFilter == 0){
      return true;
    }else{
      return false;
    }
  }
}
