import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from "../services/products.service";

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.css']
})
export class DetailsProductsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service:ProductsService, private router:Router) { }
  id:number = 0;
  productDescription:any = null;

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getProductDescription(this.id);
  }
  getProductDescription(id:number){
    this.productDescription=this.service.getProductDetails(id);
    console.log(this.productDescription);
  }
  goBack(){
    this.router.navigate([''])
  }
}
