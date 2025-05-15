// src/application/SearchRestaurant.ts
import { GeoCoordinator, Location } from '../gateway/device/GeoCoordinator'
import { IGourmetService } from './IGourmetService'
import { Restaurant } from './Restaurant'

export class SearchRestaurant {
    private geo: GeoCoordinator
    private service: IGourmetService

    constructor(
		geo: GeoCoordinator,
		service: IGourmetService
	) {
		this.geo = geo
		this.service = service
	}

    async findNearbyAsync(): Promise<Restaurant[]> {
        const location: Location = await this.geo.getCurrent()
        return await this.service.findNearbyAsync(location)
    }
}
