// src/controller/SearchRestaurantController.ts
import { SearchRestaurant } from '../application/SearchRestaurant'
import { toViewModel } from '../presentation/RestaurantViewModel'
import { SearchRestaurantView } from '../presentation/SearchRestaurantView'

export class SearchRestaurantController {
    private useCase: SearchRestaurant
    private view: SearchRestaurantView

    constructor() {
        this.useCase = new SearchRestaurant()
        this.view = new SearchRestaurantView()
    }

    async controll(): Promise<void> {
        const result = await this.useCase.findNearbyAsync()
        const viewModel = toViewModel(result)
        this.view.show(viewModel)
    }
}
