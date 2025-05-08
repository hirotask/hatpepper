// src/presentation/RestaurantViewModel.ts
import { GourmetSearchResult } from '../record/GourmetSearchResult'

export interface RestaurantViewModel {
    resultsReturned: number
    resultsAvailable: number
    list: {
        id: string
        name: string
        address: string
        latitude: number
        longitude: number
    }[]
}

export function toViewModel(data: GourmetSearchResult): RestaurantViewModel {
    return {
        resultsReturned: data.resultsReturned,
        resultsAvailable: data.resultsAvailable,
        list: data.gourmets.map(g => ({
            id: g.id,
            name: g.name,
            address: g.address,
            latitude: g.latitude,
            longitude: g.longitude
        }))
    }
}
