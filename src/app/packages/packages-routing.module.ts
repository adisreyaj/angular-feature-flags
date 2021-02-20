import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { PackagesComponent } from "./packages.component";

const routes: Route[] = [
  {
    path: "",
    component: PackagesComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesRoutingModule {}
