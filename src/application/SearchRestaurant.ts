// src/application/SearchRestaurant.ts
import { GeoCoordinator, Location } from '../gateway/device/GeoCoordinator'
import { GourmetService } from '../gateway/hotpepper/GourmetService'
import { Restaurant } from './Restaurant'

export class SearchRestaurant {
    private geo: GeoCoordinator
    private service: GourmetService

    constructor() {
        this.geo = new GeoCoordinator()
        this.service = new GourmetService()
    }

    async findNearbyAsync(): Promise<Restaurant[]> {
        const location: Location = await this.geo.getCurrent()
        return await this.service.findNearbyAsync(location)
    }
}
