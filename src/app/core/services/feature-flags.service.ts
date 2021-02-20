import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { get, has } from "lodash-es";
import { tap } from "rxjs/operators";
import { FeatureConfig } from "../interfaces/feature.interface";

@Injectable({
  providedIn: "root"
})
export class FeatureFlagsService {
  config: FeatureConfig = null;
  // This should be changed to your config API
  configUrl = `https://gist.githubusercontent.com/adisreyaj/72019f18ddd41940e16baa838d086ea0/raw/8f87a2c0dd32675ff417f87776bc2217a3382adb`;

  constructor(private http: HttpClient) {}

  /**
   * We convert it to promise so that this function can
   * be called by the APP_INITIALIZER
   */
  loadConfig() {
    return this.http
      .get<FeatureConfig>(this.configUrl)
      .pipe(tap(data => (this.config = data)))
      .toPromise();
  }

  isFeatureEnabled(key: string) {
    if (this.config && has(this.config, key)) {
      return get(this.config, key, false);
    }
  }
}
