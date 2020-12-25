import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-checkout-cart-items",
  templateUrl: "./checkout-cart-items.component.html",
  styleUrls: ["./checkout-cart-items.component.scss"],
})
export class CheckoutCartItemsComponent implements OnInit {
  @Input("item") cartItem = {};
  quantity: number;
  @Output("cartObject") cartObject = new EventEmitter();
  name: any;
  price: any;
  constructor() {}

  ngOnInit() {
    console.log(this.cartItem);
    this.quantity = this.cartItem["quantity"];
    this.name = this.cartItem["name"];
    this.price = this.cartItem["price"];
  }
  addItem() {
    this.quantity += 1;
    this.cartObject.emit({
      name: this.name,
      quantity: this.quantity,
      price: this.price,
    });
  }
  removeItem() {
    this.quantity -= 1;
    this.cartObject.emit({
      name: this.name,
      quantity: this.quantity,
      price: this.price,
    });
  }
}
