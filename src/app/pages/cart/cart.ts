import { Component } from '@angular/core';
import { Product, ProductInterface } from '../../services/product';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartCard } from '../../components/cart-card/cart-card';


@Component({
  imports: [CommonModule, FormsModule, CartCard],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  products_in_cart: ProductInterface[] = [];



  constructor(private productService: Product) {
    this.loadProducts();
  }


  loadProducts(): void {
    this.products_in_cart = this.productService.getProductsFromCart();
  }




  removeProductFromCart(id: number): void {
    this.productService.deleteProductFromCart(id);
    this.loadProducts();
  }
}

