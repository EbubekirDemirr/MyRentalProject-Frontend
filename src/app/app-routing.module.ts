import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/register/register.component';




const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"carDetails",component:CarDetailComponent},
  {path:"carDetails/car/:carId",component:CarDetailComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/color/:colorId/brand/:brandId",component:CarComponent},
  {path:"carDetails/rental/rentalId",component:CarComponent},
  {path:"cars/payment/:carId",component:PaymentComponent},
  {path:"cars/carAdd",component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"cars/colorAdd",component:ColorAddComponent},
  {path:"cars/brandAdd",component:BrandAddComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
