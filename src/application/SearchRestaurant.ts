// src/application/SearchRestaurant.ts
import { Location } from '../record/Location'
import { GourmetSearchResult } from '../record/GourmetSearchResult'
import { GeoCoordinator } from '../gateway/device/GeoCoordinator'
import { GourmetService } from '../gateway/hotpepper/GourmetService'

export class SearchRestaurant {
    private geo: GeoCoordinator
    private service: GourmetService

    constructor() {
        this.geo = new GeoCoordinator()
        this.service = new GourmetService()
    }

    async findNearbyAsync(): Promise<GourmetSearchResult> {
        const location: Location = await this.geo.getCurrent()
        return await this.service.findNearbyAsync(location)
    }
}
