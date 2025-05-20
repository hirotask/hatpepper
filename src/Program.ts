// src/Program.ts
import 'dotenv/config'
import { controll } from './controller'

async function main(): Promise<void> {
    try {
        await controll('Search')
    } catch (err) {
        console.error('エラーが発生したのだ:', err)
        process.exit(1)
    }
}

main()
