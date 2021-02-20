import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { SnippetsComponent } from "./snippets.component";

const routes: Route[] = [
  {
    path: "",
    component: SnippetsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnippetsRoutingModule {}
