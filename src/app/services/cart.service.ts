import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { RentalService } from './rental.service';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CartService{

  constructor() { }

  addToCart(car:Car){
    let item = CartItems.find(c=>c.car.carId===car.carId);
    if (item) {
      item.quantity +-1;
    }else{
      let cartItem = new CartItem();
      cartItem.car=car;
      cartItem.quantity=1;
      CartItems.push(cartItem)
    }
  }
  removeFromCart(car: Car) {
    let itemIndex: number = CartItems.findIndex(c => c.car.carId === car.carId);
    if (itemIndex !== -1) {
      CartItems.splice(itemIndex, 1);
    }
  }

  list():CartItem[]{
    return CartItems;
  }


}