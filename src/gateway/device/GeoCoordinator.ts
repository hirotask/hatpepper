// src/gateway/device/GeoCoordinator.ts
import readline from 'readline'
import { Location } from '../../record/Location'

export class GeoCoordinator {
    async getCurrent(): Promise<Location> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        const question = (query: string) => new Promise<string>(res => rl.question(query, res))
        const lat = await question('latitude を入力してください: ')
        const lon = await question('longitude を入力してください: ')
        rl.close()
        return { latitude: parseFloat(lat), longitude: parseFloat(lon) }
    }
}
