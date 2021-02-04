import { Component, OnInit } from '@angular/core';
import {ProductService, Product} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import "rxjs/Rx";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pruduct',
  templateUrl: './pruduct.component.html',
  styleUrls: ['./pruduct.component.scss']
})
export class PruductComponent implements OnInit {

  public products: Array<Product>;

  public keyword: string;

  public titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService, private activateInfo: ActivatedRoute) {
    debugger
    this.titleFilter.valueChanges.debounceTime(500)
      .subscribe(
        value => this.keyword = value
      );
    debugger;
    activateInfo.queryParams.subscribe(queryParams => {
      debugger
      this.keyword = queryParams.title;});
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}

