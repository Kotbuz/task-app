import { Component } from '@angular/core';
import { Product, ProductInterface } from '../../services/product';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Card } from '../../components/card/card';

@Component({
  imports: [CommonModule, FormsModule, Card],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  searchQuery: string = ''

  products: ProductInterface[] = [];
  constructor(private productService: Product) {
    this.loadProducts();
  }
  get filteredProducts(): ProductInterface[] {
    return this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  loadProducts(): void {
    this.products = this.productService.getProducts();
  }
  addNewProduct(): void {

  }
  // addNewTask(): void {
  //   if (this.newTaskTitle.trim()) {
  //     this.taskService.addTask(this.newTaskTitle);
  //     this.loadTasks();
  //     this.newTaskTitle = ''
  //   }
  // }
  removeProduct(id: number): void {
    this.productService.deleteProduct(id);
    this.loadProducts();
  }
  addProductToCart(id: number): void {
    this.productService.addProductToCart(id);
  }
}
