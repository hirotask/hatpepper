export interface IGeoCoordinator {
	getCurrent(): Promise<Location>
}

export interface IGourmetService {
	findNearbyAsync(location: Location): Promise<Restaurant[]>
}

export interface Location {
	latitude: number
	longitude: number
}

export interface Restaurant {
	name: string;
	genre: string;
	address: string;
	latitude: number;
	longitude: number;
}
