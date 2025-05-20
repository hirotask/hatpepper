// src/presentation/SearchRestaurantView.ts
import { RestaurantViewModel } from './RestaurantViewModel'

export function show(model: RestaurantViewModel): void {
	console.log(`Results: ${model.resultsAvailable}`)
	console.log('Nearby Restaurants:')
	model.list.forEach((r, idx) => {
		console.log(`${idx + 1}. ${r.name}`)
		console.log(`   Address: ${r.address}`)
		console.log(`   Location: (${r.latitude}, ${r.longitude})`)
	})
}
