import { Component, Input } from '@angular/core';
import { Product } from '../../Model/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
 

 @Input() productListComp: ProductListComponent = undefined; /// initially selected product is undefined

 product: Product

 /// still wont work coz its undefined and not yet initialized

 ngOnInit(){
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.product=this.productListComp.selectedProduct;
  
 }



}
