import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { FoodItemListService } from "./food-item-list.service";

@Component({
  selector: "app-food-item-list",
  templateUrl: "./food-item-list.component.html",
  styleUrls: ["./food-item-list.component.scss"],
})
export class FoodItemListComponent implements OnInit {
  constructor(private foodItemListApi: FoodItemListService) {}
  foodItemList: any = [];
  foodItemSub: Subscription;
  currentTime = new Date().getTime();
  cartItems = [];
  totalAmount = 0;
  ngOnInit() {
    this.foodItemSub = this.foodItemListApi
      .getFoodItemList()
      .subscribe((res) => {
        this.foodItemList = res;
      });
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
    this.cartItems.forEach((element) => {
      this.totalAmount += element.quantity * Number(element.price);
    });
  }

  checkoutPage() {
    console.log("Done");
  }
}
