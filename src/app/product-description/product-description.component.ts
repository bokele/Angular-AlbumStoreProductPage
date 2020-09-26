import { Component, OnInit } from "@angular/core";
import { Album } from "../album";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-description",
  templateUrl: "./product-description.component.html",
  styleUrls: ["./product-description.component.css"],
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo : Album;

  constructor(private _productService: ProductService) {}

  ngOnInit() {
    console.log(this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);)
    this._productService.getAlbum(1).subscribe(response=>this.albumInfo = response);

}
