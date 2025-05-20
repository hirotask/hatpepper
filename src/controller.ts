// src/controller/SearchRestaurantController.ts
import { ISearchRestaurant, SearchRestaurant, UseCase,  } from './application/usecase'
import { GeoCoordinator } from './gateway/device/GeoCoordinator'
import { GourmetService } from './gateway/hotpepper/GourmetService'
import { toViewModel } from './presentation/RestaurantViewModel'
import * as SearchRestaurantView from './presentation/SearchRestaurantView'

export const controll = async (key: keyof UseCase) => {
	let useCase: UseCase[keyof UseCase]

	switch (key) {
		case 'Search': {
			useCase = SearchRestaurant(
				new GeoCoordinator(),
				new GourmetService()
			)

			const result = await useCase.find()
			const viewModel = toViewModel(result)
			SearchRestaurantView.show(viewModel)
			break
		}
		default:
			throw new Error('Invalid use case')
	}
}
