import { Component } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent {
  constructor(private cartservice: CartService) {}

  shippingCosts = this.cartservice.getShippingPrices();
}
