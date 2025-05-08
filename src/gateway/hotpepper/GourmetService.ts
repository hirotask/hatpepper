// src/gateway/hotpepper/GourmetService.ts
import axios from 'axios'
import { Location } from '../../record/Location'
import { GourmetSearchResult } from '../../record/GourmetSearchResult'

const ENDPOINT = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/'

export class GourmetService {
    private apiKey: string

    constructor() {
        const key = process.env.HATPEPPER_API_KEY
        if (!key) {
            throw new Error('HATPEPPER_API_KEY が設定されていないのだ')
        }
        this.apiKey = key
    }

    async findNearbyAsync(location: Location): Promise<GourmetSearchResult> {
		const endpoint = `${ENDPOINT}?key=${this.apiKey}&lat=${location.latitude}&lng=${location.longitude}&range=3&format=json`
        const response = await axios.get(endpoint)
        const data = response.data
        const gourmets = data.results.shop.map((shop: any) => ({
            id: shop.id,
            name: shop.name,
            address: shop.address,
            latitude: parseFloat(shop.lat),
            longitude: parseFloat(shop.lng)
        }))
        return {
            resultsReturned: data.results.results_returned,
            resultsAvailable: data.results.results_available,
            gourmets
        }
    }
}
