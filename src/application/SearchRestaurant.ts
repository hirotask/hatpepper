// src/application/SearchRestaurant.ts
import { IGeoCoordinator, IGourmetService, Restaurant, Location } from "./domain"

export class SearchRestaurant {
    private geo: IGeoCoordinator
    private service: IGourmetService

    constructor(
		geo: IGeoCoordinator,
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
