// src/Program.ts
import 'dotenv/config'
import { SearchRestaurantController } from './controller/SearchRestaurantController'

async function main(): Promise<void> {
    try {
        const controller = new SearchRestaurantController()
        await controller.controll()
    } catch (err) {
        console.error('エラーが発生したのだ:', err)
        process.exit(1)
    }
}

main()
