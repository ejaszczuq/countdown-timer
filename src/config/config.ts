import { get } from "env-var";

export class AppConfig {
  static readonly APP_STAGE = get("REACT_APP_STAGE").required().asString();

  static readonly CAR_RENTAL_API_URL = get("REACT_APP_CAR_RENTAL_API_URL")
    .default("http://localhost:8080")
    .asUrlString();
}
