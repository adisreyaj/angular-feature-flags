import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { FeatureFlagsService } from "./core/services/feature-flags.service";
import { FeatureFlagDirectiveModule } from "./core/directives/feature-directive.module";
import { HttpClientModule } from "@angular/common/http";

const featureFactory = (featureFlagsService: FeatureFlagsService) => () =>
  featureFlagsService.loadConfig();

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureFlagDirectiveModule,
    HttpClientModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: featureFactory,
      deps: [FeatureFlagsService],
      multi: true
    }
  ]
})
export class AppModule {}
