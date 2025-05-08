// src/record/GourmetSearchResult.ts
export interface Gourmet {
    id: string
    name: string
    address: string
    latitude: number
    longitude: number
}

export interface GourmetSearchResult {
    resultsReturned: number
    resultsAvailable: number
    gourmets: Gourmet[]
}
