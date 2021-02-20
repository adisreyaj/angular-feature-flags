import { NgModule } from "@angular/core";
import { FeatureFlagDirective } from "./feature-flag.directive";

@NgModule({
  declarations: [FeatureFlagDirective],
  exports: [FeatureFlagDirective]
})
export class FeatureFlagDirectiveModule {}
