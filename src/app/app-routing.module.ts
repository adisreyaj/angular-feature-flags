import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { FeatureGuard } from "./core/guards/feature.guard";

const routes: Route[] = [
  {
    path: "snippets",
    loadChildren: () =>
      import("./snippets/snippets.module").then(m => m.SnippetsModule),
    canLoad: [FeatureGuard],
    data: {
      feature: "snippets"
    }
  },
  {
    path: "bookmarks",
    loadChildren: () =>
      import("./bookmarks/bookmarks.module").then(m => m.BookmarksModule),
    canLoad: [FeatureGuard],
    data: {
      feature: "bookmarks"
    }
  },
  {
    path: "packages",
    loadChildren: () =>
      import("./packages/packages.module").then(m => m.PackagesModule),
    canLoad: [FeatureGuard],
    data: {
      feature: "packages"
    }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
