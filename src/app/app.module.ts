import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FoodItemComponent } from "./food-item/food-item.component";
import { FoodItemListComponent } from "./food-item-list/food-item-list.component";
import { HttpClientModule } from "@angular/common/http";
import { CheckoutComponent } from "./checkout/checkout.component";
import { CheckoutCartComponent } from "./checkout-cart/checkout-cart.component";
import { CheckoutCartItemsComponent } from "./checkout-cart-items/checkout-cart-items.component";
import { CheckoutSuccessfulComponent } from "./checkout-successful/checkout-successful.component";

@NgModule({
  declarations: [
    AppComponent,
    FoodItemComponent,
    FoodItemListComponent,
    CheckoutComponent,
    CheckoutCartComponent,
    CheckoutCartItemsComponent,
    CheckoutSuccessfulComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
