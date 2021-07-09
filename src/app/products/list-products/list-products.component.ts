import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../services/products.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private service:ProductsService, private router: Router) { }

  productList = null;

  ngOnInit(): void {
    this.productList = this.service.getProductList();
  }
  goToProductDetails(id:number): void{
    this.router.navigate(['/product/'+id]);
  }

}
