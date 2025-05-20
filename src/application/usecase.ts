// src/application/SearchRestaurant.ts
import { IGeoCoordinator, IGourmetService, Restaurant, Location } from "./domain"

export type UseCase = {
	'Search': ISearchRestaurant
}

export interface ISearchRestaurant {
	find(): Promise<Restaurant[]>
}

export const SearchRestaurant = (geo: IGeoCoordinator, service: IGourmetService): ISearchRestaurant => ({
	async find(): Promise<Restaurant[]> {
		const location: Location = await geo.getCurrent()
		return await service.findNearbyAsync(location)
	}
})
