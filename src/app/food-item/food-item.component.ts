import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-food-item",
  templateUrl: "./food-item.component.html",
  styleUrls: ["./food-item.component.scss"],
})
export class FoodItemComponent implements OnInit {
  @Input("foodData") foodData = {};
  @Output("cartObject") cartObject = new EventEmitter();
  currentTime = String(new Date().getHours() + ":" + new Date().getMinutes());
  // currentTime = "18:23";
  constructor() {}
  name: String = "";
  price: String = "";
  availableTime = [];
  availableStatus = false;
  quantity = 0;
  ngOnInit() {
    this.parseData(this.foodData);
  }
  parseData(data) {
    this.name = data.itemname;
    this.price = data.price.toFixed(2);
    this.availableTime = data.availabletime.split(",");
    for (let index = 0; index < this.availableTime.length; index++) {
      this.availableTime[index] = this.availableTime[index].split("-");
      if (
        this.availableTime[index][0] <= this.currentTime &&
        this.currentTime <= this.availableTime[index][1]
      ) {
        this.availableStatus = true;
        break;
      }
    }
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
