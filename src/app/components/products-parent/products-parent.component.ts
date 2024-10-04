import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './../products-list/products-list.component';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iproducts } from '../../Models/iproducts';

@Component({
  selector: 'app-products-parent',
  standalone: true,
  imports: [ProductsListComponent, FormsModule, CommonModule],
  templateUrl: './products-parent.component.html',
  styleUrl: './products-parent.component.scss',
})
export class ProductsParentComponent {
  FilterByPrice: string = '';
  productsInCart: Iproducts[] = [];

  cart(newPrd: Iproducts) {
    let existPrd = this.productsInCart.find((prd) => prd.id == newPrd.id);
    if (existPrd) {
      existPrd.quantity++;
    } else {
      this.productsInCart.push({ ...newPrd, quantity: 1 });
    }
  }
}
