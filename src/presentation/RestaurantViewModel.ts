import { HotPepperGourmetResponse } from "../gateway/hotpepper/GourmetService"

// src/presentation/RestaurantViewModel.ts
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

export function toViewModel(data: HotPepperGourmetResponse): RestaurantViewModel {
    return {
        resultsReturned: data.results.results_returned,
        resultsAvailable: data.results.results_available,
        list: data.results.shop.map(g => ({
            id: g.id,
            name: g.name,
            address: g.address,
            latitude: parseInt(g.lat),
            longitude: parseInt(g.lng)
        }))
    }
}
