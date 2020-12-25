import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-checkout-cart",
  templateUrl: "./checkout-cart.component.html",
  styleUrls: ["./checkout-cart.component.scss"],
})
export class CheckoutCartComponent implements OnInit {
  @Input("cartItems") cartItems = [];
  constructor(private router: Router) {}
  totalAmount = 0;
  totalTaxAmount = 0.1 * this.totalAmount;
  grandTotal = 0;
  ngOnInit() {
    this.updateAmounts();
  }
  updateAmounts() {
    this.cartItems.forEach((element) => {
      this.totalAmount += element.quantity * Number(element.price);
    });
    this.totalTaxAmount = 0.1 * this.totalAmount;
    this.grandTotal = this.totalAmount + this.totalTaxAmount;
    if (this.grandTotal == 0) this.router.navigate(["food-list"]);
  }
  updateCart(cartObject) {
    this.totalAmount = 0;
    let foundIndex = this.cartItems.findIndex((x) => x.name == cartObject.name);
    if (foundIndex === -1) {
      this.cartItems.push(cartObject);
    } else {
      if (cartObject.quantity) this.cartItems[foundIndex] = cartObject;
      else this.cartItems.splice(foundIndex, 1);
    }
    this.updateAmounts();
  }
  checkoutSuccess() {
    this.router.navigate(["checkout-successful"]);
  }
}
