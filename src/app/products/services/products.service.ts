import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  private productList = [
    {
      id:1,
      name:'Product 1',
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non augue a tellus bibendum fermentum. Etiam pretium, nulla sed pulvinar ultricies, tellus magna iaculis orci, non bibendum purus arcu in lectus.",
      image:"https://i.ytimg.com/vi/ineZXLbL7s8/maxresdefault.jpg",
      stars:50
    },
    {
      id:2,
      name:'Product 2',
      description:"Praesent maximus ex id nisl porta, ac faucibus felis commodo. Sed sodales in lacus ac sollicitudin. Curabitur dictum ante ut pellentesque tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
      image:"https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg",
      stars:150
    }
  ]

  getProductList(): any[]{
    return this.productList;
  }
  getProductDetails(id: number):{}{
    return this.productList.find(element => element.id === id);
  }
}
