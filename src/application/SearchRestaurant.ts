// src/application/SearchRestaurant.ts
import { GeoCoordinator, Location } from '../gateway/device/GeoCoordinator'
import { GourmetService, HotPepperGourmetResponse } from '../gateway/hotpepper/GourmetService'

export class SearchRestaurant {
    private geo: GeoCoordinator
    private service: GourmetService

    constructor() {
        this.geo = new GeoCoordinator()
        this.service = new GourmetService()
    }

    async findNearbyAsync(): Promise<HotPepperGourmetResponse> {
        const location: Location = await this.geo.getCurrent()
        return await this.service.findNearbyAsync(location)
    }
}
