import { City, CityBackend } from "../models/city.model";

export function cityAdapter(city: CityBackend): City {
  return {
    id: city.city_id,
    name: city.name,
  };
}
