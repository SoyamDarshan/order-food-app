import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-checkout-successful",
  templateUrl: "./checkout-successful.component.html",
  styleUrls: ["./checkout-successful.component.scss"],
})
export class CheckoutSuccessfulComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(["food-list"]);
    }, 5000);
  }
}
