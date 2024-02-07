import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {ProductInterface} from "../product.interface";

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit{

  productSelected:ProductInterface|undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit() {


    const productId: number|any = this.route.snapshot.paramMap.get('id');

    this.productService.getProductOne(productId).subscribe(productOne=> {

      this.productSelected = productOne;

    });





  }


}
