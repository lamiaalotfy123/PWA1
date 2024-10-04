import { ProductsWithApiService } from './../../services/products-with-api.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Iproducts } from '../../Models/iproducts';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss',
})
export class ProductsDetailsComponent implements OnInit {
  productId: number = 0;
  currentProduct: Iproducts | undefined;
  allidsList: number[] = [];
  currentIndex: number = 0;
  productsAfterSearch: Iproducts[] = [];

  constructor(
    private activatedroute: ActivatedRoute,
    private productservice: ProductsService,
    private router: Router,
    private location: Location,
    private ProductsWithApiService: ProductsWithApiService
  ) {}

  ngOnInit(): void {
    /* this.productId=Number(this.activatedroute.snapshot.paramMap.get('id'))
  let foundProduct=this.productservice.getPrdById(this.productId)
  if(foundProduct){
    this.currentProduct=foundProduct
  }else{
    this.router.navigate(['/Home'])
    // this.router.navigate(['/not-found'])
    // this.router.navigate(['/**']
    alert('product not found')
  } */
    /*  this.activatedroute.paramMap.subscribe((param)=>{
      this.productId=Number(param.get('id'))||0;
      let foundProduct=this.productservice.getPrdById(this.productId)

      if(foundProduct){
        this.currentProduct=foundProduct;
        // console.log(foundProduct);

      }
       else{
         // this.router.navigate(['/**']
        this.router.navigate(['/Home'])
        alert('product not found')
      }
    }); */
    this.activatedroute.paramMap.subscribe((param) => {
      this.productId = Number(param.get('id')) || 0;
      this.ProductsWithApiService.GetPrdId(this.productId.toString()).subscribe(
        {
          next: (prd) => {
            if (prd) {
              this.currentProduct = prd;
            } else {
              this.router.navigate(['/Home']);
              alert('product not found');
            }
          },
        }
      );
    });
    // this.allidsList = this.ProductsWithApiService.GetPrdId();
    this.allidsList = this.productservice.getAllPrdIds();
  }
  prevFun() {
    this.currentIndex = this.allidsList.indexOf(this.productId);
    this.router.navigate([
      'ProductDetails',
      this.allidsList[--this.currentIndex],
    ]);
  }
  nextFun() {
    this.currentIndex = this.allidsList.indexOf(this.productId);
    this.router.navigate([
      'ProductDetails',
      this.allidsList[++this.currentIndex],
    ]);
  }
  goBack() {
    this.location.back(); //=>history
    // this.router.navigate(['/Products'])
  }
  searchMaterial(mat: string) {
    this.ProductsWithApiService.searchMaterial(mat).subscribe({
      next: (products) => {
        this.productsAfterSearch = products;
      },
    });
  }
}
