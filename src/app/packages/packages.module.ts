import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PackagesComponent } from "./packages.component";
import { PackagesRoutingModule } from "./packages-routing.module";

@NgModule({
  imports: [CommonModule, PackagesRoutingModule],
  declarations: [PackagesComponent]
})
export class PackagesModule {}
