import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cart-card',
  styleUrl: './cart-card.css',
  templateUrl: './cart-card.html',
})
export class CartCard {
  @Input() title: string = 'Название товара';
  @Input() category: string = 'Категория';
  @Input() price: number = 0;
  @Input() desc: string = 'Описание';
  @Input() image: string = 'Изображение';
  @Input() quantity: number = 0;
  @Input() discount: number = 0;

  @Output() delete = new EventEmitter<void>();
  onRemoveClick() {
    this.delete.emit();
  }

}

