import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  cartItems = [];
  ngOnInit() {
    const data = this.route.snapshot.queryParamMap.get("cartItems");
    if (data === null) {
      this.cartItems = new Array<string>();
    } else {
      this.cartItems = JSON.parse(data);
    }
  }
}
