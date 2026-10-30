import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {

  @Input() title: string = 'Название товара';
  @Input() category: string = 'Категория';
  @Input() price: number = 0;
  @Input() desc: string = 'Описание';
  @Input() image: string = 'Изображение';
  @Input() quantity: number = 0;
  @Input() discount: number = 0;

  @Output() cardToCart = new EventEmitter<void>();
  onCartClick() {
    this.cardToCart.emit();
  }

}

