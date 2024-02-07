import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ProductInterface} from "../product.interface";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{

  productAll:ProductInterface[]|undefined
  constructor( private productService: ProductService) {
  }

  ngOnInit() {

    this.productService.getProductAll().subscribe( products => {

      this.productAll = products;

    });


  }

}
