import { ProductsService } from './../../services/products.service';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { store } from '../../Models/store';
import { ICategory } from '../../Models/icategory';
import { Iproducts } from '../../Models/iproducts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardStyleDirective } from '../../Directives/card-style.directive';
import { CreditCardPipe } from '../../Pipes/credit-card.pipe';
import { ProductsParentComponent } from '../products-parent/products-parent.component';
import { Router } from '@angular/router';
import { ProductsWithApiService } from '../../services/products-with-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [FormsModule, CommonModule, CardStyleDirective, CreditCardPipe],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnDestroy {
  store1: store = new store(
    ['branch1', 'branch2', 'branch3'],
    'Store 1',
    'pic01 .jpj'
  );
  sub!: Subscription;
  /* create event */
  //child to parent
  @Output() newPrdInCart: EventEmitter<Iproducts> =
    new EventEmitter<Iproducts>();
  Date: Date = new Date();
  showorhideimage: boolean = true;
  ClinetName: string = 'lamiaa';
  selectedCategory: number = 0;
  filterProducts: Iproducts[] = [];
  productsList: Iproducts[] = [];
  categories: ICategory[];
  ngOnInit(): void {
    /* this.productsList = this.productservice.getAllProducts();
    this.filterProducts = this.productservice.getAllProducts(); */
    // using API

    this.sub = this.ProductsServiceapi.getAllProducts().subscribe({
      next: (products) => {
        this.productsList = products;
        this.filterProducts = products;
        console.log('pppppppppppppppppppppppppppppppp' + products);
      },
    });
  }
  constructor(
    private productservice: ProductsService,
    private router: Router,
    private ProductsServiceapi: ProductsWithApiService
  ) {
    this.categories = [
      { id: 1, name: 'Tables' },
      { id: 2, name: 'Chairs' },
      { id: 3, name: 'TV Units' },
    ];
    // this.filterProducts=this.productsList
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  toggle() {
    this.showorhideimage = !this.showorhideimage;
  }
  deqreaseQuantity(product: Iproducts) {
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
  }
  filterByCategory() {
    this.filterProducts = this.productsList.filter(
      (product) => product.categoryID == this.selectedCategory
    );
  }
  @Input() set FilterByPriceInChild(value: string) {
    this.filterProducts = this.productservice.perFormFilter(value);
  }

  /*  perFormFilter(filterValue:any):Iproducts[]{
      return this.productsList.filter((prd:Iproducts)=>
      prd.price<=filterValue);
    } */
  addToCart(prd: Iproducts) {
    this.newPrdInCart.emit(prd);
  }
  ShowDetails(productId: number) {
    this.router.navigate(['ProductDetails', productId]);
  }
  /*  editProduct(id: number): void {
    this.router.navigate(['Admin', id]);
  } */

  deleteProduct(id: number): void {
    this.ProductsServiceapi.deleteProduct(id.toString()).subscribe({
      next: () => {
        this.productsList = this.productsList.filter(
          (product) => product.id !== id
        );
      },
      error: (error) => {
        console.error('Error deleting product:', error);
      },
    });
  }
  updateProduct(id: number): void {
    this.router.navigate(['Admin', id]);
  }
}
