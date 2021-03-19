import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/carDetail/carDetail.component';
import { CategoryComponent } from './components/category/category.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"categories/Cars", component:CarComponent},
  {path:"categories/Cars/Brands/:BrandId", component:CarComponent},
  {path:"categories/Cars/Colors/:ColorId", component:CarComponent},
  {path:"categories/Car/Detail/:CarId", component:CarDetailComponent},
  {path:"categories/Brands", component:BrandComponent},
  {path:"categories/Colors", component:ColorComponent},
  {path:"categories/Customers", component:CustomerComponent},
  {path:"categories/Rentals", component:RentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
