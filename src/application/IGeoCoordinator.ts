import { Location } from './Location';

export interface IGeoCoordinator {
	getCurrent(): Promise<Location>
}
