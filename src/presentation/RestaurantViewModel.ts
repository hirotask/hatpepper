import { Restaurant } from "../application/Restaurant"

// src/presentation/RestaurantViewModel.ts
export interface RestaurantViewModel {
    resultsAvailable: number
    list: {
        name: string
		genre: string
        address: string
		latitude: number
		longitude: number
    }[]
}

export function toViewModel(restaurants: Restaurant[]): RestaurantViewModel {
    return {
		resultsAvailable: restaurants.length,
		list: restaurants.map((r) => ({
			name: r.name,
			genre: r.genre,
			address: r.address,
			latitude: r.latitude,
			longitude: r.longitude
		}))
    }
}
