import { Restaurant } from "./Restaurant";
import { Location } from "../gateway/device/GeoCoordinator";

export interface IGourmetService {
	findNearbyAsync(location: Location): Promise<Restaurant[]>
}
