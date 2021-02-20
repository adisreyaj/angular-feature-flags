import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookmarksComponent } from "./bookmarks.component";
import { BookmarksRoutingModule } from "./bookmarks-routing.module";

@NgModule({
  imports: [CommonModule, BookmarksRoutingModule],
  declarations: [BookmarksComponent]
})
export class BookmarksModule {}
