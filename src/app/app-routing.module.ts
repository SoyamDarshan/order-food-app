import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CheckoutSuccessfulComponent } from "./checkout-successful/checkout-successful.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { FoodItemListComponent } from "./food-item-list/food-item-list.component";

const routes: Routes = [
  { path: "food-list", component: FoodItemListComponent },
  {
    path: "checkout-page",
    component: CheckoutComponent,
    data: { cartItems: [] },
  },
  {
    path: "checkout-successful",
    component: CheckoutSuccessfulComponent,
  },
  { path: "", redirectTo: "food-list", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
