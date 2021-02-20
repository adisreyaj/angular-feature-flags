import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { BookmarksComponent } from "./bookmarks.component";

const routes: Route[] = [
  {
    path: "",
    component: BookmarksComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarksRoutingModule {}
