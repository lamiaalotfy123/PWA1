import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproducts } from '../../Models/iproducts';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProductService } from '../../services/add-product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent implements OnInit {
  isEditing: boolean = false;

  product: Iproducts = {} as Iproducts;
  id: string = '';
  constructor(
    private Service: AddProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
      if (this.id) {
        this.isEditing = true;
        this.Service.GetPrdId(this.id).subscribe((productparam) => {
          this.product = productparam;
        });
      }
    });
  }
  

  addNewProduct() {
    if (this.product.id) {
      this.Service.updateProduct(this.product).subscribe(() => {
        this.isEditing=false
        this.router.navigate(['/Products']);
      });
    } else {
      this.Service.addProduct(this.product).subscribe(() => {
        this.router.navigate(['/Products']);
      });
    }

}}
