import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
    // name: String = "Iphone";
    // price: number = 999;
    // color: String = "Red";
    //  name="John Doe";

    // addToCart: number = 0;
    // product={
    //   name :"Iphone",
    //   price  :  999,
    //   color :  "Red",
    //   discount : 8.5,
    //   instock : 10,
    //   pimage: "/assets/iphone.png"
    // }

    // getDiscount(){
    //   return this.product.price - (this.product.price * this.product.discount/100);
    // }

//     onNameChange(event: any){
//       this.name = event.target.value;
//     }

    // decrementCartVlaue(){
    //   if(this.addToCart>0)
    //   this.addToCart--;
    // }

    // incrementCartVlaue(){
    //   if(this.addToCart<this.product.instock)
    //   this.addToCart++;
    // }


    // everything above was just for practice

    //listOfString: string[]= ["marse","jupiter","earth"];


    @ViewChild(ProductListComponent) productListComponent: ProductListComponent

    searchText: string ='';
    setsearchText(value: string){
      this.searchText = value;            // now we have access to users searchtext

    }
 }
